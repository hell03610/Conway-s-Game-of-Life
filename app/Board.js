var Board = function(rows, columns){

	this.rows = rows;
	this.columns = columns;
	this.board = null;
	var LIFE_PROBABILITY = 0.6;

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

	this.aliveNeighboursFor = function(x,y){
		var alive = 0;
		if(this.isAlive(x+1,y+1)) alive++;
		if(this.isAlive(x+1,y)) alive++;
		if(this.isAlive(x+1,y-1)) alive++;
		if(this.isAlive(x,y+1)) alive++;
		if(this.isAlive(x,y-1)) alive++;
		if(this.isAlive(x-1,y+1)) alive++;
		if(this.isAlive(x-1,y)) alive++;
		if(this.isAlive(x-1,y-1)) alive++;
		return alive;
	}

	this.nextGeneration = function(){
		for(var i=0;i<this.rows;i++){
			for(var j=0;j<this.columns;j++){
				var aliveNeighbours = this.aliveNeighboursFor(i,j);
				this.get(i,j).tick(aliveNeighbours);
			}
		}
	}

	this.lifeStatus = function(){
		var random = Math.random();
		if(random <= LIFE_PROBABILITY) return ALIVE;
		return DEAD;
	}

	this.get = function(x,y){
		if(x >= this.rows || x < 0 || y >= this.columns || y < 0) return null;
		return this.board[x][y];
	}

	this.isAlive = function(x,y){
		var cell = this.get(x, y);
		if(!cell) return false;
		return cell.isAlive();		
	}
}