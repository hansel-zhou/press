### Audio
```html
<audio src="audiofile.mp3" autoplay></audio>
``` 
autoplay：是否自动播放
loop：是否循环播放
muted：是否静音
preload：预加载
          none 不加载
          metadata 加载头信息
          auto 预加载全部信息
controls：是否显示原生控制面板
src：文件地址
type：文件属性

只能用js获取的属性
  currentTime：播放时长
  volume：音量
  playbackRate：播放速度
  paused： 只读属性，表示是否处于暂停状态
  play()：播放
  pause()：暂停
  canPlayType()：检测是否支持某种文件类型
  load()：在文件支持的情况下，触发预加载
事件
  loadstart：加载过程开启
  durationchange：播放时间回调
  loadedmetadata：头文件就绪但还没准备好播放
  progress：媒体文件正在下载
  canplay：媒体文件可播放
  canplaythrough：媒体文件完全缓冲完毕
  suspend：即使文件尚未完全下载，也不再拉取媒体数据。
  abort：不是因为出错而导致的媒体数据下载中止。
  error：媒体下载过程中错误。例如突然无网络了。或者文件地址不对。
  emptied：媒体缓冲区已被清空，可能是由于错误或调用了load()方法重新加载。
  stalled：媒体数据意外地不再可用。

  timeupdate：播放进度
  playing：被迫停止后重新播放时
  waiting：被迫停止播放时
  play：play()执行时
  pause：pause()执行时
  ended：播放完毕时
  volumechange：音量变化时
  ratechange：播放速度变化时

  seeking：资源正在请求时
  seeked：请求结束时

buffered：已经缓冲的部分
seekable：是否可以直接跳到音频某处





