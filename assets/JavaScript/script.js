


let artistaMusic = document.getElementById("artista");
let titleMusic = document.getElementById("title-msc");


let musica = document.getElementById("musica");

let srcMsc = document.getElementsByTagName("source")[0];
let srcFoto = document.getElementsByTagName("img")[0];

let TimingMusic = document.getElementById("barraTempo");
let tempoatualMusica = document.getElementById("durante");
let durationTotal = document.getElementById("duracao");

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

onload = function(){
    durationTotal.innerHTML = formatacao(Math.round(musica.duration));
}

musica.onloadeddata = function(){
    TimingMusic.setAttribute("max",Math.round(musica.duration));
    durationTotal.innerHTML = formatacao(Math.round(musica.duration));

}

    function toggle() {
        //<ion-icon name="pause-outline"></ion-icon>
        iconPlay.setAttribute("name","pause-outline");
      
}
    function pause() {
        musica.pause();
        mudarAtt(iconPlay,"name","play-outline");
        mudarAtt(iconPlay,"onclick","play()");
}


    function mudarAtt(elemento,att,val){
        elemento.setAttribute(att,val)
    }

    function play() {
        musica.play();
        attDados();
        mudarAtt(iconPlay,"name","pause-outline");
        mudarAtt(iconPlay,"onclick","pause()");

            setInterval(() => {
                TimingMusic.value = Math.round(musica.currentTime);
                tempoatualMusica.innerHTML = formatacao(Math.round(musica.currentTime));

                    if (formatacao(Math.round(musica.currentTime)) == formatacao(Math.round(musica.duration))){
                        prox();
                    }


            }, 1000);





}
    function voltar() {

        musica.load();
        IndexMsc -= 1;

        
            if(IndexMsc < 0){
                IndexMsc = 0;
        }


        TimingMusic.value = 0
        play();
}

    function prox() {

        musica.load();
        IndexMsc += 1;

        
            if(IndexMsc > musicas.length -1){
                IndexMsc = 0;
        }

    
        TimingMusic.value = 0
        play();
}

    function attDados() {

        titleMusic.innerHTML = "";
        titleMusic.innerHTML = musicas[IndexMsc].title;
        artistaMusic.innerHTML = "";
        artistaMusic.innerHTML = musicas[IndexMsc].artist;
        srcMsc.setAttribute('src', musicas[IndexMsc].srcAudio);
        srcFoto.setAttribute('src', musicas[IndexMsc].srcImg);
}

    function SetTiming() {
        musica.currentTime = TimingMusic.value;
            if(musica.paused == false){
                musica.play();
            }
        musica.play();
}

    function formatacao(secs, format) {
        let hr = Math.floor(secs / 3600);
        let min = Math.floor((secs - (hr * 3600))/60);
        let sec = Math.floor(secs - (hr * 3600) - (min *60));

            if (min < 10){
                min = "0" + min;
            }
            if (sec < 10){
                sec = "0" + sec;
            }
            return min + ":" + sec;
    }