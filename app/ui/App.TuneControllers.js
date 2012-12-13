App.TuneControllers = function(){
	
	function init(){
		$(function () {
       		initSlider();
       		initNeighbourButtons();
       		
      	});
	}

	function initNeighbourButtons(){

		var toggle = function(event){
				event.stopPropagation();
       			$(this).toggleClass('active');
       			return false;
		}

		$('#neighbours-to-live a').on('click', toggle);
		$('#neighbours-to-reborn a').on('click', toggle);
	}

	function initSlider(){
		    $('#slider').slider({
	          value: 20,
	          min: 0,
	          max: 100,
	          step: 5,
	          orientation: "horizontal",
	          range: "min",
	          change: function() { $('#life_probability').text($('#slider').slider('value') + '%'); },
	          slide: function() { $('#life_probability').text($('#slider').slider('value') + '%'); }
	        });
	}

	function getRows(){
		return $('#rows').val();
	}

	function getColumns(){
		return $('#columns').val();
	}

	function getLifeProbability(){
		return parseFloat($('#slider').slider('value')) / 100;
	}	

	function getNeighboursToLive(){
		return $('#neighbours-to-live > a.active').text().split('');
	}

	function getNeighboursToReborn(){
		return $('#neighbours-to-reborn > a.active').text().split('');
	}

	return {
		init:init,
		getRows: getRows,
		getColumns: getColumns,
		getLifeProbability: getLifeProbability,
		getNeighboursToLive: getNeighboursToLive,
		getNeighboursToReborn: getNeighboursToReborn
	}
}();