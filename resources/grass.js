let i= 0;
let t= 100;
let grassspawner = setInterval(spawn, 1);
setInterval(wachsen, 1);
function spawn(){
    if(i <= 500){
        let creat = document.createElement("div");
        creat.id = "Grashalm" + i;
        creat.addEventListener("mousemove",(e) =>{
        let y = e.clientY;
        let hohe = window.innerHeight;
        creat.style.height =hohe-y +"px";
        let nummer = parseInt(creat.id.slice(8));
        let ein_v = document.getElementById("Grashalm"+(creat.id.slice(8)-1));
        let ein_n = document.getElementById("Grashalm"+(nummer+1));
        ein_v.style.height =hohe-y +"px"; 
        ein_n.style.height =hohe-y +"px"; 
    });
        creat.style.position = "fixed";
        let random = Math.floor(Math.random() * 250) + 100
        creat.style.backgroundColor = "rgb(0,"+100+",0)";
        creat.style.bottom = 0+"px";
        creat.style.width = 2+"px";
        creat.style.height = 20+"px";
        creat.style.backgroundImage = "linear-gradient(to top, rgb(0,"+Math.floor(Math.random() * 10) + 0+",0) 0%, rgb("+0+","+Math.floor(Math.random() * 100) + 155+","+0+") 100%)";
        creat.style.left = (i*2)+"px";
        document.body.appendChild(creat);
        i++;
    }else{
        clearInterval(grassspawner);
    }
}

function wachsen(){
        document.getElementById("test").innerHTML += "test1";
        let grass = document.getElementById("Grashalm"+Math.floor(Math.random()*500));
        grass.style.height = grass.scrollHeight + 1+"px";
        //for (let p = 0; p <= i; p++) {}
}
