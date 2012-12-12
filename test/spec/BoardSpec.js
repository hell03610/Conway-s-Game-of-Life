describe("Board", function() {
  
  beforeEach(function() {
  	var rows = 10;
    var colums = 10;
    board = new Board(rows, colums);
  });

  it("is a 2d board of cells", function(){
    board.firstGeneration();
    expect(board.get(0,0) instanceof Cell).toBeTruthy();
    expect(board.get(9,9) instanceof Cell).toBeTruthy();
  });

  it("injects life or death to each cell", function(){
  	spyOn(board, 'lifeStatus').andReturn(ALIVE);
  	board.firstGeneration();
  	expect(board.lifeStatus).toHaveBeenCalled;
  	expect(board.get(0,0).isAlive()).toBeTruthy();
  });


  describe("knowing neighbours",function(){
  	it("counts how many alive neighbours given a cell position", function(){
  		spyOn(board, 'lifeStatus').andReturn(ALIVE);
  		board.firstGeneration();
  		expect(board.laserAliveNeighboursFor(5,5)).toEqual(8);	
  	});

  	it("board is not rounded", function(){
  		spyOn(board, 'lifeStatus').andReturn(ALIVE);
  		board.firstGeneration();
  		expect(board.laserAliveNeighboursFor(0,0)).toEqual(3);	
  	});
  });

  it("evolves from one generation to another", function(){
  	board.firstGeneration();
  	var aCell = board.get(0,0);
  	spyOn(aCell,'tick');
  	board.nextGeneration();
  	expect(aCell.tick).toHaveBeenCalled;
  });

});