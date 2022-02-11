// você é um alpinista e pretende escalar o monte everest que possui 8.822m. sua subida parte do acampamento
// base que fica a 4.530m. a cada dia de escalada, deve ser digitado a altura subida naquela dia. caso você
// alcance o topo em menos de 8 dias mostrar a quantidade de dias. caso alcance 8 dias e não tenha chegado ao
// topo, mostrar mensagem "voltar pois faltará oxigênio"

let monteEverest = 8822
let base = 4530

let distanciaTotal = 4292
let distanciaPercorrida = 0

let diasTotal = 8
let diasPercorridos = 0

while(distanciaPercorrida < distanciaTotal){

    distanciaDia = Number(prompt("Digite a distancia do dia"))
    distanciaPercorrida += distanciaDia
    diasPercorridos++

    if(diasPercorridos == diasTotal){
        
        alert("Você deve voltar por falta de oxigênio")
    
    }
    
    if(distanciaPercorrida >= distanciaTotal){
        alert(`Você alcançou em ${diasPercorridos} dias percorridos`)
    }
}