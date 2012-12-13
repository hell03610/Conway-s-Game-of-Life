describe("Rules", function() {
  
  beforeEach(function() {
    rules = new Rules();
  });
  
  it("reborns when the neighbourhood is life-friendly", function(){
    var cell = new Cell();
    var aliveNeighbours = 3;
    rules.tick(cell, aliveNeighbours);
    expect(cell.isAlive()).toBeTruthy();
  });

  it("stays alive if it is in a healthy neighbourhood", function(){
    var aliveNeighboursInHealthyNeighbourhood = 2;
    var cell = new Cell(ALIVE);
    rules.tick(cell, aliveNeighboursInHealthyNeighbourhood);
    expect(cell.isAlive()).toBeTruthy();

    aliveNeighboursInHealthyNeighbourhood = 3;
    cell = new Cell(ALIVE);
    rules.tick(cell, aliveNeighboursInHealthyNeighbourhood); 
    expect(cell.isAlive()).toBeTruthy();
  });

   it("stays dead if it is in a healthy neighbourhood", function(){
    var aliveNeighboursInHealthyNeighbourhood = 2;
    var cell = new Cell(DEAD);
    rules.tick(cell, aliveNeighboursInHealthyNeighbourhood); 
    expect(cell.isAlive()).toBeFalsy();
  });

   it("dies if not in healthy neighbourhood", function(){
      var aliveNeighboursInHealthyNeighbourhood = 1;
      var cell = new Cell(ALIVE);
      rules.tick(cell, aliveNeighboursInHealthyNeighbourhood); 
      expect(cell.isAlive()).toBeFalsy();
   });

    it("dies if not in healthy neighbourhood", function(){
      var aliveNeighboursInHealthyNeighbourhood = 4;
      var cell = new Cell(ALIVE);
      rules.tick(cell, aliveNeighboursInHealthyNeighbourhood); 
      expect(cell.isAlive()).toBeFalsy();
   });
 });