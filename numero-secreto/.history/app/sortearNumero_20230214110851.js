const menorValor = 1
const maiorValor = 100
const numeroSecreto = gerarNumeroAleatorio()
const elementoMenorValor =  
const elementoMaiorValor =

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('Número secreto: ' + numeroSecreto);

