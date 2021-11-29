const calcular = function(){
    let valorHora = document.getElementById('valor').value
    let qtde = document.getElementById('qtde').value
    let sb = valorHora * qtde

    let irrf = 0
     if (sb >= 1903.99 && sb <= 2826.65){
        irrf = sb * 0.075
     } else if (sb >= 2826.66 && sb <= 3751.05){
        irrf = sb * 0.15
     } else if (sb >= 3751.06 && sb <= 4664.68){
        irrf = sb * 0.225
     } else {
        irrf = sb * 0.275
     }
     let sl = sb - irrf
     document.getElementById('sb').value = sb.toFixed(2)
     document.getElementById('irrf').value = irrf.toFixed(2)
     document.getElementById('sl').value = sl.toFixed(2)
}

//console.log(calcularSalario())
