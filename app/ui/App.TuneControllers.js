App.TuneControllers = function(){
	
	function getRows(){
		return $('#rows').val();
	}

	function getColumns(){
		return $('#columns').val();
	}

	function getLifeProbability(){
		return $('#life_probability').val();
	}

	return {
		getRows: getRows,
		getColumns: getColumns,
		getLifeProbability: getLifeProbability
	}
}();