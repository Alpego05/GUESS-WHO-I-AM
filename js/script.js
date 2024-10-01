const fotos = ["cabra.jpg", "cerdo.jpg", "conejo.png", "conejo2.jpg", "cordero.png", "elefante.jpg",
  "erizo.jpg", "gato.png", "jirafa.png", "leon.png", "mono.jpg", "oso.jpg", "osoblanco.png",
  "osopanda.png", "pato.png", "perro.png", "pollo.png", "pradera.jpg", "tigre.jpg", "vaca.png"];

const nombres = ["José", "Adán", "Arturo", "Jose", "Antonio", "Adiran", "Asier", "Jose", "Luis",
  "Adolfo", "Augusto", "Jose", "Manuel", "Adrià", "Aurelio", "Jose", "Maria", "Adrián",
  "Baltasar", "Juan", "Agustín", "Bartolomé", "Blas", "Aimar", "Basilio", "Juan", "Antonio",
  "Aitor", "Benito", "Boris", "Alano", "Benjamín", "Juan", "Carlos", "Alberto", "Bernardo", "Borja",
  "Aldo", "Bienvenido", "Brahim", "Aleix", "Blas", "Brais", "Alejandro", "Boris", "Bruno",
  "Alejo", "Borja", "Calisto"];

const deportes = ["Futbol", "Submarinismo", "Tenis", "Atletismo", "Beisbol", "Escalada", "Halterofilia", "Judo", "Karate", "Baloncesto", "Balanmano",
  "Motociclismo", "Automovilismo", "Ciclismo", "Boxeo", "Glof", "Atletismo", "Rudby", "Vela", "Sky", "Paddle", "Natacion"];

const aficion = ["Correr detrás de las moscas", "Jugar a la Petanca", "Nadar con las ranas", "limpiar la vajilla", "jugar al parchis", "comer piruletas de fresa",
  "ir a cazar gamusinos con mis compañero de clase", "pintar las paredes del instituto", "tapar los huecos de las paredes", "dar cabezazos a las paredes",
  "coleccionar moscas vivas"];

let contenedor = document.getElementById("contenedor");
let galeria = document.getElementById("galeria");
let nombre = document.getElementById("nombre");
let deporte = document.getElementById("deporte");
let practica = document.getElementById("practica");

const cargarImagenes = () => {
  for (let i = 0; i < 12; i++) {
      let div = document.createElement("div");
      let img = document.createElement("img");
      // img.src = "./imagenes/animales/" + fotos[Math.floor(Math.random() * fotos.length)];
      img.src = "./imagenes/interrogacion.jpg";
      div.appendChild(img);
      galeria.appendChild(div);

      img.classList.add("galeria__img");
      div.classList.add("galeria__cuadrofoto");
  }
}

const cambiarImagenes = (event) => {
  let img = event.target; 
  if (event.target.nodeName === "IMG"){
    img.src = "./imagenes/animales/" + fotos[Math.floor(Math.random() * fotos.length)];

  nombre.textContent = nombres[Math.floor(Math.random() * nombres.length)];
  deporte.textContent = deportes[Math.floor(Math.random() * deportes.length)];
  practica.textContent = aficion[Math.floor(Math.random() * aficion.length)];
  }
  
};


document.addEventListener("DOMContentLoaded", cargarImagenes);
document.addEventListener("click", cambiarImagenes);

