var conwaySketch = function($p) {

    var w = 600,
        h = 400;
    var diameterX = (w / columns);
    var diameterY = (h / rows);
    var generation = 0;
    var totalCells = 0;
    var $generation = $('#generation');
    var $aliveCells = $('#alive_cells');
    
    
    function setup() {
        $p.size(w, h);
        $p.strokeWeight(2);
        $p.frameRate(4);
    }
    $p.setup = setup;

    function initBackground(){
        $p.background(100);
        $p.fill(100, 121, 184);
        $p.stroke(255);
    }

    function draw() {
    
        initBackground();
          
        var X = diameterX * 0.5,
            Y = diameterY * 0.5;

        var totalCells = 0;
    
        for(var i=0;i<rows;i++){
          for(var j=0;j<columns;j++){
              var cell = board.get(i,j);
              if(cell && cell.isAlive()){
                $p.ellipse(X, Y, diameterX, diameterY);
                totalCells++;
              }
              Y += diameterY;
          }
          X += diameterX; 
          Y = diameterY * 0.5;
        }

        board.nextGeneration();
        generation++;
        $generation.text(generation);
        $aliveCells.text(totalCells);
    }
    $p.draw = draw;
};

