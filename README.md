# createLive
m3u8格式的简单http server。同时模拟了点播、直播

## 使用方式

* clone项目
* 进入项目跟目录
 
 ```
 npm install
 node server.js
 ```
* 点播访问地址:http://localhost/media/index-vod.m3u8
* 直播访问地址:http://localhost/media/index-live.m3u8

## 备注

* 直播模拟方式是通过动态修改live.m3u8文件内容实现的
* output0.ts - output13.ts 是通过[ffmpeg](https://ffmpeg.org/)视频切片获得
* 由于视频切片后ts文件时长不都是10s，为了简单都定义为了10s所以直播中每个ts间可能有卡顿

视频切片命令

```
ffmpeg -i test.mp4 -c:v libx264 -c:a aac -strict -2 -f hls output.m3u8
```

