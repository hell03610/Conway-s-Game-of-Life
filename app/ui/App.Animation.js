var App = App || {};

App.Animation = function(){

	var board = null;
	var animation = null;
	var isPaused = false;
	var processingInstance = null;
	var $start, $pause;
	var canvasId = 'canvas1';

	function init(){
		bindButtons();
	}

	function bindButtons(){
		$start = $('#start');
		$start.bind('click', start);
		$pause = $('#pause');
		$pause.bind('click', pause);
			
	}

	function start(){
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

	function createBoard(){
		var rows = App.TuneControllers.getRows(),
			columns = App.TuneControllers.getColumns(),
			lifeProbability = App.TuneControllers.getLifeProbability(); 
		board = new Board(rows,columns,lifeProbability);
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


