// Peaceful Revolution - Component Loader
// Lädt Header und Footer automatisch in alle Seiten

document.addEventListener('DOMContentLoaded', function() {
    // Header laden
    fetch('assets/components/header.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('header').innerHTML = html;
        })
        .catch(error => console.error('Error loading header:', error));
    
    // Footer laden
    fetch('assets/components/footer.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('footer').innerHTML = html;
        })
        .catch(error => console.error('Error loading footer:', error));
});