document.getElementById('intro').addEventListener('click', function() {
    // Desvanecer la introducción
    this.style.opacity = '0';
    
    // Esperar un segundo antes de cambiar a la pantalla de bienvenida
    setTimeout(() => {
        this.classList.add('hidden'); // Ocultar la introducción
        const welcome = document.getElementById('welcome');
        welcome.classList.remove('hidden');
        welcome.style.opacity = '1';
    }, 1000);
});
