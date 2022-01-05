function crearDocFrag(contenedor,etiqueta,contenido) {
	let container = document.querySelector(contenedor);
	let textContainer = document.createElement(etiqueta);
	let content = document.createTextNode(contenido);
	textContainer.innerHTML = contenido;
	container.appendChild(textContainer);

}

function crearDocFragConClase(contenedor,etiqueta,contenido,clase_1,clase_2,id) {
	let container = document.querySelector(contenedor);
	let textContainer = document.createElement(etiqueta);
	let content = document.createTextNode(contenido);
	textContainer.innerHTML = contenido;
	container.appendChild(textContainer);
	container.lastElementChild.classList.add(clase_1, clase_2);
	container.lastElementChild.setAttribute("id", id);


}

function moverVentana(ventana,barra) {
	const dragObject = document.querySelector(`${ventana}`);
	const dragZone = document.querySelector(`${barra}`);

dragZone.onmousedown = function(event) {
	let shiftX = event.clientX - dragObject.getBoundingClientRect().left + 20;
	let shiftY = event.clientY - dragObject.getBoundingClientRect().top + 20;

	dragObject.classList.add("agarrado");

	moveAt(event.pageX, event.pageY);

	function moveAt(pageX, pageY) {
		dragObject.style.left = pageX - shiftX + 'px';
		dragObject.style.top = pageY - shiftY + 'px';
	}

	function onMouseMove(event) {
		moveAt(event.pageX, event.pageY);
	}

	document.addEventListener('mousemove', onMouseMove);

	dragZone.onmouseup = function() {
		document.removeEventListener('mousemove', onMouseMove);
		dragObject.onmouseup = null
		dragObject.classList.remove("agarrado");
	};

};

dragObject.onDragStart = function(){
	return 
};
}

function dragAndDrop(elemento) {
	const dragObject = document.getElementById(`${elemento}`);

dragObject.onmousedown = function(event) {
	let shiftX = event.clientX - dragObject.getBoundingClientRect().left + 20;
	let shiftY = event.clientY - dragObject.getBoundingClientRect().top + 20;

	dragObject.classList.add("agarrado");

	moveAt(event.pageX, event.pageY);

	function moveAt(pageX, pageY) {
		dragObject.style.left = pageX - shiftX + 'px';
		dragObject.style.top = pageY - shiftY + 'px';
	}

	function onMouseMove(event) {
		moveAt(event.pageX, event.pageY);
	}

	document.addEventListener('mousemove', onMouseMove);

	dragObject.onmouseup = function() {
		document.removeEventListener('mousemove', onMouseMove);
		dragObject.onmouseup = null
		dragObject.classList.remove("agarrado");
	};
};

dragObject.onDragStart = function(){
	return 
};
}

moverVentana(".violeta",".zonaDeArrastre");


