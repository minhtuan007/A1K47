$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

$projectRoot = Split-Path -Parent $PSScriptRoot
Push-Location $projectRoot
try {
    Get-ChildItem 'js' -Filter '*.js' | ForEach-Object {
        & node --check $_.FullName
        if ($LASTEXITCODE -ne 0) {
            throw "JavaScript syntax check failed: $($_.Name)"
        }
    }

    $contentFiles = @(
        Get-ChildItem -File -Filter '*.html'
        Get-ChildItem 'css', 'js' -Recurse -File
    )
    $missing = @()
    foreach ($file in $contentFiles) {
        $content = Get-Content -Raw -Encoding utf8 $file.FullName
        foreach ($match in [regex]::Matches($content, '(?:src|href)=["'']([^"''#?]+)|url\(["'']?([^"'')]+)')) {
            $reference = if ($match.Groups[1].Success) { $match.Groups[1].Value } else { $match.Groups[2].Value }
            if ($reference -match '^(?:https?:|data:|#)') {
                continue
            }

            $baseDirectory = if ($file.Extension -eq '.js') { $projectRoot } else { $file.DirectoryName }
            $target = [System.IO.Path]::GetFullPath((Join-Path $baseDirectory $reference))
            if (-not (Test-Path -LiteralPath $target)) {
                $missing += "$($file.FullName): $reference"
            }
        }
    }
    if ($missing) {
        throw "Missing local references:`n$($missing -join "`n")"
    }

    Get-ChildItem -File -Filter '*.html' | ForEach-Object {
        $html = Get-Content -Raw -Encoding utf8 $_.FullName
        if ($html -match '<base\s') {
            throw "Hard-coded base URL is not allowed: $($_.Name)"
        }
        if ($html -match 'googletagmanager|cdn\.tailwindcss\.com') {
            throw "Runtime analytics/Tailwind CDN dependency remains: $($_.Name)"
        }
        if ($html -notmatch 'http-equiv="Content-Security-Policy"') {
            throw "Content Security Policy is missing: $($_.Name)"
        }
        if ($html -match "script-src[^;]*(?:'unsafe-inline'|'unsafe-eval')") {
            throw "Unsafe script policy detected: $($_.Name)"
        }
        foreach ($anchor in [regex]::Matches($html, '<a\b[^>]*target="_blank"[^>]*>')) {
            if ($anchor.Value -notmatch 'rel="[^"]*noopener[^"]*"' -or $anchor.Value -notmatch 'rel="[^"]*noreferrer[^"]*"') {
                throw "Unsafe target=_blank link in $($_.Name): $($anchor.Value)"
            }
        }
        $ids = [regex]::Matches($html, '\sid="([^"]+)"') | ForEach-Object { $_.Groups[1].Value }
        $duplicates = $ids | Group-Object | Where-Object Count -gt 1
        if ($duplicates) {
            throw "Duplicate HTML ids in $($_.Name): $($duplicates.Name -join ', ')"
        }
    }

    $studentScript = Get-Content -Raw -Encoding utf8 'js/hocsinh.js'
    $sensitivePatterns = @(
        "'0\d{9}'",
        "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}",
        "'\d{1,2}/\d{1,2}/2006'",
        '(?:var|let|const)\s+(?:key|password)\s*=\s*["'']'
    )
    foreach ($pattern in $sensitivePatterns) {
        if ($studentScript -match $pattern) {
            throw "Sensitive student data pattern remains in js/hocsinh.js: $pattern"
        }
    }

    $encryptedDataPath = 'data/student-private.enc.json'
    if (-not (Test-Path -LiteralPath $encryptedDataPath)) {
        throw 'Encrypted student data is missing.'
    }
    $encryptedDataText = Get-Content -Raw -Encoding utf8 $encryptedDataPath
    if ($encryptedDataText -match '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}' -or
        $encryptedDataText -match '"(?:birth|phone|email)"\s*:\s*"') {
        throw 'Plaintext student data leaked into the encrypted data file.'
    }
    $encryptedData = $encryptedDataText | ConvertFrom-Json
    if ($encryptedData.version -ne 1 -or
        $encryptedData.kdf.name -ne 'PBKDF2' -or
        $encryptedData.kdf.hash -ne 'SHA-256' -or
        $encryptedData.kdf.iterations -lt 600000 -or
        $encryptedData.cipher.name -ne 'AES-GCM' -or
        $encryptedData.cipher.tagLength -ne 128 -or
        [string]::IsNullOrWhiteSpace($encryptedData.ciphertext)) {
        throw 'Encrypted student data does not meet the required cryptographic policy.'
    }

    $forbiddenPlaintextFiles = Get-ChildItem -Recurse -File | Where-Object {
        $_.FullName -notmatch '[\\/]node_modules[\\/]|[\\/]dist[\\/]|[\\/]\.git[\\/]' -and
        ($_.Name -eq 'student-private.json' -or $_.Name -like 'private-data*.json' -or $_.Name -like '*.plain.json')
    }
    if ($forbiddenPlaintextFiles) {
        throw "Possible plaintext private-data file found inside the project: $($forbiddenPlaintextFiles.FullName -join ', ')"
    }

    $expectedOptimizedAssets = @{
        'footage/optimized/hocsinh' = 45
        'footage/optimized/noibat' = 12
        'footage/optimized/video' = 17
    }
    foreach ($entry in $expectedOptimizedAssets.GetEnumerator()) {
        $assetCount = (Get-ChildItem -LiteralPath $entry.Key -File).Count
        if ($assetCount -ne $entry.Value) {
            throw "Unexpected optimized asset count in $($entry.Key): expected $($entry.Value), found $assetCount"
        }
    }
    if (-not (Test-Path -LiteralPath 'footage/optimized/bg_img.jpg')) {
        throw 'Optimized background image is missing.'
    }

    "Checks passed: syntax, resources, CSP/link safety, HTML integrity, privacy, and optimized assets."
}
finally {
    Pop-Location
}
