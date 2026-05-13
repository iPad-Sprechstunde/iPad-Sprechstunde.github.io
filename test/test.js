var body = document.getElementsByTagName("body")[0];
    var canvas = document.createElement("canvas");
    canvas.height = 500;
    canvas.width = 500;
    var context = canvas.getContext("2d");
    body.appendChild(canvas);
function create() {
    //  Opacity
        context.globalAlpha=0.7;
        var color = '#'+ Math.round(0xffffff * Math.random()).toString(16);
        context.fillStyle = color;

        //Each rectangle's size is (20 ~ 100, 20 ~ 100)     
        context.fillRect(Math.random()*canvas.width, Math.random()*canvas.width, Math.random()*80+20, Math.random()*80+20);

}
     document.getElementById('buttonxD').addEventListener('click', create);
