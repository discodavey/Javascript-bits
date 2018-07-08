var audio = document.getElementById('audio');
var playBtn = document.getElementById('play');
var rwdBtn = document.getElementById('rewind');
var fwdBtn = document.getElementById('forward');
var stopBtn = document.getElementById('stop');

audio.addEventListener('progress', function() {
	console.log(audio.duration);
})

playBtn.addEventListener('click', function(){
	audio[audio.paused ? 'play' : 'pause']();

});

rwdBtn.addEventListener('click', function(){
	audio.currentTime = audio.currentTime - 10;
});

fwdBtn.addEventListener('click', function(){
	audio.currentTime = audio.currentTime + 10;
});

stopBtn.addEventListener('click', function(){
	audio.pause();
})

audio.ontimeupdate = function() {myFunction()};

 function myFunction() {
 	document.getElementById('time').innerHTML = audio.currentTime;
 }



