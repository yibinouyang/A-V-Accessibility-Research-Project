	// 播放
	function beginVideo() {
        var myVideo = document.getElementsByTagName('video')[0];
        var sr1=document.getElementById('pic').src;
        myVideo.play();   
     }
     // 暂停
     function stopVideo() {
        var myVideo = document.getElementsByTagName('video')[0];
        var sr1=document.getElementById('stop1').src;
        myVideo.pause();	   
     }
     // 减声音
     function soundLow() {
         var myVideo = document.getElementsByTagName('video')[0];
         myVideo.volume=0.2;
     }
     // 加声音
     function soundHigh() {
         var myVideo = document.getElementsByTagName('video')[0];
         myVideo.volume=0.5;
     }
     // 静音
     function muteVideo() {
         var myVideo = document.getElementsByTagName('video')[0];
         if(myVideo.muted==true){
             myVideo.muted=false;
         }else{
             myVideo.muted=true;
         }
     }
     // 重播
     function replayVideo() {
         var myVideo = document.getElementsByTagName('video')[0];
         myVideo.load();
         myVideo.play();
     }