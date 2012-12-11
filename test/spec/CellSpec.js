describe("Cell", function() {
  
  beforeEach(function() {
  });

  it("should be dead by default", function(){
    var cell = new Cell();
    expect(cell.isAlive()).toBeFalsy();
  });

  it("its life can be instantiated", function(){
    var cell = new Cell(ALIVE);
    expect(cell.isAlive()).toBeTruthy();
  });

  it("reborns when the neighbourhood is life-friendly", function(){
    var cell = new Cell();
    var aliveNeighbours = 3;
    cell.tick(aliveNeighbours);
    expect(cell.isAlive()).toBeTruthy();
  });

  it("stays alive if it is in a healthy neighbourhood", function(){
    var aliveNeighboursInHealthyNeighbourhood = 2;
    var cell = new Cell(ALIVE);
    cell.tick(aliveNeighboursInHealthyNeighbourhood);
    expect(cell.isAlive()).toBeTruthy();

    aliveNeighboursInHealthyNeighbourhood = 3;
    cell = new Cell(ALIVE);
    cell.tick(aliveNeighboursInHealthyNeighbourhood);
    expect(cell.isAlive()).toBeTruthy();

  });

   it("stays dead if it is in a healthy neighbourhood", function(){
    var aliveNeighboursInHealthyNeighbourhood = 2;
    var cell = new Cell(DEAD);
    cell.tick(aliveNeighboursInHealthyNeighbourhood);
    expect(cell.isAlive()).toBeFalsy();
  });

   it("dies if not in healthy neighbourhood", function(){
      var aliveNeighboursInHealthyNeighbourhood = 1;
      var cell = new Cell(ALIVE);
      cell.tick(aliveNeighboursInHealthyNeighbourhood);
      expect(cell.isAlive()).toBeFalsy();
   });

    it("dies if not in healthy neighbourhood", function(){
      var aliveNeighboursInHealthyNeighbourhood = 4;
      var cell = new Cell(ALIVE);
      cell.tick(aliveNeighboursInHealthyNeighbourhood);
      expect(cell.isAlive()).toBeFalsy();
   });

  it("knows if it is a newborn", function(){
    var cell = new Cell(DEAD);
    var aliveNeighbours = 3;
    cell.tick(aliveNeighbours);
    expect(cell.isNewBorn()).toBeTruthy();
    cell.tick(aliveNeighbours);
    expect(cell.isNewBorn()).toBeFalsy();
    
  });

 });