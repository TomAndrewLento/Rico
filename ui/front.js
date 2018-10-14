// front.js

const API_BASE = "http://localhost:4141/fn"

const endpoint = (name, data) => {
  const url = `${API_BASE}/Artist_Mgmt/${name}`
  return fetch(url, {
    method: 'post',
    body: (data),
  }).then(r => r.json())
}


document.querySelector('#createButton').addEventListener('click', e => {
    const name = document.querySelector('#ArtistNameTextbar').value
    const artform = document.querySelector('#ArtformTextbar').value
    endpoint('ArtistCreate', JSON.stringify({
        name,
        artform,
    })).then(hash => {
        console.log("get hash")
        console.log(hash)
        endpoint('ArtistRead', hash).then(content => {
            console.log("get object")
            console.log(content)
        })
    })

})




// function CreateArtistButton(){
// 	document.getElementById("demo").innerHTML=document.getElementById("ArtistNameTextbar").value;
// 	var Artist={
// 		name:"name",
// 		artform:"ART"
// 	};
// 	Artist.name =document.getElementById("ArtistNameTextbar").value;
// 	Artist.artform =document.getElementById("ArtformTextbar").value;
// 	console.log(Artist.name+" "+ArtistName.artform);

// 	//commit artist to DHT
// 	ArtistCreate(Artist);

// 	// return Artist;
// }

