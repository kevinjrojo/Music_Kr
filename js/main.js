const song = document.querySelector(".sonido");
const time = document.querySelector(".range");
const min = document.querySelector(".cero");

song.addEventListener("loadedmetadata", function () {
  time.max = song.duration;
});

song.addEventListener("timeupdate", function () {
  time.value = song.currentTime;

  let time1 = time.value;

  min.textContent = `${time1}`;

  /*console.log(time1);*/
});

const play = document.querySelector(".music-2");
const reproductor = document.querySelector(".play");

play.addEventListener("click", () => {
  if (song.paused) {
    song.play();
    reproductor.innerHTML = `<img src="./img/Stop_and_play_fill-1.svg" alt="" class="music-1" />
                             <img src="./img/boton-de-pausa.png" alt="" class="music-2" />
                            <img
                            src="./img//Stop_and_play_fill_reverse.svg"
                            alt=""
                            class="music-1"/>`;
  } else {
    song.pause();
  }
});

/*toFixed(2)*/
