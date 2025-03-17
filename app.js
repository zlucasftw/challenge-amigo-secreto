// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let nome = document.querySelector('.input-name').value;

    const tiposInvalidos = [null, undefined, '', ' '];
    if (tiposInvalidos.includes(nome)) {
        alert('Por favor, insira um nome válido!');
        return;
    }
    amigos.push(nome);

    let listaNomes  = document.querySelector('.name-list');
    let nomesLista = document.createElement('li');
    nomesLista.innerHTML = nome;
    listaNomes.appendChild(nomesLista);

}



function sortearAmigo() {

    if (amigos.length  <= 1) {
        alert('Insira mais que 1 (um) amigo na lista para o sorteio!');
        return;
    }

    let numeroSorteado = parseInt((Math.random() * amigos.length) + 1);
    
    const resultado = document.querySelector('.result-list');
    resultado.innerHTML = amigos[numeroSorteado - 1];

}
