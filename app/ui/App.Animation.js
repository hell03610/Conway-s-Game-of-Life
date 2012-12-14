var App = App || {};

App.Animation = function(){

	var board = null;
	var animation = null;
	var isPaused = false;
	var processingInstance = null;
	var $start, $pause;
	var canvasId = 'canvas1';

	var tuning;

	function init(){
		bindButtons();
		tuning = App.TuneControllers;
	}

	function bindButtons(){
		$start = $('#start');
		$start.bind('click', start);
		$pause = $('#pause');
		$pause.bind('click', pause);
			
	}

	function start(){
		saveControllerValues();
		createBoard();
		startSketch();
		resetPause();
	}

	function getBoard(){
		return board;
	}

	function pause(){
		switchSketchState(isPaused);
		$pause.text(isPaused?'Pause':'Resume');
		isPaused = !isPaused;
	}

	function saveControllerValues(){
		App.TuneControllers.save();
	}

	function createBoard(){
		board = new Board(tuning.getRows(),tuning.getColumns(),tuning.getLifeProbability());
		var god = new God(tuning.getNeighboursToLive(), tuning.getNeighboursToReborn());
		board.setGod(god);
		board.firstGeneration();
	}

	function startSketch(){
		if(animation) animation.exit();
	 	var canvas = document.getElementById(canvasId);
		animation = new Processing(canvas, App.Sketch);
	}

	function resetPause(){
		processingInstance = null;
		isPaused = false;
		$pause.text('Pause');		
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
		init: init,
		start: start,
		pause: pause, 
		getBoard : getBoard
	}
}();


