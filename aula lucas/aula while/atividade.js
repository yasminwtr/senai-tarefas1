// pedrinho mede 1,80m e robertinho 1,65m. a cada ano pedrinho cresce 1cm e robertinho cresce 3cm. em quantos
// anos robertinho sera mais alto que pedrinho?

let alturaPedrinho = 1.80
let alturaRobertinho = 1.65
let anos = 0

while (alturaRobertinho < alturaPedrinho){

    alturaPedrinho += 0.01
    alturaRobertinho = alturaRobertinho + 0.03
    anos++

    console.log('Ano: ' + anos + '\nPedrinho: ' + alturaPedrinho + '\nRobertinho: ' + alturaRobertinho);

}
console.log(`Robertinho sera mais alto que Pedrinho em ${anos} anos`);