import { cancion1, cancion2, cancion3 } from "./canciones.js";

let cambio = document.querySelector(".cambiar");
let musicas = [cancion1, cancion2, cancion3];
let posicion = 0;

function mostrarCanciones(obj) {
  cambio.innerHTML = `<img src=${obj.imagen} alt="imagen" class="img" />
  <p class="text-1">${obj.nombre}</p>
  <p class="text-2">${obj.cantante}</p>
   
`;
  const div = document.createElement("div");
  div.id = "duracion";
  cambio.appendChild(div);
  const inicio = document.createElement("p");
  inicio.textContent = "0";
  div.appendChild(inicio);
  const final = document.createElement("p");
  final.textContent = "0";
  div.appendChild(final);
  let song = new Audio(obj.cancion);
  song.src = obj.cancion;
  cambio.appendChild(song);
  const range = document.createElement("input");
  range.type = "range";
  range.min = 0;
  range.max = 100;
  range.step = 0.1;
  range.value = 0;
  range.id = "range";
  cambio.appendChild(range);

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  }

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
  const play = document.querySelector(".play");
  play.addEventListener("click", () => {
    song.play();
    play.classList.toggle("pause");
    pausa.classList.toggle("pause");
  });
  const pausa = document.querySelector(".pause");
  pausa.addEventListener("click", () => {
    song.pause();
    play.classList.toggle("pause");
    pausa.classList.toggle("pause");
  });

  const siguiente = document.querySelector(".derecha");

  siguiente.addEventListener("click", () => {
    posicion++;
    if (posicion < musicas.length - 1) {
      posicion++;
      mostrarCanciones(posicion);
    } else {
      siguiente.disabled = true;
      console.log("no hay mas musica");
    }
  });
  const anterior = document.querySelector(".izquierda");
  anterior.addEventListener("click", () => {
    if (posicion > 0) {
      posicion--;
      mostrarCanciones(posicion);
    } else {
      anterior.disabled = true;
      console.log("no hay mas musica");
    }
  });
}
posicion = musicas[posicion];
mostrarCanciones(posicion);

/*






siguiente.addEventListener("click", () => {
  if (posicion < musicas.length - 1) {
    posicion++;
    elementos();
  } else {
    siguiente.disableb = true;
    console.log("no hay mas musica");
  }
  siguiente.disableb = false;
});

function elementos() {
  song.src = musicas[posicion];
  siguiente.disableb = posicion === musicas.length - 1;
  anterior.disableb = posicion === 0;
}



anterior.addEventListener("click", () => {
  if (posicion > 0) {
    posicion--;
    elementos();
  } else {
    anterior.disableb = true;
    console.log("no hay mas musica");
  }
  siguiente.disableb = false;
});*/
