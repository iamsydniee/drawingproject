var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

function drawRectangle(){
  canvas.fillStyle = "pink";
  canvas.fillRect(80, 150, 100, 100);

}
