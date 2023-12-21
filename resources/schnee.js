let hoehe = 10;
let breite = 10;
let zeit = 4000;
let abstand = 5;
let fallgeschwindikeit = 50;
let i=0;
let u=1;
let anzahl=100;
const Schneeflocken_a = [Math.random()*3];

//bild = document.getElementById("schnee")
bildschirm_b = screen.width;
bildschirm_h = screen.height;

setInterval(random,zeit);
setInterval(fall,fallgeschwindikeit);
function random(){
if(i<=anzahl){
i=i+1;
Schneeflocken_a[Schneeflocken_a.length+1] = Math.random()*3;
const create = document.createElement("img");
create.src = "/resources/Schneeflocke.png";
create.alt = "schnee";
create.id = "schnee"+i;
create.style.position = "fixed";
create.style.top = abstand+"px";
create.style.width = hoehe+"px";
create.style.width = breite+"px";
create.style.left = Math.round(Math.random()*(bildschirm_b - hoehe))+'px';
document.body.appendChild(create);
	}
}



function fall(){

    for(let p=u;p<=i;p=p+1 ){
    fallschnee = document.getElementById("schnee"+p);
    if(Schneeflocken_a[p] > 2){
    fallschnee.style.left =(fallschnee.offsetLeft + (Schneeflocken_a[p]-1))+"px";
    }
    if(Schneeflocken_a[p] < 2){
    fallschnee.style.left =(fallschnee.offsetLeft -(Schneeflocken_a[p]+1))+"px";
    }
    if(fallschnee.offsetLeft < 0){
        fallschnee.style.left =(bildschirm_h)+"px";
    }
    if(fallschnee.offsetLeft >bildschirm_h){
        fallschnee.style.left =(0)+"px";
    }
    if(fallschnee.offsetTop >bildschirm_h-50){
        fallschnee.style.top = (5)+"px";
    	  }
    fallschnee.style.top = (fallschnee.offsetTop +2)+"px";
    }
}
