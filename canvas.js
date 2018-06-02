var canvas=document.getElementById("canvas");

var context=canvas.getContext('2d');

context.beginPath();
context.arc(100,100,50,0,Math.PI*2,true);
context.moveTo(140,100);
context.arc(100,98,40,0,Math.PI,false);
context.moveTo(87,80);
context.arc(80,80,7,0,Math.PI*2,false);
context.moveTo(127,80);
context.arc(120,80,7,0,Math.PI*2,false);

context.stroke();