let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let resultado = numeros.filter(filtrarNumeros)

function filtrarNumeros(numeros){
    return numeros <= 5;
}

console.log(resultado);
