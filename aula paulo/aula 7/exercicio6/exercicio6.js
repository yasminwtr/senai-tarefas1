const calcular = function(){
    let valorHora = document.getElementById('valor').value
    let qtdeHoras = document.getElementById('horas').value
    let sb = valorHora * qtdeHoras

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
     document.getElementById('salario').value = sb.toFixed(2)
     document.getElementById('irrf').value = irrf.toFixed(2)
     document.getElementById('salarioL').value = sl.toFixed(2)
    }

    const limpar = function(){
        document.getElementById('valor').value = ""
        document.getElementById('horas').value = ""
        document.getElementById('salario').value = ""
        document.getElementById('irrf').value = ""
        document.getElementById('salarioL').value = ""
    }