## PowerShell script to optimize preview GIF and images

Required: ffmpeg
 
```
$a = 'filename'
Invoke-Expression "cwebp $a.png -o $a.webp; ffmpeg -i $a.gif $a.mp4; ffmpeg -i $a.gif -c vp9 -b:v 0 -crf 41 $a.webm"
```