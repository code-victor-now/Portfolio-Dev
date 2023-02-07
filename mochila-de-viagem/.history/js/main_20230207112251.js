const form = document.getElementById("novoItem")

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    console.log(evento.target[0].value)
    console.log(evento)
})
