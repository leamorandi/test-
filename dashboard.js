// Gérer l'affichage du menu déroulant
const menuToggle = document.getElementById("menu-toggle");
const dropdownMenu = document.getElementById("dropdown-menu");

menuToggle.addEventListener("click", () => {
    dropdownMenu.classList.toggle("hidden");
});
