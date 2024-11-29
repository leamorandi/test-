document.getElementById("login-button").addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Vérification des identifiants
    if (email === "chiara.destal@gmail.com" && password === "13676155") {
        alert("Connexion réussie !");
        window.location.href = "dashboard.html"; // Redirection vers la page suivante
    } else {
        alert("Identifiant ou mot de passe incorrect !");
    }
});
