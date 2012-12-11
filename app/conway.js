var conwaySketch = function($p) {

    var w = 400,
        h = 400;
    var rows = 10,
        columns = 10;
    var diameter = (w / columns);
    
    function setup() {
        $p.size(w, h);
        $p.strokeWeight(5);
        $p.frameRate(2);
    }
    $p.setup = setup;

    function draw() {
        $p.background(100);
        $p.fill(100, 121, 184);
        $p.stroke(255);

        var X = diameter * 0.5,
            Y = diameter * 0.5;
    
        for(var i=0;i<rows;i++){
          for(var j=0;j<columns;j++){
              var cell = board.get(i,j);
              if(cell && cell.isAlive()){
                $p.ellipse(X, Y, diameter, diameter);
              }
              Y += diameter;
          }
          X += diameter; 
          Y = diameter * 0.5;
        }

        board.nextGeneration();

    }
    $p.draw = draw;
};

