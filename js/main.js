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
  reproductor.innerHTML = "";
  const izquierda = document.createElement("img");
  izquierda.src = "./img/Stop_and_play_fill-1.svg";
  izquierda.alt = "imagen";
  izquierda.classList.add("izquierda");
  reproductor.appendChild(izquierda);

  const play = document.createElement("img");
  play.src = "./img/boton-de-play (1).png";
  play.alt = "imagen";
  play.classList.add("play");
  reproductor.appendChild(play);

  const pausa = document.createElement("img");
  pausa.src = "./img/boton-de-pausa.png";
  pausa.alt = "imagen";
  pausa.classList.add("pause-1");
  reproductor.appendChild(pausa);

  const derecha = document.createElement("img");
  derecha.src = "./img//Stop_and_play_fill_reverse.svg";
  derecha.alt = "imagen";
  derecha.classList.add("derecha");
  reproductor.appendChild(derecha);

  play.removeEventListener("click", handelPlay);
  pausa.removeEventListener("click", playOff);
  derecha.removeEventListener("click", sig);
  izquierda.removeEventListener("click", ant);

  play.addEventListener("click", handelPlay);
  pausa.addEventListener("click", playOff);
  derecha.addEventListener("click", sig);
  izquierda.addEventListener("click", ant);

  derecha.disabled = posicion === musicas.length - 1;
  izquierda.disabled = posicion === 0;

  function handelPlay() {
    song.play();
  }

  function playOff() {
    song.pause();
  }

  function sig() {
    if (posicion < musicas.length - 1) {
      ++posicion;
      mostrarCanciones(musicas[posicion]);
    } else {
      console.log("no hay mas musica");
    }
    song.play();
  }

  function ant() {
    if (posicion > 0) {
      --posicion;
      mostrarCanciones(musicas[posicion]);
    } else {
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
