var canvas = new fabric.Canvas("mc");
var bit = "";
by=10;
bx=10;
biw = 350;
bih = 430;
var bit= "";
function new_image(get_image)
{
fabric.Image.fromURL(get_image,function (img){
bit=img;
bit.scaleToWidth(biw);
bit.scaleToHeight(bih);
bit.set({top:by,left:bx});
canvas.add(bit);
});
}
window.addEventListener("keydown", mk);
function mk(e)
{
kp = e.keyCode;
console.log(kp);
if(kp == '82')
{
new_image("rr1.png");
}
if(kp == '71')
{
new_image("gr.png");
}
if(kp == '89')
{
new_image("yr.png");
}
if(kp == '80')
{
new_image("pr.png");
}
if(kp == '66')
{
new_image("https://i.postimg.cc/JhHntLKB/dcxjnck-863a0e2b-1555-4c1d-b017-5ecff9846975.png");
}
}

