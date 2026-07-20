// ===================================
// WKOR FM RADIO
// 24/7 RADIO AUTOMATION
// ===================================

const playlist = [

{
title:"THE SIGNAL FILTER - TEASER 1",
artist:"DJPOLO",
src:"music/teaser1.mp3",
cover:"images/cover1.jpg"
},

{
title:"THE PYTHON STRIKE - TEASER",
artist:"DJPOLO",
src:"music/teaser2.mp3",
cover:"images/cover2.jpg"
},

{
title:"GRIDLOCK PROTOCOL - INTRO",
artist:"DJPOLO",
src:"music/intro.mp3",
cover:"images/cover3.jpg"
}

];

// --------------------

const radio = document.getElementById("radio");

const title = document.getElementById("songTitle");

const artist = document.getElementById("artist");

const cover = document.getElementById("albumArt");

const miniCover = document.getElementById("miniCover");

const currentTime = document.getElementById("currentTime");

const duration = document.getElementById("duration");

const tracks = document.querySelectorAll(".track");

let currentSong = 0;

// --------------------

function loadSong(index){

radio.src = playlist[index].src;

title.textContent = playlist[index].title;

artist.textContent = playlist[index].artist;

cover.src = playlist[index].cover;

miniCover.src = playlist[index].cover;

tracks.forEach(track=>track.classList.remove("active"));

tracks[index].classList.add("active");

radio.load();

}

// --------------------

function playCurrent(){

radio.play().catch(()=>{

console.log("Browser waiting for first user interaction.");

});

}

// --------------------

radio.addEventListener("loadedmetadata",()=>{

duration.textContent = formatTime(radio.duration);

});

// --------------------

radio.addEventListener("timeupdate",()=>{

currentTime.textContent = formatTime(radio.currentTime);

});

// --------------------

radio.addEventListener("ended",()=>{

currentSong++;

if(currentSong>=playlist.length){

currentSong=0;

}

loadSong(currentSong);

playCurrent();

});

// --------------------

function formatTime(seconds){

if(isNaN(seconds)) return "00:00";

const min=Math.floor(seconds/60);

const sec=Math.floor(seconds%60);

return String(min).padStart(2,"0")+":"+String(sec).padStart(2,"0");

}

// --------------------

loadSong(currentSong);

window.addEventListener("load",()=>{

playCurrent();

});

// --------------------
// LIVE LED EFFECT
// --------------------

const liveDot=document.getElementById("liveDot");

setInterval(()=>{

liveDot.classList.toggle("pulse");

},700);

// --------------------
// OPTIONAL
// Fake listener counter
// --------------------

const listener=document.getElementById("listenerCount");

if(listener){

let total=2785;

setInterval(()=>{

total+=Math.floor(Math.random()*5)-2;

listener.textContent=total;

},4000);

}