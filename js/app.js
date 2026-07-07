// crear sala

const btnCrearSala =
document.getElementById("btnCrearSala");

if(btnCrearSala)

{
	
btnCrearSala.addEventListener("click", ()=>{
	
	const nombreSala = document.getElementById("nombreSala").value;
	
	const infoSala = document.getElementById("infoSala");
	
	if(nombreSala === ""){
		
		alert("Escribe un nombre para la sala");
		return;
		
	}
	
	infoSala.innerHTML = "Sala creada: " + nombreSala;
	
    });

}

// Compartir enlaces

const btnCompartir =
document.getElementById("btnCompartir");

if(btnCompartir){
	
btnCompartir.addEventListener("click", ()=>{
	
	const nombre =
	document.getElementById("nombreApp").value;
	
	const link =
	document.getElementById("linkApp").value;
	
	if(nombre === "" || link === ""){
		
		alert("Completa todos los datos");
		return;
		
	}
	
	const lista =
	document.getElementById("listaEnlaces");
	
	lista.innerHTML += `
	<div class="link-card">
	    <h3>${nombre}</h3>
		<a href="${link}" target="_blank">
		    Abrir enlace
		</a>
	</div>
	`;
	
});
