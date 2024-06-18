import Leon from "./Leon.js";
import Lobo from "./Lobo.js";
import Oso from "./Oso.js";
import Serpiente from "./Serpiente.js";
import Aguila from "./Aguila.js";
import { obtenerAnimales } from "./api.js";

// Agrega un evento de escucha al botón con el ID 'btnRegistrar' para registrar un nuevo animal al hacer clic
document.getElementById("btnRegistrar").addEventListener("click", () => {
  // Obtiene los valores de los campos del formulario
  const animal = document.getElementById("animal").value;
  const edad = document.getElementById("edad").value;
  const comentarios = document.getElementById("comentarios").value;

  // Verifica que todos los campos estén completos
  if (!animal || !edad || !comentarios) {
    alert("Por favor complete todos los campos.");
    return;
  }

  // Variable para almacenar el nuevo animal
  let nuevoAnimal;

  // Crea una instancia del animal correspondiente según el valor seleccionado
  switch (animal) {
    case "Leon":
      nuevoAnimal = new Leon(
        animal,
        edad,
        comentarios,
        "assets/imgs/Leon.png",
        "assets/sounds/Rugido.mp3"
      );
      break;
    case "Lobo":
      nuevoAnimal = new Lobo(
        animal,
        edad,
        comentarios,
        "assets/imgs/Lobo.jpg",
        "assets/sounds/Aullido.mp3"
      );
      break;
    case "Oso":
      nuevoAnimal = new Oso(
        animal,
        edad,
        comentarios,
        "assets/imgs/Oso.jpg",
        "assets/sounds/Grunido.mp3"
      );
      break;
    case "Serpiente":
      nuevoAnimal = new Serpiente(
        animal,
        edad,
        comentarios,
        "assets/imgs/Serpiente.jpg",
        "assets/sounds/Siseo.mp3"
      );
      break;
    case "Aguila":
      nuevoAnimal = new Aguila(
        animal,
        edad,
        comentarios,
        "assets/imgs/Aguila.png",
        "assets/sounds/Chillido.mp3"
      );
      break;
  }

  // Agrega el nuevo animal al contenedor de animales
  agregarAnimal(nuevoAnimal);
  // Limpia el formulario después de agregar el animal
  limpiarFormulario();
});

// Función para agregar un animal al contenedor de animales
const agregarAnimal = (animal) => {
  const contenedor = document.getElementById("Animales");

  // Crea una nueva tarjeta para el animal
  const card = document.createElement("div");
  card.classList.add("card", "m-2", "contenedor-animal");

  // Crea una imagen para la tarjeta del animal
  const img = document.createElement("img");
  img.src = animal.Imagen;
  img.classList.add("card-img-top");
  img.addEventListener("click", () => mostrarModal(animal));

  // Crea el cuerpo de la tarjeta
  const body = document.createElement("div");
  body.classList.add("card-body");

  // Crea un botón para reproducir el sonido del animal
  const btn = document.createElement("button");
  btn.classList.add("btn", "btn-largo", "btn-secondary");
  btn.innerText = "Sonido";
  btn.addEventListener("click", () => reproducirSonido(animal.Sonido));

  // Agrega el botón al cuerpo de la tarjeta
  body.appendChild(btn);
  // Agrega la imagen y el cuerpo a la tarjeta
  card.appendChild(img);
  card.appendChild(body);
  // Agrega la tarjeta al contenedor de animales
  contenedor.appendChild(card);
};

// Función para mostrar el modal con la información del animal
const mostrarModal = (animal) => {
  const modal = document.getElementById("exampleModal");
  const modalBody = modal.querySelector(".modal-body");
  modalBody.innerHTML = `
    <img src="${animal.Imagen}" alt="${animal.Nombre}" class="img-fluid img-modal ">
    <p><strong>Nombre:</strong> ${animal.Nombre}</p>
    <p><strong>Edad:</strong> ${animal.Edad}</p>
    <p><strong>Comentarios:</strong> ${animal.Comentarios}</p>
  `;
  $("#exampleModal").modal("show");
};

// Función para reproducir el sonido del animal
const reproducirSonido = (sonido) => {
  const player = document.getElementById("player");
  player.src = sonido;
  player.play();
};

// Función para limpiar los campos del formulario
const limpiarFormulario = () => {
  document.getElementById("animal").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("comentarios").value = "";
  document.getElementById("preview").innerHTML = ""; // Limpiar la vista previa
};

// Función para mostrar la vista previa de la imagen del animal seleccionado
const mostrarVistaPrevia = (animal) => {
  const preview = document.getElementById("preview");
  let imgSrc;

  // Selecciona la imagen correspondiente según el animal seleccionado
  switch (animal) {
    case "Leon":
      imgSrc = "assets/imgs/Leon.png";
      break;
    case "Lobo":
      imgSrc = "assets/imgs/Lobo.jpg";
      break;
    case "Oso":
      imgSrc = "assets/imgs/Oso.jpg";
      break;
    case "Serpiente":
      imgSrc = "assets/imgs/Serpiente.jpg";
      break;
    case "Aguila":
      imgSrc = "assets/imgs/Aguila.png";
      break;
    default:
      imgSrc = "";
  }

  // Si hay una imagen seleccionada, la muestra en la vista previa
  if (imgSrc) {
    preview.innerHTML = `<img src="${imgSrc}" alt="${animal}" class="img-fluid img-preview">`;
  }
};

// Agrega un evento de escucha al selector de animales para mostrar la vista previa al cambiar de animal
document.getElementById("animal").addEventListener("change", (event) => {
  const animalSeleccionado = event.target.value;
  mostrarVistaPrevia(animalSeleccionado);
});

// Función asíncrona que obtiene la lista de animales al cargar la página
(async () => {
  const animales = await obtenerAnimales();
  console.log(animales);
})();
