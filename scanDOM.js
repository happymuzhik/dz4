var scanDOM = function(element){
	if(scanDOM.result){
		scanDOM.result.tags = {};
		scanDOM.result.classes = {};
	}
	if (!element){ element = document; }
	for (var i = 0; i < element.children.length; i++) {
		if (element.children[i].children.length > 0){
			scanDOM(element.children[i]);
		}
		if (scanDOM.result.tags[element.children[i].tagName]){
			scanDOM.result.tags[element.children[i].tagName]++;
		}else{
			scanDOM.result.tags[element.children[i].tagName] = 1;
		}
		if (element.children[i].classList.length > 0){
			for (var j = 0; j < element.children[i].classList.length; j++) {
				if (scanDOM.result.classes[element.children[i].classList[j]]){
					scanDOM.result.classes[element.children[i].classList[j]]++;
				}else{
					scanDOM.result.classes[element.children[i].classList[j]] = 1;
				}
			};
		}
	};
	return scanDOM.result;
};
scanDOM.result = {
	'tags':{},
	'classes':{},
};
module.exports = scanDOM;
