var agora = new Date()
var hora = agora.getHours
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 4){
    console.log('Boa Madrugada!')
} else if(hora <= 18 && hora > 12){
    console.log('Boa Tarde!')
} else if(hora >= 4 && hora <=12){
    console.log('Bom dia!')
} else{
    console.log("Boa noite!")
}
