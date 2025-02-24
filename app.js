let amigos = [];
let resultadoSorteo = document.getElementById('resultado');

function agregarAmigo() {
    const nombreAmigo = document.getElementById('amigo').value.trim();

    if (!nombreAmigo) {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    amigos.push(nombreAmigo);
    actualizarListaAmigos();
    document.getElementById('amigo').value = '';
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
}

function sortearAmigo() {
    if (!amigos.length) {
        alert('Debes agregar al menos un amigo para realizar el sorteo.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    resultadoSorteo.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}

function reiniciarJuego() {
    amigos = [];
    actualizarListaAmigos();
    resultadoSorteo.innerHTML = '';
    document.getElementById('amigo').value = '';
}