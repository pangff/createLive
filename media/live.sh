ffmpeg -i `pwd`/media/test.mp4 -c:v libx264 -c:a aac -strict -2 -f hls `pwd`/media/live.m3u8