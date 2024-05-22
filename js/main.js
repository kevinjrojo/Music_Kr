/* Empezamos llamando a las etiquetas HTML con para asignales los eventos*/

const song = document.querySelector(".sonido");
const time = document.querySelector(".range");
const min = document.querySelector(".cero");

/*tomamos el tiempo que dura la cancion*/

song.addEventListener("loadedmetadata", function () {
  time.max = song.duration;
});

song.addEventListener("timeupdate", function () {
  time.value = song.currentTime;

  let time1 = time.value;

  min.textContent = `${time1}`;

  /*console.log(time1);*/
});

const play = document.querySelector(".play");
const reproductor = document.querySelector(".play-1");
const pausa = document.querySelector(".pause");

let musica1 =
  "https://www.dropbox.com/scl/fi/bk10z96o4wg3f0t5ily0u/forest-lullaby-110624.wav?rlkey=0tuvn7igyfvmbon9l0reohi3y&st=ta9y52pz&dl=1";
let musica2 =
  "https://www.dropbox.com/scl/fi/dm833oycyqdbkcqbfejdx/lost-in-city-lights-145038.mp3?rlkey=ey19q14i8z0xni3s0t2vs27g2&st=g0th6aym&dl=1";

let musicas = [musica1, musica2];

play.addEventListener("click", () => {
  if (song.src === "") {
    song.src = musica1;
    song.paused = song.play();
    play.classList.toggle("pause");
    pausa.classList.toggle("pause");
  } else {
    song.paused = song.play();
    play.classList.toggle("pause");
    pausa.classList.toggle("pause");
  }

  /*for (let i = 0; i < musicas.length; i++) {
    song.src = musicas;
  }*/
});

pausa.addEventListener("click", () => {
  song.paused = song.pause();
  play.classList.toggle("pause");
  pausa.classList.toggle("pause");
});

const Siguiente = document.querySelector(".derecha");
const anterior = document.querySelector(".izquierda");
const cambio = document.querySelector(".cambiar");

Siguiente.addEventListener("click", () => {});
