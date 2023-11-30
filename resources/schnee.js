let hoehe = 10;
let breite = 10;
let zeit = 4000;
let abstand = 5;
let fallgeschwindikeit = 50;
let i=0;
let u=1;
let anzahl=100;


//bild = document.getElementById("schnee")
bildschirm_b = screen.width;
bildschirm_h = screen.height;

setInterval(random,zeit);
setInterval(fall,fallgeschwindikeit);
function random(){
if(i<=anzahl){
i=i+1;
const create = document.createElement("img");
create.src = "/resources/Schneeflocke.png";
create.alt = "schnee";
create.id = "schnee"+i;
create.style.position = "fixed";
create.style.top = abstand+"px";
create.style.width = hoehe+"px";
create.style.width = breite+"px";
create.style.left = Math.round(Math.random()*bildschirm_b)+'px';
document.body.appendChild(create);
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
