window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const numeroFalado = onSpeak

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
  e =  e.transcript[0][0].transcript
}

const elementoNumeroFalado = document.getElementById('numero-falado')
elementoNumeroFalado.innerHTML = onSpeak
