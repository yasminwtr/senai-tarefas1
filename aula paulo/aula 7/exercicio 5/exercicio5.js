const calcular = function(){
    let pA = document.getElementById('pA').value
    let pB = document.getElementById('pB').value
    let salario = document.getElementById('salario').value
    let gratificacao = parseFloat(salario) + parseFloat(salario * 0.2)

    let total = (pA * 50) + (pB * 60)
    let falta = 10000 - total

    if(total >= 10000){
        msg = "Parabéns! Você ganhou uma gratificação de 20% no salário. Seu salário de " + salario + " reais foi para " + gratificacao + " reais."
    } else {
        msg = "Sinto muito, ainda faltam " + falta + " reais em venda para conseguir a gratificação."
    }
    document.getElementById('resultado').value = msg
}