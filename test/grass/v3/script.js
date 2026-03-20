// ===== CONFIG =====
const density = 1.2;          // blades per pixel
const windSpeed = 0.02;       // wind animation speed
const windStrength = 1.5;     // max wind bend
const influenceRadius = 5;    // mower width
const growthChance = 0.3;     // chance a blade grows each frame
const growthAmount = 4;       // pixels grown per growth tick
// ==================

const blades = [];

let bladeCount = 0;
let mouseX = -1000;
let mouseY = -1000;
let windPhase = 0;

window.addEventListener("load", initializeGrass);

window.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

requestAnimationFrame(animationLoop);

function initializeGrass() {

    const screenWidth = window.innerWidth;
    bladeCount = Math.floor(screenWidth * density);

    for (let i = 0; i < bladeCount; i++) {

        const blade = document.createElement("div");

        const width = Math.random() * 2 + 1;
        const lean = (Math.random() - 0.5) * 6;
        const baseGreen = 90 + Math.floor(Math.random() * 40);
        const tipGreen = 180 + Math.floor(Math.random() * 60);

        blade.style.position = "fixed";
        blade.style.bottom = "0px";
        blade.style.left = (i / density) + "px";
        blade.style.width = width + "px";
        blade.style.height = (15 + Math.random() * 15) + "px";

        blade.dataset.baseLean = lean;

        blade.style.transformOrigin = "bottom";
        blade.style.borderRadius = "40% 40% 0 0";

        blade.style.backgroundImage =
            `linear-gradient(to top,
            rgb(0,${baseGreen},0) 0%,
            rgb(40,${tipGreen},40) 100%)`;

        document.body.appendChild(blade);
        blades.push(blade);
    }
}

function animationLoop() {

    windPhase += windSpeed;
    const wind = Math.sin(windPhase) * windStrength;

    const windowHeight = window.innerHeight;
    const cutHeight = windowHeight - mouseY;

    blades.forEach((blade, index) => {

        const bladeX = index / density;
        const distance = Math.abs(bladeX - mouseX);

        if (distance < influenceRadius) {

            if (blade.offsetHeight > cutHeight) {
                blade.style.height = cutHeight + "px";
            }
        }

        const baseLean = parseFloat(blade.dataset.baseLean);

        blade.style.transform =
            `rotate(${baseLean + wind}deg)`;
    });

    // random growth
    if (Math.random() < growthChance) {
        const blade = blades[Math.floor(Math.random() * blades.length)];
        blade.style.height = (blade.offsetHeight + growthAmount) + "px";
    }

    requestAnimationFrame(animationLoop);
}
