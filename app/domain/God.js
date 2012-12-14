var God = function(neighboursToLive, neighboursToReborn) {

	var HEALHY_NEIGHBOUR = neighboursToLive || ['2','3'];
	var LIFE_FRIENDLY_NEIGHBOUR = neighboursToReborn || ['3'];

	var theCell;
	var cellAliveNeighbours; 


	function sentence(cell, aliveNeighbours){
		cellAliveNeighbours = aliveNeighbours + '';
		theCell = cell;
		if(cellShouldLive()) theCell.live();
		else theCell.die();
	}

	function cellShouldLive(){
		return isInLifeFriendlyNeighbourhood() || isInHealthyNeighbourhood();
	}

	function isInLifeFriendlyNeighbourhood(){
		return (LIFE_FRIENDLY_NEIGHBOUR.indexOf(cellAliveNeighbours) > -1);	
	}

	function isInHealthyNeighbourhood(){
		return (HEALHY_NEIGHBOUR.indexOf(cellAliveNeighbours) > -1) && theCell.isAlive();	
	}

	return {
		sentence: sentence
	}

};
