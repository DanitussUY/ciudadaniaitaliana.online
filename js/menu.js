// menu.js

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    // Maneja el clic en el icono del menú
    menuIcon.addEventListener('click', function () {
        const isExpanded = menuIcon.getAttribute('aria-expanded') === 'true';
        menuIcon.setAttribute('aria-expanded', !isExpanded);
        
        // Abre o cierra el menú
        if (isExpanded) {
            menu.style.transform = 'translateX(100%)';
        } else {
            menu.style.transform = 'translateX(0)';
        }
    });
});
