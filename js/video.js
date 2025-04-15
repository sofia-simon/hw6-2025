var video;

window.addEventListener("load", function() {
	video = document.querySelector("video");
	video.autoplay = false;
	video.loop = false;
	console.log("Good job opening the window")

});

// makes the video play when the "play video" button is clicked
document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");

	// when "play video" button is pressed, has the volume level displayed in id section "volume"
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});


// allows for the video to pause when the button is clicked
document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

// makes the video slower by 10% each time the "slow down" button is clicked and logs the new speed to the console 
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("New Speed: " + video.playbackRate);
});

// makes the video faster by 10% each time the "speed up" button is clicked and logs the new speed to the console
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("New Speed: " + video.playbackRate);
});

// makes the video skip ahead 10 seconds each time the "skip ahead" button is clicked
document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Current location: " + video.currentTime);
});

// allows for the volume to be muted when the button is clicked and changes the button text to "Unmute" or "Mute" when clicked
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

// updates the volume when the slider is moved and displays the volume level in the id section "volume"
document.querySelector("#slider").addEventListener("input", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log(video.volume);
});

// adds the "vintage" class so that the video will appear as vintage when the old school button is pressed
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Old School");
});

// removes the old school class from the video so that it is back in its "original" state
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Original");
});



// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

