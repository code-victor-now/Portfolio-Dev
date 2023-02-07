const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")


somar.addEventListener("click", (evento) => {
    braco.valeu = parseInt(braco.value) + 1
}
