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