const pumpkinFaces = document.querySelectorAll(".pumpkin-face");
const jumpscareOverlay = document.getElementById("jumpscare-overlay");

pumpkinFaces.forEach(face => {
    face.style.cursor = "pointer";
    face.addEventListener("click", (e) => {
        e.stopPropagation();
        jumpscareOverlay.classList.add("active");
        document.body.classList.add("shaking");
        setTimeout(() => {
            jumpscareOverlay.classList.remove("active");
            document.body.classList.remove("shaking");
        }, 1200);
    });
});

const audio = document.getElementById("horror-audio");
const btn = document.getElementById("togglebtn");

let audioPlaying = false;

btn.addEventListener('click', async () => {

    if(jumpscareOverlay) {
        jumpscareOverlay.classList.add("active");
        document.body.classList.add("shaking");
        setTimeout(() => {
            jumpscareOverlay.classList.remove("active");
            document.body.classList.remove("shaking");
        }, 1200);
    }
    try {   
        if (!audioPlaying){
            await audio.play();
            audioPlaying = true;
            btn.classList.add("playing");
            btn.textContent = "Audio: ON";
        }
        else {
            audio.pause();
            audioPlaying = false;
            btn.classList.remove("playing");
            btn.textContent = "Audio: OFF";
        }
    }
    catch(error) {
        console.error("audio failed( browser restriction ):", error);
    }
});