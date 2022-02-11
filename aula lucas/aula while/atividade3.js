// criar um programa que simule um jogo de cartas, onde inicialmente deve-se perguntar o nome do jogador 1 e o
// nome do jogador 2. cada jogador tem 5 cartas para jogar. incia pelo jogador 1, em seguida o jogador 2, e
// assim segue alternando até que cada jogador tenha "jogado" suas 5 cartas. os valores das cartas devem ser
// digitados (somente valores entre 1 e 13). vence o jogador que tiver a maior soma. ao final mostrar o nome do
// jogador vencedor e a sua soma.

let jogador1 = prompt("Digite o nome do jogador 1")
let jogador2 = prompt("Digite o nome do jogador 2")

let cartas1 = 0
let cartas2 = 0

while (cartas1 < 5 && cartas2 < 5){
    receberCartas = Number(prompt("Carta 1. Digite um valor entre 1 a 13."))
    receberCartas2 = Number(prompt("Carta 2. Digite um valor entre 1 a 13."))

    receberCartas += receberCartas
    receberCartas2 += receberCartas2

    cartas1++
    cartas2++
}

alert(`Jogador ${jogador1} terminou o jogo com ${receberCartas} pontos. \nJogador ${jogador2} terminou o jogo com ${receberCartas2} pontos.`)