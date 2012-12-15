describe("Board Acceptance", function() {
  
  beforeEach(function() {
  	rows = 4;
    columns = 6;
    board = new Board(rows, columns);
  });

  it("forms a period-2 oscillator", function(){
    
    var fixture = [
      [0,0,0,0,0,0],
      [0,1,1,1,0,0],
      [1,1,1,0,0,0],
      [0,0,0,0,0,0]
    ]

    var expected = [
      [0,0,1,0,0,0],
      [1,0,0,1,0,0],
      [1,0,0,1,0,0],
      [0,1,0,0,0,0],
    ]
  
    board.board = getBoardFromFixture(fixture);
    board.nextGeneration();
    expect(areEqual(board, expected)).toBeTruthy();
    board.nextGeneration();
    expect(areEqual(board, fixture)).toBeTruthy();
  });

  it("starts from a universe full of life", function(){
     var fixture = [
      [1,1,1,1],
      [1,1,1,1],
      [1,1,1,1],
      [1,1,1,1]
    ]

    var expected1 = [
      [0,1,1,0],
      [1,0,0,1],
      [1,0,0,1],
      [0,1,1,0]
    ]

    rows = 4;
    columns = 4;
    board = new Board(rows, columns);
    board.setGod(new God(['5'],['3','4']));
    board.board = getBoardFromFixture(fixture);
    board.nextGeneration();
    expect(areEqual(board, expected1)).toBeTruthy();
  });

  function getBoardFromFixture(fixture){
    var _board = [];
    for(var i=0;i<rows;i++){
      _board[i] = [];
      for(var j=0;j<columns;j++){
        _board[i][j] = new Cell((fixture[i][j] === 1)? ALIVE : DEAD);
      }
    }

    return _board;
  }

  function areEqual(board, expected){
    var equal = true;
    for(var i=0;i<rows;i++){
      for(var j=0;j<columns;j++){
        var lifeStatus = (expected[i][j] === 1? ALIVE : DEAD);
        if(board.get(i,j).lifeStatus !== lifeStatus) equal = false;
      }
    }

    return equal;
  }  

  function toConsole(board){
   var _board = [];
    for(var i=0;i<rows;i++){
      _board[i] = [];
      for(var j=0;j<columns;j++){
        _board[i][j] = board.board[i][j].isAlive()? 1 : 0;
      }
    }

    return _board; 
  }
});