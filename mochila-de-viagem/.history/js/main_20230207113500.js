const form = document.getElementById("novoItem")

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    console.log(evento.elements['nome'].value)
    console.log(evento.elements['quantidades'].value )
})
