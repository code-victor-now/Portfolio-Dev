const elementoChute

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const numeroFalado = onSpeak

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.transcript[0][0].transcript
    exibeChuteNaTela
}

const elementoNumeroFalado = document.getElementById('numero-falado')
elementoNumeroFalado.innerHTML = onSpeak
