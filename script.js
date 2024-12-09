document.getElementById('login-button').addEventListener('click', function() {
    // Cacher le contenu de la page et afficher la vidéo
    document.querySelector('.form-container').style.display = 'none';
    document.querySelector('.menu').style.display = 'none';  // Cacher le menu pendant la vidéo
    document.getElementById('videoContainer').style.display = 'block';

    // La vidéo dure 5 secondes, on attend la fin de la vidéo avant de passer à la suite
    const video = document.getElementById('connexionVideo');
    
    // Lorsque la vidéo se termine, on lance la transition vers la nouvelle page
    video.onended = function() {
        // Ajouter une animation de transition pour effacer le contenu de la page avant de rediriger
        document.body.classList.add('fade-out');

        // Après 1 seconde (temps de l'animation), on redirige
        setTimeout(function() {
            // Redirige vers la page suivante (remplacez 'page_suivante.html' par l'URL réelle)
            window.location.href = 'page_suivante.html';
        }, 1000); // 1 seconde = durée de l'animation
    };
});
