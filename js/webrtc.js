// Variables

let localStream;
let remoteStream;
let peerConnection;

const servers ={
	iceServers: [
	{ urls: "stun:stun.l.google.com:19302" }
	]
};

//Elementos

const btnCamara =
document.getElementById("btnCamara");

const btnMicrofono = document.getElementById("btnMicrofono");

const btnLlamada = document.getElementById("btnLlamada");


const videoLocal = document.getElementById("videoLocal");

const videoRemoto = document.getElementById("videoRemoto");

//Activar camara
if(btnCamara){
	
btnCamara.addEventListener(
"click",
activarCamara
);

}

async function activarCamara(){
	
	try{
		
		localStream =
		await navigator.mediaDevices
		.getUserMedia({
			
			video:true,
			audio:true
			
		});
		
		videoLocal.srcObject =
		localStream;
		alert("Camara activada");
		
	}
	
	catch(error){
		
		console.error(error);
		
		alert(
		"No se puede acceder a la camara"
		);
		
	}
	
}

//Activar / desactivar microfono

if(btnMicrofono){
	
btnMicrofono.addEventListener(
"click",
toggleMicrofono
);

}

function toggleMicrofono(){
	
	if(!localStream){
		
		alert(
		"Primero activa la cámara"
		);
		
		return;
		
	}
	
	localStream.getAudioTracks().forEach(track=>{
		track.enabled =
		!track.enabled;
		
	});
	
}

//Iniciar llamada
if(btnLlamada){
	btnLlamada.addEventListener("click"), iniciarLlamada);
}

async function iniciarLlamada() {
	if(!localStream){
		alert("Primero activa la camara");
		return;
	}
	peerConnection = new RTCPeerConnection(servers);
	
	//Agregar pistas locales
	localStream.getTrack/track, localStream);
});

//Mostrar stream remoto
peerConection.ontrack=event => {
	videoRemoto.srcObject = event.streams[0];
};

//Crear oferta
const offer = await peerConnection.createOffer();
await peerConnection.setLocalDescription(offer);

//enviar oferta
console.log("oferta creada:", offer);
}
