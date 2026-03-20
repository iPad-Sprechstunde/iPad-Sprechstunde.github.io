const density = 0.6;
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

    windPhase += 0.02;
    const wind = Math.sin(windPhase) * 1.5;

    const windowHeight = window.innerHeight;
    const cutHeight = windowHeight - mouseY;

    const influenceRadius = 25; // MUCH smaller mower area

    blades.forEach((blade, index) => {

        const bladeX = index / density;
        const distance = Math.abs(bladeX - mouseX);

        let cursorBend = 0;

        if (distance < influenceRadius) {

            const influence = 1 - distance / influenceRadius;

            // mowing
            if (blade.offsetHeight > cutHeight) {
                blade.style.height = cutHeight + "px";
            }

            // bending
            cursorBend = (mouseX - bladeX) * 0.25 * influence;
        }

        const baseLean = parseFloat(blade.dataset.baseLean);

        blade.style.transform =
            `rotate(${baseLean + wind + cursorBend}deg)`;
    });

    // random growth
    if (Math.random() < 0.3) {
        const blade = blades[Math.floor(Math.random() * blades.length)];
        blade.style.height = (blade.offsetHeight + 1) + "px";
    }

    requestAnimationFrame(animationLoop);
}
