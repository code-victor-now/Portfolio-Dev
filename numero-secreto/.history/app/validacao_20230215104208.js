function verificaValor(chute) {
    const numero = +chute

    if(chuteInvalido(numero)) {
        elementoChute.innerHTML += `<div>Você precisa dizer um número entre ${menorValor} e ${maiorValor}!</div>`
    }

    if (numeroMaiorOuMenorLimite(numero)) {
        elementoChute.innerHTML += `<div>Fale um núemro entre ${menorValor} e ${maiorValor}</div>`
        
    }

    if (numero = numeroSecreto)
        elementoChute.innerHTML =+ `<div>Você acertou o número secreto! Parabéns!</div>` 
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorLimite(numero) {
    return numero > maiorValor || numero < menorValor
}
