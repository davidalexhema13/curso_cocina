// Fecha y hora límite de la promoción
const fechaLimite = new Date('2024-12-01T23:59:59'); // Cambia esta fecha si es necesario

// Función para actualizar el contador
function actualizarContador() {
    const ahora = new Date();
    const diferencia = fechaLimite - ahora;

    if (diferencia <= 0) {
        document.getElementById('contador').innerText = "¡La promoción ha terminado!";
        clearInterval(intervalo); // Detiene el contador
        return;
    }

    // Calcular días, horas, minutos y segundos restantes
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Actualizar el contenido del contador
    document.getElementById('contador').innerText = 
        `${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
}

// Actualizar el contador cada segundo
const intervalo = setInterval(actualizarContador, 1000);

// Inicializar el contador
actualizarContador();


