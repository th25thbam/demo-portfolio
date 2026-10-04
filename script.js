const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");
const pumpkinFaces = document.querySelectorAll(".pumpkin-face");
const jumpscareOverlay = document.getElementById("jumpscare-overlay");
const horrorAudio = document.getElementById("horror-audio");
let audioStarted = false;

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

function createBats() {
    const batCount = 8;
    for (let i = 0; i < batCount; i++) {
        const bat = document.createElement("div");
        bat.classList.add("spooky-bat");
        bat.style.top = `${Math.random() * 95}vh`;
        bat.style.animationDuration = `${5 + Math.random() * 5}s`;
        bat.style.animationDelay = `${Math.random() * 4}s`;
        document.body.appendChild(bat);
    }
}

function startHorrorAudio() {
    if (!audioStarted && horrorAudio) {
        horrorAudio.volume = 0.4;
        horrorAudio.play().then(() => {
            audioStarted = true;
            const soundToggle = document.getElementById("sound-toggle");
            if (soundToggle) {
                soundToggle.textContent = "Sound: ON";
                soundToggle.style.borderColor = "#ef4444";
            }
            console.log("Horror audio playing successfully.");
        }).catch(() => {
            console.log("Browser blocked autoplay, waiting for interaction.");
        });
    }
}

function createSpiders() {
    const spiderPositions = [15, 35, 65, 85];
    spiderPositions.forEach((pos, index) => {
        const spiderContainer = document.createElement("div");
        spiderContainer.classList.add("spider-thread");
        spiderContainer.style.right = `${pos}vw`;
        spiderContainer.style.animationDuration = `${3 + index * 0.7}s`;

        const spider = document.createElement("div");
        spider.classList.add("spooky-spider");
        spiderContainer.appendChild(spider);
        document.body.appendChild(spiderContainer);
    });
}

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

const soundToggle = document.getElementById("sound-toggle");
if (soundToggle) {
    soundToggle.addEventListener("click", () => {
        if (!horrorAudio) return;

        if (horrorAudio.paused) {
            horrorAudio.volume = 0.4;
            horrorAudio.play().then(() => {
                audioStarted = true;
                soundToggle.textContent = "Sound: ON";
                soundToggle.style.borderColor = "#ef4444";
            }).catch(() => {
                soundToggle.textContent = "Sound: OFF";
                soundToggle.style.borderColor = "#7f1d1d";
            });
        } else {
            horrorAudio.pause();
            soundToggle.textContent = "Sound: OFF";
            soundToggle.style.borderColor = "#7f1d1d";
        }
    });
}

window.addEventListener("DOMContentLoaded", () => {
    createBats();
    createSpiders();
});

window.addEventListener("click", startHorrorAudio, { once: true });
window.addEventListener("scroll", startHorrorAudio, { once: true });