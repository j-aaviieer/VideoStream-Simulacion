# VideoStream - Proyecto de Certificación Skillnest

Este repositorio contiene la estructura y desarrollo de la plataforma VideoStream, realizada como parte de la evaluación práctica para la certificación de Skillnest.

## Descripción del Proyecto

El proyecto consiste en el desarrollo frontend de una plataforma de transmisión de video, diseñada para permitir la navegación, reproducción e interacción con contenidos multimedia.

## Estructura de la Interfaz

La aplicación se compone de los siguientes componentes principales:

* **Encabezado (Header):** Incluye la barra de navegación, el logotipo de VideoStream, el menú de navegación principal (Inicio, Explorar, Mi lista), la barra de búsqueda y los accesos directos de notificación y perfil.

* **Sección Principal (Main):**
  * **Reproductor de Video:** Muestra el contenido multimedia activo, título, visualizaciones, fecha de publicación, acciones de interacción (Likes, Dislikes, Compartir, Añadir a la cola) e información del canal emisor con botón de suscripción.
  * **Cola de Reproducción:** Módulo lateral para gestionar la lista de reproducción siguiente, permitiendo remover elementos o limpiar la cola.
  * **Recomendaciones:** Lista de sugerencias de contenido para agregar directamente a la cola de reproducción.
  * **Sección Complementaria:** Galería inferior de tarjetas de video con miniaturas y títulos para incentivar la navegación continua.

## Tecnologías Utilizadas

* **HTML5:** Marcado semántico para la estructura general del sitio web.
* **CSS3:** Hojas de estilo para el diseño visual, maquetación responsiva y estética de los componentes.
* **JavaScript (ES6+):** Lógica del cliente para la interactividad con el reproductor, gestión dinámica de la cola y eventos de usuario.