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

/*toFixed(2)*/
