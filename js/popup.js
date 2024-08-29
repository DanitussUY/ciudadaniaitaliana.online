// Función para mostrar el pop-up con transición
function loadContent(page) {
    const contentPopup = document.getElementById('contentPopup');
    const popupContent = document.querySelector('.popup-content');

    // Mostrar el pop-up
    contentPopup.style.display = 'flex';

    // Iniciar la transición
    setTimeout(() => {
        contentPopup.classList.add('show');
    }, 10); // Pequeña demora para permitir que el CSS aplique la transición

    // Cargar el contenido del archivo HTML en el div popupContent
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('popupContent').innerHTML = data;
        })
        .catch(error => {
            document.getElementById('popupContent').innerHTML = "<p>Error al cargar el contenido.</p>";
        });

    // Desactivar el scroll en el body
    document.body.classList.add('no-scroll');
}

// Función para cerrar el pop-up con transición
function closePopup() {
    const contentPopup = document.getElementById('contentPopup');

    // Iniciar la transición de cierre
    contentPopup.classList.remove('show');

    // Esperar la duración de la transición antes de ocultar el pop-up
    setTimeout(() => {
        contentPopup.style.display = 'none';
        document.body.classList.remove('no-scroll');
    }, 300); // Tiempo igual al de la transición
}

// Cerrar al hacer clic en el botón de cierre
document.getElementById('closePopup').onclick = closePopup;

// Cerrar al hacer clic fuera del contenido
document.getElementById('contentPopup').onclick = function(event) {
    if (event.target === document.getElementById('contentPopup')) {
        closePopup();
    }
}
