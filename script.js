var sound1 = new Audio();
sound1.src = "/Task-Audios/Audios/ambulance sound.wav"

var sound2 = new Audio();
sound2.src = "/Task-Audios/Audios/birds.wav"

var PlayPauseBTN = document.getElementById('PlayPauseBTN');
var count = 0;

function playpause() {
    if (count == 0) {
        count = 1;
        sound1.play();
    } else {
        count = 0;
        sound1.pause();
    }
}