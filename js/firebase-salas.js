function crearSalaFirebase(){

    console.log("Botón Crear Sala presionado");

    const nombreSala =
    document.getElementById("nombreSala");

}
import { db } from "./firebase-config.js";

import {
	ref,
	push,
	onChildAdded
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";

// Referencia a las salas

const salasRef = ref(db, "salas");

//Botom crear sala

const btnCrearSala =
document.getElementById("btnCrearSala");

if(btnCrearSala){
	
	btnCrearSala.addEventListener(
	    "click",
		crearSalaFirebase
	);
	
}

function crearSalaFirebase(){
	
	const nombreSala =
	document.getElementById("nombreSala");

    if(nombreSala.value.trim() === ""){
		
		alert("Escribe un nombre para la sala");
		
		return;
		
	}
	
	push(salasRef,{
		
		nombre: nombreSala.value,
		fecha: Date.now()
		
	});
	
	nombreSala.value = "";
	
}

//Mostar salas automaticamente

onChildAdded(salasRef,(data)=>{
	
	const sala = data.val();
	
	const lista =
	document.getElementById("listaSalas");
	
	if(!lista){
		
		return;
		
	}
	
	const li =
	document.createElement("li");
	
	li.textContent =
	sala.nombre;
	
	lista.appendChild(li);
	
});
