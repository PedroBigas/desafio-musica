

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
}