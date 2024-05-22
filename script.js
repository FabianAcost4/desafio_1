
const respuestasCorrectas = ['2', '3', '1', '2', '4'];


const respuestasSeleccionadas = [];

function guardarRespuesta(pregunta, opcion) {
    respuestasSeleccionadas[pregunta] = opcion;
}


function contarRespuestasCorrectas() {
    let correctas = 0;
    for (let i = 0; i < respuestasCorrectas.length; i++) {
        if (respuestasSeleccionadas[i] === respuestasCorrectas[i]) {
            correctas++;
        }
    }
    return correctas;
}


function mostrarResultado() {
    const totalCorrectas = contarRespuestasCorrectas();
    console.log('Respuestas correctas: ' + totalCorrectas);
}