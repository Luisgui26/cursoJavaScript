
function calcular(){
    var txtv = document.getElementById('txtvel')
    var res = document.getElementById('res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade é de ${vel}km/h</p>`
    if (vel > 60) {
        res.innerHTML += `Você está multado`
    }
    res.innerHTML = `<p>Dirija sempre com sinto de segurança!</p>`
}