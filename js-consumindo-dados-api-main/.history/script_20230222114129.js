async function buscaEndereco() {
    try{   
    var consultaCep = await fetch ('https://viacep.com.br/ws/0100100/json/')
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