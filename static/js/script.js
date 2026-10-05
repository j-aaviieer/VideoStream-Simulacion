//Funcionalidad de todos los videos miniatura
const videos = document.querySelectorAll('.videoMiniatura');

// Recorre cada video para añadirle la funcionalidad
videos.forEach(video => {
    //Hace que al pasar el mouse por encima se reproduzca
  video.addEventListener('mouseenter', () => {
    video.play();
  });
    //Hace que al quitar el mouse de encima se pause
  video.addEventListener('mouseleave', () => {
    video.pause(); //Hace que cuando quites el mouse se pause
    video.currentTime = 0; //Hace que cuando quites el mouse sobre la miniatura el video se reinicie
  });
});

//Boton mostrar mas
const boton = document.getElementById("mostrarMas");

if (boton) {
    boton.addEventListener("click", function () {
        const contenedor = boton.closest(".video-description");
        const extraInfo = contenedor.querySelector(".extra-info");

        // Hace que se muestre lo que esta oculto
        extraInfo.classList.toggle("oculto");

        // Si ya NO tiene la clase "oculto", significa que está visible
        if (!extraInfo.classList.contains("oculto")) {
            boton.textContent = "Mostrar menos ▲";
        } else {
            boton.textContent = "Mostrar más ▼";
        }
    });
}
//Boton suscribirse
const botonSuscribirse = document.getElementById("botonSuscribirse");
const contadorSuscriptores = document.getElementById("contadorSuscriptores");

if (botonSuscribirse && contadorSuscriptores) {
    botonSuscribirse.addEventListener("click", function () {
        if (botonSuscribirse.textContent === "Suscribirse") {
            botonSuscribirse.textContent = "Suscrito";
            botonSuscribirse.style.backgroundColor = "#606060";
            botonSuscribirse.style.color = "#ffffff";
            contadorSuscriptores.textContent = "1,3 M de Suscriptores";
        } else {
            botonSuscribirse.textContent = "Suscribirse";
            botonSuscribirse.style.backgroundColor = "#ff0000";
            botonSuscribirse.style.color = "#ffffff";
            contadorSuscriptores.textContent = "1,2 M de Suscriptores";
        }
    });
}



// Selección de elementos
const btnLike = document.getElementById("btnLike");
const countLike = document.getElementById("countLike");

const btnDislike = document.getElementById("btnDislike");
const countDislike = document.getElementById("countDislike");

// Estados iniciales
let isLiked = false;
let isDisliked = false;

// Colores de fondo
const COLOR_ACTIVO = "rgba(0, 0, 0, 0.15)"; // Gris claro al seleccionar
const COLOR_INACTIVO = "transparent";

// Evento Me gusta
btnLike.addEventListener("click", function () {
    if (isLiked) {
        // Si ya tenía Like, se lo quitamos
        isLiked = false;
        btnLike.style.backgroundColor = COLOR_INACTIVO;
        countLike.textContent = "4,8 K";
    } else {
        // Activamos Like
        isLiked = true;
        btnLike.style.backgroundColor = COLOR_ACTIVO;
        countLike.textContent = "4,9 K";

        // Si el Dislike estaba activo, lo desmarcamos
        if (isDisliked) {
            isDisliked = false;
            btnDislike.style.backgroundColor = COLOR_INACTIVO;
            countDislike.textContent = "120";
        }
    }
});

// Evento No me gusta
btnDislike.addEventListener("click", function () {
    if (isDisliked) {
        // Si ya tenía Dislike, se lo quitamos
        isDisliked = false;
        btnDislike.style.backgroundColor = COLOR_INACTIVO;
        countDislike.textContent = "120";
    } else {
        // Activamos Dislike
        isDisliked = true;
        btnDislike.style.backgroundColor = COLOR_ACTIVO;
        countDislike.textContent = "121";

        // Si el Like estaba activo, lo desmarcamos
        if (isLiked) {
            isLiked = false;
            btnLike.style.backgroundColor = COLOR_INACTIVO;
            countLike.textContent = "4,8 K";
        }
    }
});