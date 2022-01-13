


let artistaMusic = document.getElementById("artista");
let titleMusic = document.getElementById("title-msc");


let musica = document.getElementById("musica");

let srcMsc = document.getElementsByTagName("source")[0];
let srcFoto = document.getElementsByTagName("img")[0];

let iconPlay = document.getElementsByTagName("ion-icon")[1];

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
    },
    {
        srcAudio: './assets/pandora.mp3',
        title: 'Pandora',
        artist: 'DJ Matt-D',
        srcImg: './assets/images/pandora.jpg',
    },
    {
        srcAudio: './assets/Malvadao.mp3',
        title: 'Malvadão 3',
        artist: 'Xamã',
        srcImg: './assets/images/malvadao3.jpg',
    },
    {
        srcAudio: './assets/Tiffany.mp3',
        title: 'Tiffany',
        artist: 'MD Chefe',
        srcImg: './assets/images/tiffany.jpg',
    },

];
    function toggle() {
        //<ion-icon name="pause-outline"></ion-icon>
        iconPlay.setAttribute("name","pause-outline");
      
}
    function pause() {
        musica.pause();
}


    function mudarAtt(elemento,att,val){
        elemento.setAttribute(att,val)
    }

    function play() {
        musica.play();
        attDados();
        mudarAtt(iconPlay,"name","pause-outline");
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