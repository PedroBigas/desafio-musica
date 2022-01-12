


let artistaMusic = document.getElementById("artista");
let titleMusic = document.getElementById("title-msc");


let musica = document.getElementById("musica");

let srcMsc = document.getElementsByTagName("source")[0];
let srcFoto = document.getElementsByTagName("img")[0];

let IndexMsc = 0;
let musicas = [
    
    {
        srcAudio: './assets/cria.mp3',
        title: 'Aonde eu sou cria',
        artist: 'Borges',
        srcImg: './assets/images/cria.jpg',
    },
    {
        srcAudio: './assets/invejoso.mp3',
        title: 'Invejoso',
        artist: 'Chefin',
        srcImg: './assets/images/invejoso.jpg',
    }

];

    function play() {
        musica.play();

        attDados();
}

    function prox() {

        musica.load();
        IndexMsc += 1;

        
            if(IndexMsc > musicas.length -1){
                IndexMsc = 0;
        }

        
        srcMsc.setAttribute('src', musicas[IndexMsc].srcAudio);
        srcFoto.setAttribute('src', musicas[IndexMsc].srcImg);


        play();
}

    function attDados() {

        titleMusic.innerHTML = "";
        titleMusic.innerHTML = musicas[IndexMsc].title;
        artistaMusic.innerHTML = "";
        artistaMusic.innerHTML = musicas[IndexMsc].artist;

}