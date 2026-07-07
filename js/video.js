// reproductor mp4

const archivoVideo =
document.getElementById("archivoVideo");

const reproductor =
document.getElementById("reproductor");

if(archivoVideo){
	
archivoVideo.addEventListener(
"change",
function(){
	
	const archivo =
	this.files[0];
	
	if(archivo){
		
		const url =
		URL.createObjectURL(archivo);
		
		reproductor.src = url;
		
	}
	
});

}

//youtube

const btnYoutube =
document.getElementById("btnYoutube");

if(btnYoutube){
	
btnYoutube.addEventListener(
"click",
cargarYoutube
);

}

function cargarYoutube(){
	
	const link =
	document.getElementById(
	"youtubeLink"
	).value;
	
	const contenedor =
	document.getElementById(
	"youtubeContainer"
	);
	
	let videoID = "";
	
	if(link.includes("v=")){
		
		videoID = link.split("v=")[1].split("&")[0];
	}
		else if(link.includes("youtu.be/")){
		videoID = link.split("youtu.be/")[1].split("?")[0];
	}
	
	if(videoID === ""){
		
		alert(
		"Enlace de Youtube no valido"
		);
		
		return;
		
	}
	
	contenedor.innerHTML =
	`
	<iframe
	width="560"
	height="315"
	src="https://www.youtube.com/embed/${videoID}"
	title="YouTube video"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen>
	</iframe>
	`;

}
