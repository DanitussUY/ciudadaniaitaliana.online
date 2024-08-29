// Seleccionar elementos
const cookieSvg = document.getElementById('cookieSvg');
let lastScrollTop = 0;

// Función para manejar el scroll
function handleScroll() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll hacia abajo: mostrar la cookie
        cookieSvg.classList.add('show');
    } else {
        // Scroll hacia arriba: ocultar la cookie
        cookieSvg.classList.remove('show');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Evita valores negativos
}

// Agregar evento de scroll
window.addEventListener('scroll', handleScroll);
