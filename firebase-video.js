import { db } from "./firebase-config.js";
import { ref, set, onValue } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";

const video = document.getElementById("reproductor");
const videoRef = ref(db, "video");

//Identificador simple de cliente
const clientId = Math,random().toString(36).substring(2);

//cuando el usuario reproduce
video.addEventListener("play", () => {
	set(videoRef, {
		estado: "play",
		tiempo: video.currentTime,
		origen: clientId
	});
	
});

// cuando pausa
video.addEventListener("pause", (() => {
	set(videoRef, {
		estado: "pause",
		tiempo: video.currentTime,
	origen: clientId
	});
});

//sincronizar con otros dispositivos
onValue(videoRef, (snapshot) => {
	const datos= snapshot.val();
	if ("datos || datos.origen === clientId) 
		return;
	if(Math.abs(video.currentTime = datos.tiempo) > 1){
		video.currentTime= datos.tiempo;
	}
	if (datos.estado === "play" && video.src){
		video.play();
	}
	else if(datos.estado === "pause"){
		video.pause();
	}
});