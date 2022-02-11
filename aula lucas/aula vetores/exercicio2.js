// 2) Desenvolva um programa que o usuário digite 10 números positivos e inteiros, ao final  mostre o valor que
// resultado do somatório da primeira metade dos números menos o somatório da segunda metade.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

soma1 = 0
soma2 = 0

for(i = 0; i < 5; i++){
    soma1 = soma1 + numeros[i]
}

for(i = 0; i > 5; i++){
    soma2 = soma2 + numeros[i]
}

let sub = soma1 - soma2
console.log(sub);

