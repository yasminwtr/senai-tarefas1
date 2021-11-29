let n1 = Math.floor(Math.random() * 10)
let n2 = Math.floor(Math.random() * 10)
let n3 = Math.floor(Math.random() * 10)
let media = (n1 + n2 + n3) / 3
console.log("Notas:", n1.toFixed(2), n2.toFixed(2), n3.toFixed(2));

if(media >= 7){
    console.log("Aluno aprovado com média:", media.toFixed(2))
} else if (media >= 3){
    console.log("Aluno em recuperação com média:", media.toFixed(2));
} else {
    console.log("Aluno reprovado com média:", media.toFixed(2));
}