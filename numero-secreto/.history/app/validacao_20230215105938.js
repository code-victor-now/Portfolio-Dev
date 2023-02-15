function verificaValor(chute) {
    const numero = +chute

    if(chuteInvalido(numero)) {
        elementoChute.innerHTML += `<div>Você precisa dizer um número entre ${menorValor} e ${maiorValor}!</div>`
        return
    }

    if (numeroMaiorOuMenorLimite(numero)) {
        elementoChute.innerHTML += `<div>Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto)
        document.body.innerHTML = `
            <h2>Parabéns! Você é um paranormal!</h2>
            <h3>O número secreto é o ${numeroSecreto}</h3>
        ` 
} else if (numero > numeroSecreto) {
    elementoChute.innerHTML = ``
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorLimite(numero) {
    return numero > maiorValor || numero < menorValor
}
