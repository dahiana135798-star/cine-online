// Lista de salas creadas
let salas = [];

//Crear sala 
function crearSala() {
	
	const nombreSala =
	document.getElementById("nombreSala");
	
	const listaParticipantes =
	document.getElementById("listaParticipantes");
	
	const item =
document.createElement("li");

item.innerHTML =
`
${sala.nombre}
`;

const listaSalas =
document.getElementById("listaSalas");

listaSalas.appendChild(item);
	
	const infoSala =
	document.getElementById("infoSala");
	
	if (!nombreSala || nombreSala.value.trim() === "") {
		
		alert("Escribe un nombre paara crear la sala");
		return;
		
	}
	
	const sala = {
		nombre: nombreSala.value,
		fecha: new Date().toLocaleString()
	};
	
	salas.push(sala);
	
	infoSala.innerHTML =
	`
	<strong>Sala:</strong> ${sala.nombre}<br>
	<strong>creada:</strong> ${sala.fecha}
	`;
	
	const item =
	document.createElement("li");
	
	item.innerHTML =
	`
	${sala.nombre}
	`;
	
	listaParticipantes.appendChild(item);
	
	nombreSala.value = "";
	
}

//Buscar boton
const botonSala =
document.getElementById("btnCrearSala");

if(botonSala){
	
	botonSala.addEventListener(
	 "click",
	 crearSala
	);
	
}