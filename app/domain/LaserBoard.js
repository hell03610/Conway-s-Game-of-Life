var LaserBoard = function(rows, columns, lifeProbability){
	var board = new Board(rows, columns, lifeProbability);

	board.laserAliveNeighboursFor = function(x,y){
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
	
	board.laserNextGeneration = function(){
			for(var i=0;i<this.rows;i++){
				for(var j=0;j<this.columns;j++){
					var aliveNeighbours = this.laserAliveNeighboursFor(i,j);
					this.get(i,j).tick(aliveNeighbours);
				}
			}
	}

	board.nextGeneration = function(){
		this.laserNextGeneration();
	}

	return board;
}