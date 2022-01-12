


let artistaMusic = document.getElementById("artista");
let titleMusic = document.getElementById("title-msc");

let musica = document.getElementById("musica");
let musicas = [
    
    {
        src: '../assets/cria.mp3',
        title: 'Aonde eu sou cria',
        artist: 'Borges',
    },
    {
        src: '../assets/invejoso.mp3',
        title: 'Invejoso',
        artist: 'Chefin'
    }

];

    function play() {
        musica.play();

        titleMusic.innerHTML = "";
        titleMusic.innerHTML = musicas[0].title;
        artistaMusic.innerHTML = "";
        artistaMusic.innerHTML = musicas[0].artist;

        
}