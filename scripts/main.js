// Función para aplicar el modo oscuro si está guardado en localStorage
function aplicarModoOscuro() {
    if (localStorage.getItem('modoOscuro') === 'true') {
        document.body.classList.add('dark-mode');
        document.getElementById('icono').classList.remove('fa-moon');
        document.getElementById('icono').classList.add('fa-sun');
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById('icono').classList.remove('fa-sun');
        document.getElementById('icono').classList.add('fa-moon');
    }
}

// Aplicar el modo oscuro al cargar la página
document.addEventListener('DOMContentLoaded', (event) => {
    aplicarModoOscuro();
});

document.getElementById('miBoton').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    const icon = this.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('modoOscuro', 'true');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('modoOscuro', 'false');
    }
});


