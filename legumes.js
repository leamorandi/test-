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

// Gestion du clic sur les légumes (exemple)
const vegetables = document.querySelectorAll('.vegetable-item.unlocked');

vegetables.forEach(vegetable => {
    vegetable.addEventListener('click', () => {
        alert(`Vous avez sélectionné ${vegetable.querySelector('p').textContent}!`);
    });
});
