param(
    [int]$JpegQuality = 80
)

$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

$projectRoot = Split-Path -Parent $PSScriptRoot
$footageRoot = Join-Path $projectRoot 'footage'
$outputRoot = Join-Path $footageRoot 'optimized'

Add-Type -AssemblyName System.Drawing

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
    Where-Object MimeType -eq 'image/jpeg'

function Convert-ToOptimizedJpeg {
    param(
        [Parameter(Mandatory)] [string]$Source,
        [Parameter(Mandatory)] [string]$Destination,
        [Parameter(Mandatory)] [int]$MaxWidth,
        [Parameter(Mandatory)] [int]$MaxHeight
    )

    New-Item -ItemType Directory -Path (Split-Path -Parent $Destination) -Force | Out-Null
    $sourceImage = [System.Drawing.Image]::FromFile($Source)
    try {
        $orientation = $sourceImage.PropertyItems |
            Where-Object Id -eq 274 |
            Select-Object -First 1
        if ($orientation) {
            switch ($orientation.Value[0]) {
                2 { $sourceImage.RotateFlip([System.Drawing.RotateFlipType]::RotateNoneFlipX) }
                3 { $sourceImage.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone) }
                4 { $sourceImage.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipX) }
                5 { $sourceImage.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipX) }
                6 { $sourceImage.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone) }
                7 { $sourceImage.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipX) }
                8 { $sourceImage.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone) }
            }
        }

        $scale = [Math]::Min(
            1.0,
            [Math]::Min(
                [double]$MaxWidth / [double]$sourceImage.Width,
                [double]$MaxHeight / [double]$sourceImage.Height
            )
        )
        $targetWidth = [Math]::Max(1, [int][Math]::Round($sourceImage.Width * $scale))
        $targetHeight = [Math]::Max(1, [int][Math]::Round($sourceImage.Height * $scale))
        $bitmap = New-Object System.Drawing.Bitmap($targetWidth, $targetHeight)
        try {
            $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
            try {
                $graphics.Clear([System.Drawing.Color]::White)
                $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
                $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
                $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
                $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
                $graphics.DrawImage($sourceImage, 0, 0, $targetWidth, $targetHeight)
            }
            finally {
                $graphics.Dispose()
            }

            $encoderParameters = New-Object System.Drawing.Imaging.EncoderParameters(1)
            $encoderParameters.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
                [System.Drawing.Imaging.Encoder]::Quality,
                [long]$JpegQuality
            )
            try {
                $bitmap.Save($Destination, $jpegCodec, $encoderParameters)
            }
            finally {
                $encoderParameters.Dispose()
            }
        }
        finally {
            $bitmap.Dispose()
        }
    }
    finally {
        $sourceImage.Dispose()
    }
}

$jobs = @(
    @{ Source = (Join-Path $footageRoot 'bg_img.jpg'); Destination = (Join-Path $outputRoot 'bg_img.jpg'); MaxWidth = 1920; MaxHeight = 1080 }
)

Get-ChildItem (Join-Path $footageRoot 'hocsinh_footage') -File | ForEach-Object {
    $jobs += @{
        Source = $_.FullName
        Destination = Join-Path (Join-Path $outputRoot 'hocsinh') ($_.BaseName + '.jpg')
        MaxWidth = 900
        MaxHeight = 1200
    }
}

Get-ChildItem (Join-Path $footageRoot 'noibat') -File | ForEach-Object {
    $jobs += @{
        Source = $_.FullName
        Destination = Join-Path (Join-Path $outputRoot 'noibat') ($_.BaseName + '.jpg')
        MaxWidth = 1600
        MaxHeight = 1000
    }
}

Get-ChildItem (Join-Path $footageRoot 'video_footage') -File | ForEach-Object {
    $jobs += @{
        Source = $_.FullName
        Destination = Join-Path (Join-Path $outputRoot 'video') ($_.BaseName + '.jpg')
        MaxWidth = 640
        MaxHeight = 640
    }
}

foreach ($job in $jobs) {
    Convert-ToOptimizedJpeg @job
}

$originalBytes = ($jobs | ForEach-Object { (Get-Item $_.Source).Length } | Measure-Object -Sum).Sum
$optimizedBytes = ($jobs | ForEach-Object { (Get-Item $_.Destination).Length } | Measure-Object -Sum).Sum

[pscustomobject]@{
    Files = $jobs.Count
    OriginalMiB = [Math]::Round($originalBytes / 1MB, 2)
    OptimizedMiB = [Math]::Round($optimizedBytes / 1MB, 2)
    ReductionPercent = [Math]::Round((1 - ($optimizedBytes / $originalBytes)) * 100, 1)
}
