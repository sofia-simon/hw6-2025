var video;

window.addEventListener("load", function() {
	video = document.querySelector("video");
	video.autoplay = false;
	video.loop = false;
	console.log("Good job opening the window")

});

// make the video play when the button is clicked
document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");

	// when play button is pressed, have the volume level displayed in id section "volume"
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});


// make the video pause when the button is clicked
document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

// make the video slower by 10% each time the button is clicked and log the new speed to the console 
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("New Speed: " + video.playbackRate);
});

// make the video faster by 10% each time the button is clicked and log the new speed to the console
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("New Speed: " + video.playbackRate);
});

// make the video skip ahead 10 seconds each time the button is clicked
document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Current location: " + video.currentTime);
});

// make the mute button work
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		this.innerHTML = "Mute";
	} else {
		video.muted = true;
		this.innerHTML = "Unmute";
	}
	console.log(video.muted);
});

// make the volume slider work
document.querySelector("#slider").addEventListener("input", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log(video.volume);
});

// make the old school button work
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Old School");
});

// make the original button work
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Original");
});



// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

