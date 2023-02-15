function verificaValor(chute) {
    const numero = +chute

    if(chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Você precisa dizer um número!</div>'
    }

    if (numeroMaiorOuMenorLimite(numero)) {
        console.log(`Valor Inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}`)
        
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorLimite(numero) {
    return numero > maiorValor || numero < menorValor
}
