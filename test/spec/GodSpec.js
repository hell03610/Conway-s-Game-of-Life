describe("God", function() {
  
  beforeEach(function() {
    god = new God();
  });
  
  it("reborns when the neighbourhood is life-friendly", function(){
    var cell = new Cell();
    var aliveNeighbours = 3;
    god.sentence(cell, aliveNeighbours);
    expect(cell.isAlive()).toBeTruthy();
  });

  it("stays alive if it is in a healthy neighbourhood", function(){
    var aliveNeighboursInHealthyNeighbourhood = 2;
    var cell = new Cell(ALIVE);
    god.sentence(cell, aliveNeighboursInHealthyNeighbourhood);
    expect(cell.isAlive()).toBeTruthy();

    aliveNeighboursInHealthyNeighbourhood = 3;
    cell = new Cell(ALIVE);
    god.sentence(cell, aliveNeighboursInHealthyNeighbourhood); 
    expect(cell.isAlive()).toBeTruthy();
  });

   it("stays dead if it is in a healthy neighbourhood", function(){
    var aliveNeighboursInHealthyNeighbourhood = 2;
    var cell = new Cell(DEAD);
    god.sentence(cell, aliveNeighboursInHealthyNeighbourhood); 
    expect(cell.isAlive()).toBeFalsy();
  });

   it("dies if not in healthy neighbourhood", function(){
      var aliveNeighboursInHealthyNeighbourhood = 1;
      var cell = new Cell(ALIVE);
      god.sentence(cell, aliveNeighboursInHealthyNeighbourhood); 
      expect(cell.isAlive()).toBeFalsy();
   });

    it("dies if not in healthy neighbourhood", function(){
      var aliveNeighboursInHealthyNeighbourhood = 4;
      var cell = new Cell(ALIVE);
      god.sentence(cell, aliveNeighboursInHealthyNeighbourhood); 
      expect(cell.isAlive()).toBeFalsy();
   });
 });