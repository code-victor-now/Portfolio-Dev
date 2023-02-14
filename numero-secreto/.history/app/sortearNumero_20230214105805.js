const numeroSecreto = gerarNumeroAleatorio();

gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100);
}

console.log(numeroSecreto)