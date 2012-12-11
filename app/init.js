var App = App || {};

App.Animation = function(){

	var board = null;
	var animation = null;
	var isPaused = false;
	var processingInstance = null;

	function start(){
		if(animation) animation.exit();
	 	board = new Board(getRows(),getColumns(), getLifeProbability());
		board.firstGeneration();
	 	var canvas = document.getElementById("canvas1");
		animation = new Processing(canvas, conwaySketch);
		processingInstance = null;
	}

	function getBoard(){
		return board;
	}

	function getRows(){
		return $('#rows').val();
	}

	function getColumns(){
		return $('#columns').val();
	}

	function getLifeProbability(){
		return $('#life_probability').val();
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


	return {
		start: start,
		pause: pause, 
		getBoard : getBoard,
		getRows: getRows,
		getColumns: getColumns
	}
}();


