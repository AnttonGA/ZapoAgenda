document.addEventListener('DOMContentLoaded', function() {
    // Cargar menú
    fetch('inc/menu.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('menu-container').innerHTML = data;
    })
    .catch(error => {
        console.error('Error al cargar el menú:', error);
    });

    // Cargar footer
    fetch('inc/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-container').innerHTML = data;
    })
    .catch(error => {
        console.error('Error al cargar el footer:', error);
    });
});
