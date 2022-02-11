// feita pelo prof

let somaCartas1 = 0
let somaCartas2 = 0

let cartaValor

let totalCartas1 = 0
let totalCartas2 = 0

while(totalCartas1 != 5 && totalCartas2 != 5){

    cartaValor = Number(prompt("Jogador 1, digite sua carta:"))
    somaCartas1 += cartaValor

    cartaValor = Number(prompt("Jogador 2, digite sua carta:"))
    somaCartas2 += cartaValor

    totalCartas1++
    totalCartas2++
}

if(somaCartas1 > somaCartas2){
    alert("jogador 1 venceu")
}