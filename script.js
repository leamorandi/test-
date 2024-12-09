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

// Gestion du clic sur les fruits (exemple)
const fruits = document.querySelectorAll('.fruit-item.unlocked');

fruits.forEach(fruit => {
    fruit.addEventListener('click', () => {
        alert(`Vous avez sélectionné ${fruit.querySelector('p').textContent}!`);
    });
});
