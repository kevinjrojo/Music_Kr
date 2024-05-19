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

play.addEventListener("click", () => {
  if (song.paused) {
    song.play();
  } else {
    song.pause();
  }
});

/*toFixed(2)*/
