var deleteTextNodes = function(container){
	var _removed = [];
	for (var i = 0; i < container.childNodes.length; i++) {
		if (container.childNodes[i].nodeType == 3){
			_removed.push(container.childNodes[i]);
			container.removeChild(container.childNodes[i]);
		}
	};
	return _removed;
};
module.exports = deleteTextNodes;