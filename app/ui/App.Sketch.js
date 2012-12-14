App.SketchSettings = {
    backgroundColor: 0xFFF0F0D8,
    newBornCellColor: 0xFFC0D860,
    aliveCellColor: 0xFF789048,
    strokeColor: 0xFF604848
}

App.Sketch = function($p) {

    var w = 600,
        h = 400;
    var columns = App.TuneControllers.getColumns();
    var rows = App.TuneControllers.getRows();
    var diameterX = (w / columns);
    var diameterY = (h / rows);
    var generation = 0;
    var totalCells = 0;
    var $generation = $('#generation');
    var $aliveCells = $('#alive_cells');
    var board;

    
    function setup() {
        $p.size(w, h);
        $p.strokeWeight(2);
        $p.frameRate(2);
        board = App.Animation.getBoard();
    }

    function initBackground(){
        $p.background(App.SketchSettings.backgroundColor);
        $p.stroke(App.SketchSettings.strokeColor);
    }

    function forEachCell(next){
     for(var i=0;i<rows;i++){
          for(var j=0;j<columns;j++){
            next.call(this, i, j, board.get(i,j));
        }
      }   
    }

    function paintCell(i,j,color){
        $p.fill(color);
        var x = (i * diameterX) + (diameterX * 0.5);
        var y = (j * diameterY) + (diameterY * 0.5);
        $p.ellipse(x,y, diameterX, diameterY);
    }

    function draw() {
    
        initBackground();
       
        var totalCells = 0;
         forEachCell(function(i, j, cell){
            if(cell && cell.isAlive()){
                var color = cell.isNewBorn() ? App.SketchSettings.newBornCellColor : App.SketchSettings.aliveCellColor;
                paintCell(i,j,color);
                totalCells++;
            }
        });
       
        board.nextGeneration();
        generation++;
        $generation.text(generation);
        $aliveCells.text(totalCells);
    }
    
    $p.setup = setup;
    $p.draw = draw;
};

