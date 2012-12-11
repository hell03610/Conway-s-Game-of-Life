rows = 0;
columns = 0;
board = null;
animation = null;

function init(){
	if(animation) animation.exit();
 	var canvas = document.getElementById("canvas1");
 	rows = $('#rows').val();
 	columns = $('#columns').val();
 	var lifeProbability = $('#life_probability').val();
	board = new Board(rows,columns, lifeProbability);
	board.firstGeneration();
	animation = new Processing(canvas, conwaySketch);
}
