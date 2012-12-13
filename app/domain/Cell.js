var ALIVE = 1;
var DEAD = -1;

var Cell = function(lifeStatus) {

	this.lifeStatus = lifeStatus;
	this.lastLifeStatus = lifeStatus;
	this.newBorn = false;
	
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

	this.resetLastLifeStatus = function(){
		this.lastLifeStatus = this.lifeStatus;
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


