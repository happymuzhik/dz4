var deleteTextNodesRec = function(container){
	var _removed = [], _res = 0;
	for (var i = 0; i < container.childNodes.length; i++) {
		if (container.childNodes[i].childNodes.length > 0){
			_res += deleteTextNodesRec(container.childNodes[i]);
		}
		if (container.childNodes[i].nodeType == 3){
			_removed.push(container.childNodes[i]);
		}
	};
	for (var i = 0; i < _removed.length; i++) {
		_removed[i].parentElement.removeChild(_removed[i]);
		_res++;
	};
	return _res;
};
module.exports = deleteTextNodesRec;