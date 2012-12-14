App.URLState = function(){

	function save(state){
		history.pushState(state,'Conway',toURLParams(state))
	}

	function toURLParams(state){
		var result = '?';
		for(var property in state){
			result += property + '=' + state[property] + '&';
		}
		return result;		
	}


	function load(){
		var params = getURLParams();
 		var state = getStateFromParams(params);
 		setControllerValues(state);		
	}

	function setControllerValues(state){
		App.TuneControllers.setRows(state.h);
		App.TuneControllers.setColumns(state.w);
		App.TuneControllers.setNeighboursToLive(state.n_t_l.split(''));
		App.TuneControllers.setNeighboursToReborn(state.n_t_r.split(''));
		App.TuneControllers.setLifeProbability(state.p);
	}

	function getURLParams(){
		var parser = document.createElement('a');
		parser.href = document.location.href;		
 		var params = parser.search.replace('?','').split('&');
 		return params;
	}


	function getStateFromParams(params){
		var state = {};
 		for(var i=0; i< params.length;i++){
 			var pair = params[i].split('=');
 			if(pair.length !==  2) continue;
 			state[pair[0]] = pair[1];
 		}
 		return state;
	}

	
	return {
		save: save,
		load: load

	}

}();