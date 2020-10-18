## PowerShell script to optimize preview GIF and images

Required: ffmpeg

### Convert

Current version only needs `mp4` and `webm`

```ps
$a = 'filename'
Invoke-Expression "ffmpeg -i $a.gif $a.mp4; ffmpeg -i $a.gif -c vp9 -b:v 0 -crf 41 $a.webm"
```

- `png` to `webp`, `gif` to `mp4`, `gif` to `webm`,

```ps
$a = 'filename'
Invoke-Expression "cwebp $a.png -o $a.webp; ffmpeg -i $a.gif $a.mp4; ffmpeg -i $a.gif -c vp9 -b:v 0 -crf 41 $a.webm"
```