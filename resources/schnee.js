let hoehe = 10;
let breite = 10;
let zeit = 4000;
let abstand = 5;
let fallgeschwindikeit = 50;
let anzahl = 100;
let i = 0;
let Schneeflocken_a = Array(anzahl).fill().map(() => Math.random() * 3);

let bildschirm_b = screen.width;
let bildschirm_h = screen.height;

setInterval(random, zeit);
setInterval(fall, fallgeschwindikeit);

function random() {
 if(i <= anzahl) {
     i++;
     let create = document.createElement("img");
     create.src = "/resources/Schneeflocke.png";
     create.alt = "schnee";
     create.id = "schnee" + i;
     create.style.position = "fixed";
     create.style.top = abstand + "px";
     create.style.width = hoehe + "px";
     create.style.width = breite + "px";
     create.style.left = Math.round(Math.random() * (bildschirm_b - hoehe)) + 'px';
     document.body.appendChild(create);
 }
}

function fall() {
 for(let p = 1; p <= i; p++) {
     let fallschnee = document.getElementById("schnee" + p);
     let direction = Schneeflocken_a[p] > 2 ? 1 : -1;
     fallschnee.style.left = (fallschnee.offsetLeft + direction * (Math.abs(Schneeflocken_a[p]) - 1)) + "px";
     if(fallschnee.offsetLeft < 0 || fallschnee.offsetLeft > bildschirm_b) {
         fallschnee.style.left = (fallschnee.offsetLeft < 0 ? bildschirm_b : 0) + "px";
     }
     if(fallschnee.offsetTop > bildschirm_h - 50) {
         fallschnee.style.top = abstand + "px";
     } else {
         fallschnee.style.top = fallschnee.offsetTop + 2 + "px";
     }
 }
}
