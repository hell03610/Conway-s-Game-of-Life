var Rules = function(neighboursToLive, neighboursToReborn) {

	var HEALHY_NEIGHBOUR = neighboursToLive || ['2','3'];
	var LIFE_FRIENDLY_NEIGHBOUR = neighboursToReborn || ['3'];

	var theCell;
	var cellAliveNeighbours; 


	this.tick = function(cell, aliveNeighbours){
		cellAliveNeighbours = aliveNeighbours + '';
		theCell = cell;
		if(this.isInLifeFriendlyNeighbourhood() || this.isInHealthyNeighbourhood()){
			theCell.live();
		}
		else {
			theCell.die();
		}
	}

	this.isInLifeFriendlyNeighbourhood = function(){
		return (LIFE_FRIENDLY_NEIGHBOUR.indexOf(cellAliveNeighbours) > -1);	
	}

	this.isInHealthyNeighbourhood = function(){
		return (HEALHY_NEIGHBOUR.indexOf(cellAliveNeighbours) > -1) && theCell.isAlive();	
	}

}
