rows = 0;
columns = 0;
board = null;
animation = null;
isPaused = false;
processingInstance = null;

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


function pause(){
	if(isPaused) {
		switchSketchState(true);
		isPaused = false;
		$('#stop_button').text('Pause');
	}
	else{
		switchSketchState(false);
		isPaused = true;
		$('#stop_button').text('Resume');
	}
}

 function switchSketchState(toOn) {
    if (!processingInstance) {
        processingInstance = Processing.getInstanceById('canvas1');
    }
    if (toOn) {
       processingInstance.loop();  
    } else {
       processingInstance.noLoop();
    }
 }