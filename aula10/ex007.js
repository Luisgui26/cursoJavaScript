function somar() {
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.querySelector('input#tx')
    var res = document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = s
}