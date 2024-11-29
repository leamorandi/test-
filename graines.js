// Gestion du menu déroulant
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
});

// Gestion du clic sur les graines (exemple)
const graines = document.querySelectorAll('.graine-item.unlocked');

graines.forEach(graine => {
    graine.addEventListener('click', () => {
        alert(`Vous avez sélectionné ${graine.querySelector('p').textContent}!`);
    });
});
