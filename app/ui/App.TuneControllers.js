App.TuneControllers = function(){
	
	function init(){
		$(function () {
       		initSlider();
       		initNeighbourButtons();
       		App.URLState.load();
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

	function initSlider(initialValue){
		var updateValue = function(){
			 $('#life_probability').text($('#slider').slider('value') + '%');
		}

	    $('#slider').slider({
          value: initialValue || 20,
          min: 0,
          max: 100,
          step: 5,
          orientation: "horizontal",
          range: "min",
          change: function() { updateValue(); },
          slide: function() { updateValue(); }
        });
	}

	function getRows(){
		return $('#rows').val();
	}

	function setRows(value){
		$('#rows').val(value);
	}

	function getColumns(){
		return $('#columns').val();
	}

	function setColumns(value){
		return $('#columns').val(value);
	}

	function getLifeProbability(){
		return parseFloat($('#slider').slider('value')) / 100;
	}

	function setLifeProbability(value){
		initSlider(parseFloat(value) * 100);
	}	
	

	function getNeighboursToLive(){
		return $('#neighbours-to-live > a.active').text().split('');
	}

	function setNeighboursToLive(values){
		$('#neighbours-to-live > a.active').removeClass('active');
		var buttons = $('#neighbours-to-live > a');
		for(var i=0; i< values.length; i++){
			var index = parseInt(values[i]) - 1;
			buttons[index].classList.add('active');
		}
	}

	function getNeighboursToReborn(){
		return $('#neighbours-to-reborn > a.active').text().split('');
	}

	function setNeighboursToReborn(values){
		$('#neighbours-to-reborn > a.active').removeClass('active');
		var buttons = $('#neighbours-to-reborn > a');
		for(var i=0; i< values.length; i++){
			var index = parseInt(values[i]) - 1;
			buttons[index].classList.add('active');
		}
	}
	
	
	function toJson(){
		var state = {
			h:getRows(),
			w:getColumns(),
			p:getLifeProbability(),
			n_t_l:getNeighboursToLive().join(''),
			n_t_r:getNeighboursToReborn().join('')
		};
		return state;
	}

	function save(){
		App.URLState.save(toJson());
	}


	return {
		init:init,
		save: save,
		getRows: getRows,
		getColumns: getColumns,
		getLifeProbability: getLifeProbability,
		getNeighboursToLive: getNeighboursToLive,
		getNeighboursToReborn: getNeighboursToReborn,
		setRows: setRows,
		setColumns: setColumns,
		setLifeProbability: setLifeProbability,
		setNeighboursToLive: setNeighboursToLive,
		setNeighboursToReborn: setNeighboursToReborn,
		toJson: toJson
	}
}();