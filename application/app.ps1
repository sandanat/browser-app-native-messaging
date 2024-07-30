$Incoming = Read-Host
# $Incoming = '{"command": "test"}'

if ($Incoming) {
    $LogPath = "$PSScriptRoot/app.log"
    # Delete JSON Unicode escape notation
    $Formatted = [System.Text.RegularExpressions.Regex]::Replace($Incoming, '%\u0000\u0000\u0000', '') | ConvertFrom-Json
    # $Formatted | Out-File -FilePath $LogPath -Append

    if ($Formatted.command -eq "test") {
        $Data = @{
            text = "Response for test command"
        }
    }
}
else {
    $Data = @{
        text = "Response for NOT test command"
    }
}
 
$FormatData = $Data | ConvertTo-Json  -Compress
$Result = [System.Text.UTF8Encoding]::new().GetBytes($FormatData)
$Writer = New-Object System.IO.BinaryWriter([System.Console]::OpenStandardOutput());
$Writer.Write([Int32]$Result.length)
$Writer.Write($Result)
$Writer.Flush()
$Writer.Close()