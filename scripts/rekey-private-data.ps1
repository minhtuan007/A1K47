param(
    [string]$File = 'data/student-private.enc.json'
)

$ErrorActionPreference = 'Stop'
$oldSecurePassword = Read-Host 'Enter current password' -AsSecureString
$newSecurePassword = Read-Host 'Enter new password (at least 14 characters)' -AsSecureString
$oldPasswordPointer = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($oldSecurePassword)
$newPasswordPointer = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($newSecurePassword)

try {
    $env:PRIVATE_DATA_OLD_PASSWORD = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($oldPasswordPointer)
    $env:PRIVATE_DATA_PASSWORD = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($newPasswordPointer)
    & node "$PSScriptRoot\rekey-private-data.js" --file $File
    if ($LASTEXITCODE -ne 0) {
        throw 'Unable to re-encrypt private data.'
    }
}
finally {
    Remove-Item Env:PRIVATE_DATA_OLD_PASSWORD -ErrorAction SilentlyContinue
    Remove-Item Env:PRIVATE_DATA_PASSWORD -ErrorAction SilentlyContinue
    [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($oldPasswordPointer)
    [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($newPasswordPointer)
}
