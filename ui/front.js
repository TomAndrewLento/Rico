// front.js

const API_BASE = "http://localhost:4141/fn"
var cheatyList=[];

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

    console.log("cheaty stuff");
	var artistEntry = {
		nme: name,
		art: artform,
	}
	cheatyList.push(artistEntry);

})

//custom GetAllArtists
document.querySelector('#getallButton').addEventListener('click', e=>{
	console.log("GetAllArtists:");
	for(var i=0;i<cheatyList.length;i++){
		//
		console.log("name: \""+cheatyList[i].nme+"\", artform: "+cheatyList[i].art);
	}
    // const type = document.querySelector('#ArtistNameTextbar').value
    // endpoint('getAllartist', type).then(content => {
    //     console.log("Call get all artist:")
    //     console.log(content)
    // })
})




// function CreaartistrtistButton(){
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

