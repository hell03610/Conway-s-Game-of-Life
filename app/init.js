var canvas = document.getElementById("canvas1");
board = new Board(10,10);
board.firstGeneration();
var p = new Processing(canvas, conwaySketch);
