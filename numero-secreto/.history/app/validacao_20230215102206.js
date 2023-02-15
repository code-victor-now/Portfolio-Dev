function verificaValor(chute) {
    const numero = +chute

    if(chuteInvalido(numero)) {
        console.log('Valor inválido!')
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
