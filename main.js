canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

color1 = "blue";

ctx.beginPath();
ctx.strokeStyle = color1;
ctx.lineWidth = 5;
ctx.arc(200,200,40,0,360);
ctx.stroke();

color2 = "black";

ctx.beginPath();
ctx.strokeStyle = color2;
ctx.lineWidth = 5;
ctx.arc(300,200,40,0,360);
ctx.stroke();

color3 = "red";

ctx.beginPath();
ctx.strokeStyle = color3;
ctx.lineWidth = 5;
ctx.arc(400,200,40,0,360);
ctx.stroke();

color4 = "yellow";

ctx.beginPath();
ctx.strokeStyle = color4;
ctx.lineWidth = 5;
ctx.arc(250,240,40,0,360);
ctx.stroke();

color5 = "green";

ctx.beginPath();
ctx.strokeStyle = color5;
ctx.lineWidth = 5;
ctx.arc(350,240,40,0,360);
ctx.stroke();

