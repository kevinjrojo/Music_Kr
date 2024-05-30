import { cancion1, cancion2, cancion3 } from "./canciones.js";

let cambio = document.querySelector(".cambiar");
let reproductor = document.querySelector(".play-1");
let musicas = [cancion1, cancion2, cancion3];
let posicion = 0;
let song = new Audio();
let play, pausa, siguiente, anterior, range;

function mostrarCanciones(obj) {
  cambio.innerHTML = "";
  const foto = document.createElement("img");
  foto.src = obj.imagen;
  foto.alt = "imagen";
  foto.classList.add("img");
  cambio.appendChild(foto);
  const text1 = document.createElement("p");
  text1.textContent = obj.nombre;
  text1.classList.add("text-1");
  cambio.appendChild(text1);
  const text2 = document.createElement("p");
  text2.textContent = obj.cantante;
  text2.classList.add("text-2");
  cambio.appendChild(text2);
  const div = document.createElement("div");
  div.id = "duracion";
  cambio.appendChild(div);
  const inicio = document.createElement("p");
  inicio.textContent = "0";
  div.appendChild(inicio);
  const final = document.createElement("p");
  final.textContent = "0";
  div.appendChild(final);

  song.src = obj.cancion;
  song.load();
  song.autoplay = true;
  cambio.appendChild(song);
  const range = document.createElement("input");
  range.type = "range";
  range.min = 0;
  range.max = 100;
  range.step = 0.1;
  range.value = 0;
  range.id = "range";
  cambio.appendChild(range);

  song.addEventListener("loadedmetadata", () => {
    range.max = song.duration;
    final.textContent = formatTime(song.duration);
  });
  song.addEventListener("timeupdate", () => {
    range.value = song.currentTime;
    range.min = formatTime(song.currentTime);
    inicio.textContent = formatTime(song.currentTime);
  });

  range.addEventListener("input", () => {
    song.currentTime = range.value;
  });

  actualizarControles();
}
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
}

function actualizarControles() {
  play = document.querySelector(".play");
  anterior = document.querySelector(".izquierda");
  pausa = document.querySelector(".pause");
  siguiente = document.querySelector(".derecha");

  play.removeEventListener("click", handelPlay);
  pausa.removeEventListener("click", playOff);
  siguiente.removeEventListener("click", sig);
  anterior.removeEventListener("click", ant);

  play.addEventListener("click", handelPlay);
  pausa.addEventListener("click", playOff);
  siguiente.addEventListener("click", sig);
  anterior.addEventListener("click", ant);

  siguiente.disabled = posicion === musicas.length - 1;
  anterior.disabled = posicion === 0;

  function handelPlay() {
    song.play();
    play.classList.toggle("pause");
    pausa.classList.toggle("pause");
  }

  function playOff() {
    song.pause();
    play.classList.toggle("pause");
    pausa.classList.toggle("pause");
  }

  function sig() {
    if (posicion < musicas.length - 1) {
      posicion++;
      mostrarCanciones(musicas[posicion]);
    } else {
      siguiente.disableb = true;
      console.log("no hay mas musica");
    }
  }
  function ant() {
    if (posicion > 0) {
      posicion--;
      mostrarCanciones(musicas[posicion]);
    } else {
      siguiente.disableb = true;
      console.log("no hay mas musica");
    }
  }
}
mostrarCanciones(musicas[posicion]);

/*
function elementos() {
  song.src = musicas[posicion];
  siguiente.disableb = posicion === musicas.length - 1;
  anterior.disableb = posicion === 0;
}


*/
