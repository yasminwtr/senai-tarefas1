let nome, classe
let hp, mp, tp
let media = 0
let nivel = ''

nome = prompt("Digite o nome: ")
classe = prompt("Digite o nome: ")
hp = Number(prompt("Digite o nome: "))
mp = Number(prompt("Digite o nome: "))
tp = Number(prompt("Digite o nome: "))

media = hp + mp + tp / 3

if(media < 40){
    alert("Você é um " + classe + "e o seu nível é iniciante.")
} else if(media >= 40 && media < 80){
    alert("Você é um " + classe + "e o seu nível é intermediário.")
} else {
    alert("Você é um " + classe + "e o seu nível é intermediário.")
}