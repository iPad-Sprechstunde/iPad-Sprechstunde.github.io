const density = 0.5; // blades per pixel (0.5 = one blade every 2px)

const blades = [];
let bladeCount = 0;

window.addEventListener("load", initializeGrass);
setInterval(growRandomGrass, 40);

function initializeGrass() {
    const screenWidth = window.innerWidth;

    bladeCount = Math.floor(screenWidth * density);

    for (let i = 0; i < bladeCount; i++) {
        createGrassBlade(i);
    }
}

function createGrassBlade(index) {
    const blade = document.createElement("div");

    // random visual variation
    const width = Math.random() * 2 + 1;
    const lean = (Math.random() - 0.5) * 10;
    const baseGreen = 90 + Math.floor(Math.random() * 40);
    const tipGreen = 180 + Math.floor(Math.random() * 60);

    blade.style.position = "fixed";
    blade.style.bottom = "0px";
    blade.style.left = (index / density) + "px";
    blade.style.width = width + "px";
    blade.style.height = (15 + Math.random() * 10) + "px";

    blade.style.transform = `rotate(${lean}deg)`;
    blade.style.transformOrigin = "bottom";

    blade.style.borderRadius = "40% 40% 0 0";

    blade.style.backgroundImage =
        `linear-gradient(to top,
        rgb(0,${baseGreen},0) 0%,
        rgb(40,${tipGreen},40) 100%)`;

    blade.addEventListener("mousemove", (event) => {
        const mouseY = event.clientY;
        const windowHeight = window.innerHeight;
        const cutHeight = windowHeight - mouseY;

        blade.style.height = cutHeight + "px";

        const prevBlade = blades[index - 1];
        const nextBlade = blades[index + 1];

        if (prevBlade && prevBlade.offsetHeight > cutHeight) {
            prevBlade.style.height = cutHeight + "px";
        }

        if (nextBlade && nextBlade.offsetHeight > cutHeight) {
            nextBlade.style.height = cutHeight + "px";
        }
    });

    document.body.appendChild(blade);
    blades.push(blade);
}

function growRandomGrass() {
    if (blades.length === 0) return;

    const blade = blades[Math.floor(Math.random() * blades.length)];
    blade.style.height = (blade.offsetHeight + 1) + "px";
}

window.addEventListener("resize", () => {
    blades.forEach(b => b.remove());
    blades.length = 0;
    initializeGrass();
});
