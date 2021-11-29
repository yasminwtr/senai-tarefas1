let n = 20
for(let i = 0; i < n; i++){

let nota1 = Math.random() * 10
let nota2 = Math.random() * 10
let nota3 = Math.random() * 10
let media = (nota1 + nota2 + nota3) / 3

console.log("cálculo das médias de " + (i + 1));
console.log("nota 1: ", nota1.toFixed(2));
console.log("nota 2: ", nota2.toFixed(2));
console.log("nota 3: ", nota3.toFixed(2));
console.log("média: ", media.toFixed(2));
console.log("");

}