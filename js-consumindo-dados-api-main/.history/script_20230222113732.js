async function buscaEndereco() {
    try{

    
    var consultaCep = await fetch ('https://viacep.com.br/ws/01001000/json/')
    var consultaCepConvertido = await consultaCep.json();
    console.log(consultaCepConvertido);
} catch(erro) {
    console.log(erro);
}
}
buscaEndereco();