// Gestion du menu déroulant
document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const navMenu = document.querySelector("nav");

    // Événement pour ouvrir/fermer le menu
    menuIcon.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });

    // Fermer le menu lorsqu'un lien est cliqué
    const menuLinks = document.querySelectorAll("nav ul li a");
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("show");
        });
    });
});
