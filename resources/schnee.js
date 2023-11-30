let groese = 10;
let breite = 10;
let zeit = 4000;
let abstant = 5;
let fallgeschwindikeit = 50;
let i=0;
let u=1;




//bild = document.getElementById("schnee")
bildschirm_b = screen.width;
bildschirm_h = screen.height;

setInterval(random,zeit);
setInterval(fall,fallgeschwindikeit);
function random(){
if(i<=99){
i=i+1;
const ople = document.createElement("img");
ople.src = "Schneflocke.png";
ople.alt = "schnee";
ople.id = "schnee"+i;
ople.style.position = "fixed";
ople.style.top = abstant+"px";
ople.style.width = groese+"px";
ople.style.width = breite+"px";
ople.style.left = Math.round(Math.random()*bildschirm_b)+'px';
document.body.appendChild(ople);
}
}

function fall(){

    for(let p=u;p<=i;p=p+1 ){
        document.getElementById("name").innerHTML =p;
    fallschnee = document.getElementById("schnee"+p);
    fallschnee.style.top = (fallschnee.offsetTop +2)+"px";
    if(fallschnee.offsetTop >bildschirm_h-50){
        fallschnee.style.top = (5)+"px";
    }
}
    }
