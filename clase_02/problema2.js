document.getElementById("formulario").onsubmit = function(evento){

	evento.preventDefault();

	var direccion = document.getElementById("imagen").value;

	var imagen = document.createElement("img");

	imagen.src = direccion;

	document.getElementById("cuerpo").appendChild(imagen);
}