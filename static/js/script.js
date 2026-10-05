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



document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener el contenedor principal de la cola de reproducción
    const colaContainer = document.querySelector('.videos-cola-videos');

    // 2. Obtener todos los botones de "Añadir a la cola" en la sección de recomendados
    const botonesAddRecomendados = document.querySelectorAll('.videos-recomendados-video-right button');

    // 3. Asignar el evento click a cada botón
    botonesAddRecomendados.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            // Encuentra la tarjeta contenedora del video recomendado actual
            const tarjetaVideo = e.target.closest('.videos-recomendados-videos');

            if (!tarjetaVideo) return;

            // Extraer datos del video recomendado
            const videoSrc = tarjetaVideo.querySelector('video').getAttribute('src');
            const titulo = tarjetaVideo.querySelector('.videos-recomendados-video-middle h2').innerText;
            const parrafos = tarjetaVideo.querySelectorAll('.videos-recomendados-video-middle p');
            const canal = parrafos[0] ? parrafos[0].innerText : 'VideoStream';
            const visualizaciones = parrafos[1] ? parrafos[1].innerText : '';

            // Crear el nuevo contenedor de video para la cola
            const nuevoVideoCola = document.createElement('div');
            nuevoVideoCola.classList.add('videos-cola-video');

            // Construir el HTML respetando la estructura original de la cola
            nuevoVideoCola.innerHTML = `
                <div class="videos-cola-videos-left">
                    <video src="${videoSrc}" class="videoMiniatura" muted loop></video>
                </div>
                <div class="videos-cola-videos-middle">
                    <h2>${titulo}</h2>
                    <p>${canal}</p>
                    <p>${visualizaciones}</p>
                </div>
                <div class="videos-cola-videos-right">
                    <button class="btn-remove">x</button>
                </div>
            `;

            // Permite eliminar este elemento de la cola al hacer clic en 'x'
            nuevoVideoCola.querySelector('.btn-remove').addEventListener('click', () => {
                nuevoVideoCola.remove();
            });

            // Agregar el elemento recién creado a la cola
            colaContainer.appendChild(nuevoVideoCola);
        });
    });

    // Opcional: Hacer funcionar el botón de eliminar 'x' en los elementos preexistentes de la cola
    const botonesEliminarCola = document.querySelectorAll('.videos-cola-videos-right button');
    botonesEliminarCola.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            const itemCola = e.target.closest('.videos-cola-video');
            if (itemCola) itemCola.remove();
        });
    });
});