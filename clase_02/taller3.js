document.getElementById("formulario").onsubmit = function(evento){

	evento.preventDefault();

	var tarea = document.getElementById("item").value;

	//crear elemento

	var item = document.createElement("li");

	var contenido = document.createTextNode(tarea);

	item.appendChild(contenido);

	document.getElementById("tareas").appendChild(item);

	document.getElementById(item).value = "";
}