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
		this.forEachPosition(function(x,y){
			var aliveNeighbours = this.laserAliveNeighboursFor(x,y);
			this.rules.tick(this.get(x,y), aliveNeighbours);
		});
			
	}

	board.nextGeneration = function(){
		this.laserNextGeneration();
	}

	return board;
}