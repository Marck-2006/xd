// Este archivo contiene la lógica en JavaScript para validar respuestas y mostrar mensajes.

const respuestasCorrectas = ['Bismi', 'bismi', 'alcohol', 'Alcohol'];
const pistas = ['Es una broma interna entre nosotros.', 'Es un término cariñoso.', 'Es un título de nobleza.'];
function comprobarRespuesta() {
    const inputRespuesta = document.getElementById('respuesta').value.toLowerCase();
    const mensaje = document.getElementById('mensaje');
    const imagenCorrecta = document.getElementById('imagen-correcta');
    
    if (respuestasCorrectas.includes(inputRespuesta)) {
        mensaje.textContent = '¡Correcto!';
        mensaje.style.color = 'green';
        imagenCorrecta.style.display = 'block';
    } else {
        const pistaAleatoria = pistas[Math.floor(Math.random() * pistas.length)];
        mensaje.textContent = 'Sigue intentando. Pista: ' + pistaAleatoria;
        mensaje.style.color = 'red';
        imagenCorrecta.style.display = 'none';
    }
}

document.getElementById('comprobar').addEventListener('click', comprobarRespuesta);