param(
    [Parameter(Mandatory = $true)]
    [string]$InputFile,
    [string]$OutputFile = 'data/student-private.enc.json'
)

$ErrorActionPreference = 'Stop'
$securePassword = Read-Host 'Enter new password (at least 14 characters)' -AsSecureString
$passwordPointer = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($securePassword)

try {
    $env:PRIVATE_DATA_PASSWORD = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($passwordPointer)
    & node "$PSScriptRoot\encrypt-private-data.js" --input $InputFile --output $OutputFile
    if ($LASTEXITCODE -ne 0) {
        throw 'Unable to encrypt private data.'
    }
}
finally {
    Remove-Item Env:PRIVATE_DATA_PASSWORD -ErrorAction SilentlyContinue
    [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($passwordPointer)
}
