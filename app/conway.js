var conwaySketch = function($p) {

    var w = 600,
        h = 400;
    var diameterX = (w / columns);
    var diameterY = (h / rows);
    
    function setup() {
        $p.size(w, h);
        $p.strokeWeight(2);
        $p.frameRate(2);
    }
    $p.setup = setup;

    function draw() {
        $p.background(100);
        $p.fill(100, 121, 184);
        $p.stroke(255);

        var X = diameterX * 0.5,
            Y = diameterY * 0.5;
    
        for(var i=0;i<rows;i++){
          for(var j=0;j<columns;j++){
              var cell = board.get(i,j);
              if(cell && cell.isAlive()){
                $p.ellipse(X, Y, diameterX, diameterY);
              }
              Y += diameterY;
          }
          X += diameterX; 
          Y = diameterY * 0.5;
        }

        board.nextGeneration();

    }
    $p.draw = draw;
};

