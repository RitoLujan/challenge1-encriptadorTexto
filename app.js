// Variables
let cadenaLetras = [];
let cadenaLetrasAux = [];
let textoParaTrabajar = '';
let letra = '';
let textoConvertido = '';

// Funcion para encriptar el texto del textArea.
function encriptarTexto() {

    textoParaTrabajar = document.getElementById('texto').value;
    cadenaLetras = textoParaTrabajar.split('');

    for (let index = 0; index < cadenaLetras.length; index++) {
        letra = cadenaLetras[index];
        if (letra === 'a') {
            letra = 'ai';
            cadenaLetrasAux.push(letra);
        } else if (letra === 'e') {
            letra = 'enter';
            cadenaLetrasAux.push(letra)
        } else if (letra === 'i') {
            letra = 'imes';
            cadenaLetrasAux.push(letra)
        } else if (letra === 'o') {
            letra = 'ober';
            cadenaLetrasAux.push(letra)
        } else if (letra === 'u') {
            letra = 'ufat';
            cadenaLetrasAux.push(letra)
        } else {
            cadenaLetrasAux.push(letra);
        }
    }
    textoConvertido = cadenaLetrasAux.join('');
    asignarTextoElemento('respuesta', textoConvertido);

    cadenaLetras = [];
    cadenaLetrasAux = [];
    return;
}

function desencriptarTexto() {
    textoEncriptado = document.getElementById('texto').value;
    textoDesencriptado = textoEncriptado.replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    asignarTextoElemento('respuesta', textoDesencriptado);
    return;
}


function asignarTextoElemento(elemento, texto) {
    let imagenBuscar = document.getElementById('imagen');
    imagenBuscar.style.display = texto.trim() === '' ? 'block' : 'none';

    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    elementoHTML.style.top = '15%';
    elementoHTML.style.left = '5%';
    elementoHTML.style.fontSize = '32px';
    elementoHTML.style.color = 'white';
    elementoHTML.style.fontWeight = 'bold';
    elementoHTML.style.textAlign = 'left';

    let copiar = document.getElementById('copy');
    copiar.style.visibility = 'visible';
    return;
}

function copiarTexto() {
    let respuestaLabel = document.getElementById('respuesta');
    let textoParaCopiar = respuestaLabel.innerText;
    navigator.clipboard.writeText(textoParaCopiar)
}

function ensamblado() {
    let botonCopiar = document.getElementById('copy');
    botonCopiar.addEventListener('click', copiarTexto);
}

document.addEventListener('DOMContentLoaded', ensamblado);
document.getElementById('encriptar').addEventListener('click', encriptarTexto);
document.getElementById('desencriptar').addEventListener('click', desencriptarTexto);