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

const play = document.querySelector(".play");
const reproductor = document.querySelector(".play-1");
const pausa = document.querySelector(".pause");

play.addEventListener("click", () => {
  song.paused = song.play();
  play.classList.toggle("pause");
  pausa.classList.toggle("pause");
});

pausa.addEventListener("click", () => {
  song.paused = song.pause();
  play.classList.toggle("pause");
  pausa.classList.toggle("pause");
});

/*toFixed(2)*/
