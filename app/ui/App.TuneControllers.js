App.TuneControllers = function(){
	
	function getRows(){
		return $('#rows').val();
	}

	function getColumns(){
		return $('#columns').val();
	}

	function getLifeProbability(){
		return parseFloat($('#slider').slider('value')) / 100;
	}

	return {
		getRows: getRows,
		getColumns: getColumns,
		getLifeProbability: getLifeProbability
	}
}();