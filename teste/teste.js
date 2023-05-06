let nome = prompt('Qual é o seu nome?')

let nada = document.getElementById("nada");

let pergunta = prompt('Escreva sim')

if (pergunta.toLowerCase() == 'sim'){
    nada.innerHTML = `Você sabe escrever, ${nome}, parabéns`
} else{
    nada.innerHTML = `Você não sabe escrever, ${nome}?`
}



