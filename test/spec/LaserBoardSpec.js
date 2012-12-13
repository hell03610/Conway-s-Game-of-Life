describe("LaserBoard", function() {
  
  beforeEach(function() {
  	var rows = 10;
    var colums = 10;
    board = new LaserBoard(rows, colums);
  });

  it("is a Board", function(){
    expect(board instanceof Board).toBeTruthy();
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
  	spyOn(board.rules,'tick');
  	board.nextGeneration();
  	expect(board.rules.tick).toHaveBeenCalled;
  });

});