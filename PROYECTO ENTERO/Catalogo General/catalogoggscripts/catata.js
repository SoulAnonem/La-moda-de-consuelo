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

//-------------------------------------------------------------------------------------------------------------------------------------