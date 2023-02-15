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

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Parabéns! Você é um paranormal!</h2>
            <h3>O número secreto é o ${numeroSecreto}</h3>
        ` 
    } else if (numero < numeroSecreto) {
    elementoChute.innerHTML += `
    <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
    `
    } else {
    elementoChute.innerHTML += `
    <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
    `
    }

}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorLimite(numero) {
    return numero > maiorValor || numero < menorValor
}

recognition.addEventListener('end', () => recognition.start())
