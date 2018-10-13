// front.js

function CreateArtistButton(){
	document.getElementById("demo").innerHTML=document.getElementById("ArtistNameTextbar").value;
	var ArtistName={
		name:"name",
		artform:"ART"
	};
	ArtistName.name =document.getElementById("ArtistNameTextbar").value;
	ArtistName.artform =document.getElementById("ArtformTextbar").value;
	console.log(ArtistName.name+" "+ArtistName.artform);
}