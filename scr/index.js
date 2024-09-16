var id = document.getElementById("welcome");
var r,g,b,color;

function changecolor(){
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    color = "rgb(" + r + "," + g + "," + b +")";
    id.style.color = color;
}

setInterval(changecolor,1000);
changecolor();

