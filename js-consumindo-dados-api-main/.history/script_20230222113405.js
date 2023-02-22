async function buscaEndereco() {
var consultaCep = await fetch ('https://viacep.com.br/ws/01001000/json/')
    var consultaCepConvertido = await consultaCep.json();
    console.log(consultaCepConvertido);
}
buscaEndereco();