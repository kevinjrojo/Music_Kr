import { cancion1, cancion2 } from "./canciones.js";

let cambio = document.querySelector(".cambiar");
let musicas = [cancion1, cancion2];
let posicion = 0;

function mostrarCaniones(obj) {
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

  song.addEventListener("loadedmetadata", () => {
    range.max = song.duration;
    final.textContent = song.duration;
  });
  song.addEventListener("timeupdate", () => {
    range.value = song.currentTime;
    inicio.textContent = range.value;
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
    if (posicion < musicas.length - 1) {
      posicion++;
      mostrarCaniones(musicas[1]);
    } else {
      siguiente.disableb = true;
      console.log("no hay mas musica");
    }
    siguiente.disableb = false;
  });
  const anterior = document.querySelector(".izquierda");
  anterior.addEventListener("click", () => {
    mostrarCaniones(cancion1);
  });
}

mostrarCaniones(cancion1);

const reproductor = document.querySelector(".play-1");

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
