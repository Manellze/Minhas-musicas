const nightmare ={
    id : '0',
songname: 'Nightmare',
artist: 'Avenged sevenfold',
album:'Nigthmare',
capasfile : 'Avenged sevenfold.jpg'
};
const baterry = {
    id : '1',
    songname: 'Baterry',
    artist: 'Metallica',
    album:'Master of puppets',
    capasfile : 'Baterry Metallica.jpg'
};
const decadence = {
    id : '2',
    songname: 'Decadence',
    artist: 'Disturbed',
    album:'Ben tgousand fists',
    capasfile : 'Disturbed.jpg'
};
const purpleHaze = {
    id : '3',
    songname: 'Purple haze',
    artist: 'Jimi hendrix',
    album:'Are You Experienced',
    capasfile : 'jimi hendrix.jpg'
};
const conqueror = {
    id: '4',
    songname: 'Conqueror',
    artist: 'pentakill',
    album:'Pentakill',
    capasfile : 'Pentakill.webp'
};
const neroForte = {
    id :'5',
    songname: 'Nero forte',
    artist: 'Slipknot',
    album:' We are Not Your Kind',
    capasfile : 'Slipknot.jpg'
};
const cypher4 = {
    id :'6',
    songname: 'Cypher 4',
    artist: 'Bts',
    album:' Wings',
    capasfile : 'Wings-BTS.jpg'
};
const musicLibrary = {
    nightmare, 
    baterry, 
    decadence,
    purpleHaze,
    conqueror, 
    neroForte,
    cypher4
};
const filterButton = document.getElementById('filterButton');
filterButton.addEventListener('click', filterMusic);
function filterMusic() {
    const filterInput = document.getElementById('filterInput');
    const filterText = filterInput.value.toLowerCase(); // Obtém o texto de filtro em letras minúsculas
    
    const musicArray = Object.values(musicLibrary); // Converte as propriedades em um array
  
    // Filtra as músicas com base no nome da música
    const filteredMusic = musicArray.filter(music => music.songname.toLowerCase().includes(filterText));
  
    // Atualiza a exibição das músicas na página
    pageBody.innerHTML = '';
    for (let index = 0; index < filteredMusic.length; index++) {
      const music = filteredMusic[index];
      pageBody.innerHTML += `
        <div class="card col-md-4" style="width: 12rem; height: 23rem; gap-2">
          <img src="img/Capas/${music.capasfile}" class="card-img-top" alt="Capa do disco">
          <div class="card-body d-flex flex-column">
            <h6 class="card-title">${music.songname}</h6>
            <p class="card-text">${music.album}</p>
            <p class="card-text">${music.artist}</p>
            <a target="_blank" href="..." class="btn btn-dark">Escutar</a>
          </div>
        </div>
      `;
    }
  }
  


const pageBody = document.getElementById('page-body');

function loadlibrary() {
    pageBody.innerHTML = '';
    const musicArray = Object.values(musicLibrary); // Converte as propriedades em um array

    for (let index = 0; index < musicArray.length; index++) {
        const music = musicArray[index];
        pageBody.innerHTML += `
            <div class="card col-md-4" style="width: 12rem; height: 23rem; gap-2">
                <img src="img/Capas/${music.capasfile}" class="card-img-top" alt="Capa do disco">
                <div class="card-body d-flex flex-column">
                    <h6 class="card-title">${music.songname}</h6>
                    <p class="card-text">${music.album}</p>
                    <p class="card-text">${music.artist}</p>
                    <a target="_blank" href="..." class="btn btn-dark">Escutar</a>
                </div>
            </div>
        `;
    }
}

loadlibrary();
