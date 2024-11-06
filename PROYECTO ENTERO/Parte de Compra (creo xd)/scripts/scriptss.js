// Lista de imágenes
const images = [
    'imagenes/ba47ece07147d73ccdb0d9b857ed9bb8.jpg',
    'imagenes/4626211467a6d996efe86000a35627dc.jpg',
    'imagenes/descarga (1).jpeg',
    'imagenes/rtgdf.png'
];

// Seleccionar la imagen principal y los botones
const mainImage = document.getElementById('imagen-principal');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0; // Índice de la imagen actual

// Función para actualizar la imagen principal con una transición suave
function updateImage(index) {
    mainImage.classList.remove('show'); // Ocultar la imagen actual
    
    setTimeout(() => {
        mainImage.src = images[index]; // Cambiar la imagen después de que se oculta
        
        // Mostrar la nueva imagen una vez que esté cargada
        mainImage.onload = () => {
            mainImage.classList.add('show'); // Aplicar el fade in suave
        };
    }, 500); // Esperar 500ms antes de cambiar la imagen (ajustable)
}

// Mostrar la primera imagen al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    mainImage.src = images[currentIndex]; // Mostrar la primera imagen
    mainImage.classList.add('show'); // Asegurarnos de que esté visible al cargar
});

// Función para ir a la imagen anterior
function prevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage(currentIndex);
}

// Función para ir a la siguiente imagen
function nextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage(currentIndex);
}

// Función para el cambio automático de imágenes
function autoSlide() {
    nextImage();
}

// Eventos para los botones
prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);

// Cambiar automáticamente las imágenes cada 3 segundos
let autoSlideInterval = setInterval(autoSlide, 3000);

// Detener el cambio automático cuando se pasa el mouse por encima de la imagen principal
mainImage.addEventListener('mouseover', () => {
    clearInterval(autoSlideInterval);
});

// Reiniciar el cambio automático cuando se quita el mouse de la imagen principal
mainImage.addEventListener('mouseout', () => {
    autoSlideInterval = setInterval(autoSlide, 3000);
});
