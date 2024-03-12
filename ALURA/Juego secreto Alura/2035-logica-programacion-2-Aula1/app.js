let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    // console.log(intentos);
    // console.log(numeroSecreto);

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearón todos los números posibles')
        limpiarCaja();
        console.log(listaNumerosSorteados);



    } else {
        if (numeroDeUsuario === numeroSecreto) {
            asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos == 1 ? " vez" : " veces"} `);
            document.getElementById('reiniciar').removeAttribute('disabled');
            console.log(listaNumerosSorteados);

        } else {
            if (numeroDeUsuario > numeroSecreto) {
                asignarTextoElemento('p', 'El número secreto es menor');
            } else {
                asignarTextoElemento('p', 'El número secreto es mayor');
            }
            intentos++;
            limpiarCaja();
        }
        return;
    }

}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log('el número generado es ' + numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }


}

// console.log(listaNumerosSorteados);



function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();

    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')

}

condicionesIniciales();