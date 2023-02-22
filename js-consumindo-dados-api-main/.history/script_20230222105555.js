var consultaCep = fetch ('https://viacep.com.br/ws/0100100/json/')
.then(resposta => resposta.json())
.then(r => console.log(r))
.catch(m => console.log(m));

console.log(consultaCep);