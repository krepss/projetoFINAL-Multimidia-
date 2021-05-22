const myVideo = document.getElementById('myVideo');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const timeOut = document.getElementById('timeOut');
const prox = document.getElementById('prox');
const vidNum = document.getElementById('vidNum');
const stop = document.getElementById('stop');
const mute = document.getElementById('mute');
const mais = document.getElementById('mais');
const menos = document.getElementById('menos');
const av1x = document.getElementById('av1x');
const re1x = document.getElementById('re1x');


let timer = null;


re1x.addEventListener('click', retroceder1x);
av1x.addEventListener('click', avancar1x);
menos.addEventListener('click', diminuirV);
mais.addEventListener('click', aumentarV);
mute.addEventListener('click', muted);
stop.addEventListener('click', vidAction);
play.addEventListener('click', vidAction);
pause.addEventListener('click', vidAction);
myVideo.addEventListener('ended', vidEnded);
prox.addEventListener('click', nextVideo);

const vids = ["vclovis.mp4", "lkarnal.mp4"];
let vidPlaying = 0;

function vidAction (event){
    switch(event.target.id){
        case "play":
            playVideo();
            timer = setInterval(update, 100);
            break;
        case "pause":
            myVideo.pause();
            break;
        case "stop":
            myVideo.pause();
            myVideo.currentTime = 0;
            break;
    }
}

function playVideo (){
    myVideo.play();
    timer = setInterval(update, 100);
}

function update(){
    timeOut.innerHTML = "Time: " + myTime(myVideo.currentTime) + "/" + myVideo(myVideo.currentTime) + "/" + myTime(myVideo.duration);
}

function myTime(time){
    var hr = ~~( time / 3600);
    var min = ~~((time % 3600) / 60);
    var sec = (time % 60);
    var sec_min = "";
    if (hr > 0) {
        sec_min += "" + hrs + ":" + (min < 10 ? "0" : "");
    }
    sec_min += "" + min + ":" + (sec < 10 ? "0" : "");
    sec_min += "" + Math.round(sec);
    return sec_min;
}

function vidEnded(){
    clearInterval(timer);
    timeOut.innerHTML = "Timer: 0";
    nextVideo();
    playVideo();
}

function nextVideo(){
    if(vidPlaying < 1){
        vidPlaying++;
    }else {
        vidPlaying = 0;
    }
    myVideo.src = "videos/" + vids[vidPlaying];
    vidNum.innerHTML = (vidPlaying+1) + "/2";
}


function muted(){
    if (!myVideo.muted)
        myVideo.muted= true;
        else
            myVideo.muted = false;
}


function aumentarV (){
    myVideo.volume += 0.2;
}

function diminuirV(){
    myVideo.volume -= 0.1;
}

function avancar1x (){
    myVideo.currentTime += 10;
}

function retroceder1x(){
    myVideo.currentTime -= 10;
}

