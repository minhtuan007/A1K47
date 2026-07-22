$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

$projectRoot = Split-Path -Parent $PSScriptRoot
$distRoot = Join-Path $projectRoot 'dist'
$expectedDistRoot = [System.IO.Path]::GetFullPath((Join-Path $projectRoot 'dist'))

if ([System.IO.Path]::GetFullPath($distRoot) -ne $expectedDistRoot) {
    throw "Unexpected dist path: $distRoot"
}

if (Test-Path -LiteralPath $distRoot) {
    Remove-Item -LiteralPath $distRoot -Recurse -Force
}

New-Item -ItemType Directory -Path $distRoot | Out-Null
New-Item -ItemType Directory -Path (Join-Path $distRoot 'css') | Out-Null
New-Item -ItemType Directory -Path (Join-Path $distRoot 'js') | Out-Null
New-Item -ItemType Directory -Path (Join-Path $distRoot 'footage') | Out-Null
New-Item -ItemType Directory -Path (Join-Path $distRoot 'data') | Out-Null

$rootFiles = @('index.html', 'hocsinh.html', 'video.html')
$cssFiles = @(
    'hocsinh.css',
    'hocsinh_mobile.css',
    'main.css',
    'main_mobile.css',
    'tailwind.generated.css',
    'video.css',
    'video_mobile.css'
)
$javascriptFiles = @('home.js', 'hocsinh.js', 'video.js')
$sharedImages = @('facebook-circle.png', 'GVCN3.jpg', 'logok47a1.jpg')

foreach ($file in $rootFiles) {
    Copy-Item -LiteralPath (Join-Path $projectRoot $file) -Destination (Join-Path $distRoot $file)
}
foreach ($file in $cssFiles) {
    Copy-Item -LiteralPath (Join-Path (Join-Path $projectRoot 'css') $file) -Destination (Join-Path (Join-Path $distRoot 'css') $file)
}
foreach ($file in $javascriptFiles) {
    Copy-Item -LiteralPath (Join-Path (Join-Path $projectRoot 'js') $file) -Destination (Join-Path (Join-Path $distRoot 'js') $file)
}
Copy-Item -LiteralPath (Join-Path (Join-Path $projectRoot 'data') 'student-private.enc.json') -Destination (Join-Path (Join-Path $distRoot 'data') 'student-private.enc.json')
foreach ($file in $sharedImages) {
    Copy-Item -LiteralPath (Join-Path (Join-Path $projectRoot 'footage') $file) -Destination (Join-Path (Join-Path $distRoot 'footage') $file)
}

Copy-Item -LiteralPath (Join-Path (Join-Path $projectRoot 'footage') 'optimized') -Destination (Join-Path (Join-Path $distRoot 'footage') 'optimized') -Recurse
New-Item -ItemType File -Path (Join-Path $distRoot '.nojekyll') | Out-Null

$forbiddenDirectories = @('hocsinh_footage', 'noibat', 'video_footage')
foreach ($directory in $forbiddenDirectories) {
    if (Test-Path -LiteralPath (Join-Path (Join-Path $distRoot 'footage') $directory)) {
        throw "Source image directory leaked into dist: $directory"
    }
}

$distFiles = Get-ChildItem $distRoot -Recurse -File
[pscustomobject]@{
    Output = $distRoot
    Files = $distFiles.Count
    MiB = [Math]::Round((($distFiles | Measure-Object Length -Sum).Sum) / 1MB, 2)
}
