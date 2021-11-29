let opcao = 'morango'
let resultado = "Você selecionou a fruta "

switch(opcao){
    case 'amora':
        resultado += opcao
        break
    case 'manga':
        resultado += opcao
        break
    case 'uva':
        resultado += opcao
        break
    case 'morango':
        resultado += opcao
        break
    default:
        resultado += "Nenhuma fruta foi selecionada."
        break
}

console.log(resultado);