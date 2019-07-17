### Audio
```html
<audio src="audiofile.mp3" autoplay></audio>
``` 
Autoplay: Whether to automatically play 
loop: whether to loop 
muted: whether to mute 
preload: preload none does not load metadata load header information auto preload all information 
controls: whether to display native control panel 
src: file address 
type: file attribute

Properties that can only be obtained with js currentTime: play time volume: volume playbackRate: play speed paused: read-only attribute, indicating whether it is in pause state play(): play pause(): pause canPlayType(): detect whether a certain file type is supported Load(): triggers the preload event loadstart when the file is supported: the loading process starts the durationchange: the playback time callback loadedmetadata: the header file is ready but not ready to play progress: the media file is being downloaded canplay: the media file can be played canplaythrough: The media file is completely buffered suspend: the media data is no longer pulled even if the file has not been completely downloaded. Abort: The media data download is not aborted due to an error. Error: An error occurred during the media download. For example, suddenly there is no network. Or the file address is incorrect. Emptyed: The media buffer has been emptied, possibly due to an error or by calling the load() method to reload. Stalled: Media data is unexpectedly no longer available.

Timeupdate: play progress playing: forced to stop after replaying waiting: forced to stop playing play: play () when pause: pause () execution: when the playback is finished volumechange: when the volume changes ratechange: when the playback speed changes

Seeking: resources are being requested when requested: at the end of the request

Buffered: part of the buffered seekable: whether you can jump directly to the audio somewhere
