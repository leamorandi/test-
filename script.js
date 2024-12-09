document.getElementById('login-btn').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Identifiants et mot de passe corrects
    const validEmail = 'chiara.destal@gmail.com';
    const validPassword = 'services';

    // Vérification des identifiants
    if (email === validEmail && password === validPassword) {
        // Si les identifiants sont bons, on cache le formulaire et on montre la vidéo
        document.querySelector('.login-container').classList.add('fade-out');
        document.getElementById('video-container').style.display = 'block';
        document.getElementById('video-container').classList.add('fade-in');

        // Attendre 5 secondes avant de rediriger vers la page dashboard
        setTimeout(function() {
            window.location.href = 'dashboard.html';  // Redirection vers la page dashboard
        }, 5000);
    } else {
        // Afficher un message d'erreur si les identifiants sont incorrects
        errorMessage.textContent = 'Identifiant ou mot de passe incorrect';
    }
});
