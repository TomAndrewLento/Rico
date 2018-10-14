// front.js

const API_BASE = "http://localhost:4141/fn"

function CreateArtistButton(){
	document.getElementById("demo").innerHTML=document.getElementById("ArtistNameTextbar").value;
	var Artist={
		name:"name",
		artform:"ART"
	};
	Artist.name =document.getElementById("ArtistNameTextbar").value;
	Artist.artform =document.getElementById("ArtformTextbar").value;
	console.log(Artist.name+" "+ArtistName.artform);

	//commit artist to DHT
	ArtistCreate(Artist);

	// return Artist;
}

