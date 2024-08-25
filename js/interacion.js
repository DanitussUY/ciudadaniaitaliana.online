document.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.scrollY;

    console.log('Scroll Position:', scrollPosition); // Verifica la posición de scroll

    if (scrollPosition > 100) { // Cambia 100 por la posición en la que quieres que el color cambie
        hero.classList.add('dark-overlay');
    } else {
        hero.classList.remove('dark-overlay');
    }
});
