
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");



ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 4;
ctx.arc(200, 200, 60 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.arc(350, 200, 60 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 4;
ctx.arc(500, 200, 60 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow ";
ctx.lineWidth = 4;
ctx.arc(270, 300, 60 ,0 , 2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 4;
ctx.arc(420, 300, 60 ,0 , 2*Math.PI);
ctx.stroke();