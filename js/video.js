var video;

// page load 
window.addEventListener("load", function() {
	// console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	// console.log("Auto play is set to " + video.autoplay);
	// console.log("Loop is set to " + video.loop);
});

// play button 
document.querySelector("#play").addEventListener("click", function() {
	// console.log("Play Video");
	video = document.querySelector("#player1");
	video.play();

	// update volume
	volumeSlider = document.querySelector("#slider").value;
	document.querySelector("#volume").innerHTML =  volumeSlider + "%";
});

// volume slider
document.querySelector("#slider").addEventListener("input", function() {
	video = document.querySelector("#player1");
	volumeSlider = document.querySelector("#slider").value;
	document.querySelector("#volume").innerHTML =  volumeSlider + "%";
	video.volume = volumeSlider / 100; 
});

// pause button
document.querySelector("#pause").addEventListener("click", function() {
	// console.log("Pause Video");
	video = document.querySelector("#player1");
	video.pause();
});

// slow down
document.querySelector("#slower").addEventListener("click", function() {
	// console.log("slow down video");
	video = document.querySelector("#player1");
	video.playbackRate -= 0.1; 
	console.log("New speed: " + video.playbackRate);
});

// speed up
document.querySelector("#faster").addEventListener("click", function() {
	// console.log("speed up video");
	video = document.querySelector("#player1");
	video.playbackRate += 0.1; 
	console.log("New speed: " + video.playbackRate);
});

// skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	video = document.querySelector("#player1");
	video.currentTime += 10; 
	if (video.currentTime + 10 > video.duration ){
		video.currentTime = 0; 
	}
	console.log("Current location: " + video.currentTime);
});

// mute 
document.querySelector("#mute").addEventListener("click", function() {
	// console.log("speed up video");
	video = document.querySelector("#player1");
	if(video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML =  "Mute";
	}
	else{
		video.muted = true;
		document.querySelector("#mute").innerHTML =  "Unmute";
	}
});

// styled
document.querySelector("#vintage").addEventListener("click", function() {
	// console.log("speed up video");
	video = document.querySelector("#player1");
	video.style.filter = "grayscale()";
});

// original
document.querySelector("#orig").addEventListener("click", function() {
	// console.log("speed up video");
	video = document.querySelector("#player1");
	video.style.filter = "none";
});




