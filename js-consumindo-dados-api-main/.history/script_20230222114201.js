async function buscaEndereco() {
    try{   
    var consultaCep = await fetch ('https://viacep.com.br/ws/01001250/json/')
    var consultaCepConvertido = await consultaCep.json();
    if(consultaCepConvertido.erro) {
        throw Error('CEP Inválido');
    }
    console.log(consultaCepConvertido);
} catch(erro) {
    console.log(erro);
}
}
buscaEndereco();