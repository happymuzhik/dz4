var prepend = function(container, newElement){
	container.insertBefore(newElement, container.firstChild);
	return container;
};
module.exports = prepend;