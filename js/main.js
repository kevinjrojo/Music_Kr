import { cancion1, cancion2, cancion3 } from "./canciones.js";

let cambio = document.querySelector(".cambiar");
let contenedor = document.querySelector(".content");
let musicas = [cancion1, cancion2, cancion3];
let posicion = 0;
let song = new Audio();
let play, pausa, siguiente, anterior, range;

function crearControles() {
  // Crear controles solo una vez
  const reproductor = document.createElement("div");
  reproductor.classList.add("play-1");
  contenedor.appendChild(reproductor);

  anterior = document.createElement("img");
  anterior.src = "./img/Stop_and_play_fill-1.svg";
  anterior.alt = "imagen";
  anterior.classList.add("izquierda");
  contenedor.appendChild(anterior);

  play = document.createElement("img");
  play.src = "./img/boton-de-play (1).png";
  play.alt = "imagen";
  play.classList.add("play");
  contenedor.appendChild(play);

  pausa = document.createElement("img");
  pausa.src = "./img/boton-de-pausa.png";
  pausa.alt = "imagen";
  pausa.classList.add("pause");
  contenedor.appendChild(pausa);

  siguiente = document.createElement("img");
  siguiente.src = "./img//Stop_and_play_fill_reverse.svg";
  siguiente.alt = "imagen";
  siguiente.classList.add("derecha");
  contenedor.appendChild(siguiente);

  play.addEventListener("click", handelPlay);
  pausa.addEventListener("click", playOff);
  siguiente.addEventListener("click", sig);
  anterior.addEventListener("click", ant);
}

function mostrarCanciones(obj) {
  // Limpiar contenido de la sección cambiar sin borrar los controles
  cambio.innerHTML = "";

  // Crear y añadir nuevos elementos de canción
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
  inicio.classList.add("time");
  div.appendChild(inicio);

  const final = document.createElement("p");
  final.textContent = "0";
  final.classList.add("time");
  div.appendChild(final);

  song.src = obj.cancion;
  song.load();

  range = document.createElement("input");
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

  actualizarEstadoBotones();
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
}

function actualizarEstadoBotones() {
  siguiente.disabled = posicion === musicas.length - 1;
  anterior.disabled = posicion === 0;
}

function handelPlay() {
  song.play();
  pausa.classList.remove("pause");
  pausa.classList.add("pause-1");
  play.classList.add("pause");
}

function playOff() {
  song.pause();
  play.classList.remove("pause");
  pausa.classList.add("pause");
}

function sig() {
  if (posicion < musicas.length - 1) {
    posicion++;
    mostrarCanciones(musicas[posicion]);
  } else {
    console.log("no hay más música");
  }
  song.autoplay = true;
}

function ant() {
  if (posicion > 0) {
    posicion--;
    mostrarCanciones(musicas[posicion]);
  } else {
    console.log("no hay más música");
  }
  song.autoplay = true;
}

// Crear controles una vez al inicio
crearControles();

// Mostrar la canción inicial
mostrarCanciones(musicas[posicion]);
