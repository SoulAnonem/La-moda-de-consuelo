// **Función para alternar el menú lateral**
// Muestra u oculta el menú lateral al ajustar su ancho.
function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}

//--------------------------------------------------------------------------------------------------------------------------------------

// **Controles de Carrusel - Sección Original**
// Maneja el avance y retroceso en el carrusel de la sección original.
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carousel = document.querySelector('.carousel');
let currentIndex = 0;

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < 2) { // Ajusta el límite según el número de productos
        currentIndex++;
        updateCarousel();
    }
});

//--------------------------------------------------------------------------------------------------------------------------------------

// **Función para actualizar el carrusel de la sección original**
// Desplaza el carrusel según el índice actual.
function updateCarousel() {
    const offset = currentIndex * -100;
    carousel.style.transform = `translateX(${offset}%)`;
}

//--------------------------------------------------------------------------------------------------------------------------------------

// **Controles de Carrusel - Sección "Lo Más Visto"**
// Maneja el avance y retroceso en el carrusel de la sección "Lo Más Visto".
const prevButtonVisto = document.querySelector('.prev-visto');
const nextButtonVisto = document.querySelector('.next-visto');
const carouselVisto = document.querySelector('.carousel-visto');
let currentIndexVisto = 0;

prevButtonVisto.addEventListener('click', () => {
    if (currentIndexVisto > 0) {
        currentIndexVisto--;
        updateCarouselVisto();
    }
});

nextButtonVisto.addEventListener('click', () => {
    if (currentIndexVisto < 2) { // Ajusta el límite según el número de productos
        currentIndexVisto++;
        updateCarouselVisto();
    }
});

//--------------------------------------------------------------------------------------------------------------------------------------

// **Función para actualizar el carrusel "Lo Más Visto"**
// Desplaza el carrusel "Lo Más Visto" según el índice actual.
function updateCarouselVisto() {
    const offsetVisto = currentIndexVisto * -100;
    carouselVisto.style.transform = `translateX(${offsetVisto}%)`;
}

//--------------------------------------------------------------------------------------------------------------------------------------

// JavaScript para manejar el cambio de imágenes al pasar el mouse
document.querySelectorAll('.imagen-con-texto').forEach(container => {
    let images = container.getAttribute('data-images').split(',');
    let imgElement = container.querySelector('img');
    let currentImageIndex = 0;
    let intervalId;

    // Función para cambiar de imagen
    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imgElement.src = images[currentImageIndex];
    }

    // Inicia la transición al pasar el mouse
    container.addEventListener('mouseenter', () => {
        intervalId = setInterval(changeImage, 1200); // Cambia cada 1.2 segundos
    });

    // Detiene la transición al salir el mouse
    container.addEventListener('mouseleave', () => {
        clearInterval(intervalId);
        currentImageIndex = 0;
    });
});

//--------------------------------------------------------------------------------------------------------------------------------------

//Roll para bajar a seccion uste sae
function scrollToSection() {
    const destino = document.getElementById('productos-destacados');
    destino.scrollIntoView({ behavior: 'smooth' });
}