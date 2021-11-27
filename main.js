var MouseEvent = "";
var lastx, lasty;

canvas = document.getElementById("Canvas");
ctx = canvas.getContext("2d");
width=screen.width;
new_width=width-70;
new_height=screen.height-300;
if(width < 992){
    document.getElementById("Canvas").width=new_width;
    document.getElementById("Canvas").height=new_height;
    document.body.style.overflow="hidden";
}
color = "black";
width = 1;
background_color ="white";
document.getElementById("Canvas").style.backgroundColor = background_color;
canvas.addEventListener("touchstart", my_mousedown);

function my_mousedown(e) {
    //taking color from input box
    //additional activity start
    color = document.getElementById("i1").value;
    width = document.getElementById("t1").value;
    background_color = document.getElementById("i2").value;
    document.getElementById("Canvas").style.backgroundColor = background_color;
    MouseEvent = "mousedown";
    console.log(color);
    //addition activity ends

}
canvas.addEventListener("touchmove", mymousemove);

function mymousemove(e) {
    currentx = e.touches[0].clientX - canvas.offsetLeft;
    currenty = e.touches[0].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth =width;
        ctx.moveTo(lastx,lasty);
        ctx.lineTo(currentx,currenty);
        ctx.stroke();
    lastx=currentx;
    lasty=currenty;
}

//additional activity

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}