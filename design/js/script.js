var clickHandler = function(event) {
	var block = event.target;
	var container = document.querySelector('.js-container')
	block.style.position = "absolute";
	block.style.margin = 0;
	block.style.left = (container.offsetWidth / 2) - (block.offsetWidth / 2) + "px"; 
	block.style.top = (container.offsetHeight / 2) - (block.offsetHeight / 2) + "px";
};

document.querySelector('.js-element').addEventListener('click', clickHandler);

//210-104 106