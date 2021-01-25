var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var longSide = 250;
var sortSide = 50;

var positionX = (canvasWidth - longSide)/2;
var positionY = (canvasHeight - sortSide*3)/2;

context.fillStyle = 'rgba(255,0,0)';
context.fillRect(positionX, positionY, longSide, sortSide);

var positionY =positionY+sortSide;

context.fillStyle = 'white';
context.fillRect(positionX, positionY, longSide, sortSide);

positionY += sortSide;
context.fillStyle = 'rgba(0,159,0)';
context.fillRect(positionX, positionY, longSide, sortSide);
$(document).ready(function(){
$("button").click(function(){
  $("#myCanvas").toggle();
});
  });