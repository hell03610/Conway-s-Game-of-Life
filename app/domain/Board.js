var Board = function(rows, columns, lifeProbability){

	this.rows = rows || 10;
	this.columns = columns || 10;
	this.board = null;
	this.god = new God();
	var LIFE_PROBABILITY = lifeProbability || 0.2;


	this.setGod = function(god){
		this.god = god;
	}
	
	this.firstGeneration = function(){
		this.init();
	}

	this.init = function(){
		this.board = [];
		for(var i=0;i<this.rows;i++){
			this.board[i] = [];
			for(var j=0;j<this.columns;j++){
				this.board[i][j] = new Cell(this.lifeStatus());
			}
		}
	}

	this.snapshotAliveNeighboursFor = function(x,y){
		var alive = 0;
		if(this.wasAlive(x+1,y+1)) alive++;
		if(this.wasAlive(x+1,y)) alive++;
		if(this.wasAlive(x+1,y-1)) alive++;
		if(this.wasAlive(x,y+1)) alive++;
		if(this.wasAlive(x,y-1)) alive++;
		if(this.wasAlive(x-1,y+1)) alive++;
		if(this.wasAlive(x-1,y)) alive++;
		if(this.wasAlive(x-1,y-1)) alive++;
		return alive;
	}

	this.nextGeneration = function(){
		this.snapshotNextGeneration();
	}

	this.forEachPosition = function(next){
		for(var i=0;i<this.rows;i++){
			for(var j=0;j<this.columns;j++){
				next.call(this,i,j);
			}
		}
	}

	this.snapshotNextGeneration = function(){
		
		this.forEachPosition(function(x,y){
			var aliveNeighbours = this.snapshotAliveNeighboursFor(x,y);
			this.god.sentence(this.get(x,y), aliveNeighbours);
		});

		this.forEachPosition(function(x,y){
			this.board[x][y].resetLastLifeStatus();
		});
			
	}	

	this.lifeStatus = function(){
		var random = Math.random();
		if(random <= LIFE_PROBABILITY) return ALIVE;
		return DEAD;
	}

	this.get = function(x,y){
		var isBeyondLimits = (x >= this.rows || x < 0 || y >= this.columns || y < 0);
		if(isBeyondLimits) return null;
		return this.board[x][y];
	}

	this.isAlive = function(x,y){
		var cell = this.get(x, y);
		return cell && cell.isAlive();
	}

	this.wasAlive = function(x,y){
		var cell = this.get(x, y);
		return cell && cell.wasAlive();
	}
}