var God = function(neighboursToLive, neighboursToReborn) {

	var HEALHY_NEIGHBOUR = neighboursToLive || ['2','3'];
	var LIFE_FRIENDLY_NEIGHBOUR = neighboursToReborn || ['3'];

	var theCell;
	var cellAliveNeighbours; 


	function sentence(cell, aliveNeighbours){
		setVariables(cell, aliveNeighbours);
		if(cellShouldLive()) theCell.live();
		else theCell.die();
	}

	function setVariables(cell, aliveNeighbours){
		cellAliveNeighbours = aliveNeighbours + '';
		theCell = cell;
	}

	function cellShouldLive(){
		return shouldKeepLife() || shouldReborn();
	}

	function shouldReborn(){
		return (LIFE_FRIENDLY_NEIGHBOUR.indexOf(cellAliveNeighbours) > -1) && !theCell.isAlive();	
	}

	function shouldKeepLife(){
		return (HEALHY_NEIGHBOUR.indexOf(cellAliveNeighbours) > -1) && theCell.isAlive();	
	}

	return {
		sentence: sentence
	}

};
