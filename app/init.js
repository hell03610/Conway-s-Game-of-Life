rows = 20;
columns = 20;
   
var canvas = document.getElementById("canvas1");
board = new Board(rows,columns);
board.firstGeneration();
var p = new Processing(canvas, conwaySketch);
