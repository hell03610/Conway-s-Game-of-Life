describe("Cell", function(){
  it("should be dead by default", function(){
    var cell = new Cell();
    expect(cell.isAlive()).toBeFalsy();
  });

  it("its life can be instantiated", function(){
    var cell = new Cell(ALIVE);
    expect(cell.isAlive()).toBeTruthy();
  });

  it("knows if it is a newborn", function(){
    var cell = new Cell(DEAD);
    cell.live();
    expect(cell.isNewBorn()).toBeTruthy();
    cell.die();
    expect(cell.isNewBorn()).toBeFalsy();  
  });

  it("remembers its last life status", function(){
    var cell = new Cell(DEAD);
    cell.live();
    expect(cell.wasAlive()).toBeFalsy();
    cell.die();
    expect(cell.wasAlive()).toBeTruthy();   
  });
});


