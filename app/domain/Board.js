var Board = function(rows, columns, lifeProbability){

	this.rows = rows || 10;
	this.columns = columns || 10;
	this.board = null;
	this.rules = new Rules();
	var LIFE_PROBABILITY = lifeProbability || 0.2;


	this.setRules = function(rules){
		this.rules = rules;
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

	this.snapshotNextGeneration = function(){
		for(var i=0;i<this.rows;i++){
			for(var j=0;j<this.columns;j++){
				var aliveNeighbours = this.snapshotAliveNeighboursFor(i,j);
				//this.get(i,j).tick(aliveNeighbours);
				this.rules.tick(this.get(i,j), aliveNeighbours);
			}
		}
		for(var i=0;i<this.rows;i++){
			for(var j=0;j<this.columns;j++){
				this.board[i][j].resetLastLifeStatus();
			}
		}	
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
		if(!cell) return false;
		return cell.isAlive();		
	}

	this.wasAlive = function(x,y){
		var cell = this.get(x, y);
		if(!cell) return false;
		return cell.wasAlive();		
	}
}