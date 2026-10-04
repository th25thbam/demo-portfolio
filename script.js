const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

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
    const batCount = 5;
    for (let i = 0; i < batCount; i++) {
        const bat = document.createElement("div");
        bat.classList.add("spooky-bat");
        bat.style.top = `${Math.random() * 50}vh`;
        bat.style.animationDuration = `${5 + Math.random() * 5}s`;
        bat.style.animationDelay = `${Math.random() * 4}s`;
        document.body.appendChild(bat);
    }
}

function createSpiders() {
    const spiderContainer = document.createElement("div");
    spiderContainer.classList.add("spider-thread");
    const spider = document.createElement("div");
    spider.classList.add("spooky-spider");
    spiderContainer.appendChild(spider);
    document.body.appendChild(spiderContainer);
}

window.addEventListener("DOMContentLoaded", () => {
    createBats();
    createSpiders();
});