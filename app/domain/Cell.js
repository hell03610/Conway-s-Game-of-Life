var ALIVE = 1;
var DEAD = -1;

var Cell = function(lifeStatus) {

	this.lifeStatus = lifeStatus;
	this.lastLifeStatus = DEAD;
	this.newBorn = false;
	this.aliveNeighbours = 0;

	var LIFE_FRIENDLY_NEIGHBOUR = [3];
	var HEALHY_NEIGHBOUR = [2,3];


	this.tick = function(aliveNeighbours){
		this.aliveNeighbours = aliveNeighbours;
		if(this.isInLifeFriendlyNeighbourhood() || this.isInHealthyNeighbourhood()){
			this.live();
		}
		else {
			this.die();
		}
	}

	this.isInLifeFriendlyNeighbourhood = function(){
		return (LIFE_FRIENDLY_NEIGHBOUR.indexOf(this.aliveNeighbours) > -1);	
	}

	this.isInHealthyNeighbourhood = function(){
		return (HEALHY_NEIGHBOUR.indexOf(this.aliveNeighbours) > -1) && this.isAlive();	
	}

	this.live = function(){
		this.newBorn = (this.lifeStatus === DEAD);
		this.lastLifeStatus = this.lifeStatus;
		this.lifeStatus = ALIVE;
	}

	this.die = function(){
		this.lastLifeStatus = this.lifeStatus;
		this.lifeStatus = DEAD;
		this.newBorn = false;
	}

	this.wasAlive = function(){
		return this.lastLifeStatus === ALIVE;
	}

	this.isAlive = function(){
		return this.lifeStatus === ALIVE;
	}

	this.isNewBorn = function(){
		return this.newBorn;
	}
	
}


