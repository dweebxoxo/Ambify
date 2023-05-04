var sound1 = new Audio();
sound1.src = "/Task-Audios/Audios/ambulance sound.wav"

var PlayPauseBTN1 = document.getElementById('PlayPauseBTN1');
var count = 0;
function playpause1() {
    if (count == 0) {
        count = 1;
        sound1.play();
    } else {
        count = 0;
        sound1.pause();
    }
}

var sound2 = new Audio();
sound2.src = "/Task-Audios/Audios/birds.wav"

var PlayPauseBTN2 = document.getElementById('PlayPauseBTN2');
var count = 0;
function playpause2() {
    if (count == 0) {
        count = 1;
        sound2.play();
    } else {
        count = 0;
        sound2.pause();
    }
}

var sound3 = new Audio();
sound3.src = "/Task-Audios/Audios/camp_fire.wav"

var PlayPauseBTN3 = document.getElementById('PlayPauseBTN3');
var count = 0;
function playpause3() {
    if (count == 0) {
        count = 1;
        sound3.play();
    } else {
        count = 0;
        sound3.pause();
    }
}

// var sound4 = new Audio();
// sound4.src = "Task-Audios/Audios/chilren_audience.wav"

// var sound5 = new Audio();
// sound5.src = "Task-Audios/Audios/city_road.wav"

// var sound6 = new Audio();
// sound6.src = "Task-Audios/Audios/clock_timer.wav"

// var sound7 = new Audio();
// sound7.src = "Task-Audios/Audios/rain.mp3"

// var sound8 = new Audio();
// sound8.src = "Task-Audios/Audios/water_waves.wav"

// var sound9 = new Audio();
// sound9.src = "Task-Audios/Audios/wind.wav"
