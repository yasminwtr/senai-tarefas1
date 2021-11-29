
const quiz1 = function(opcao){
    switch(opcao){
        case '1':
            document.getElementById('resp').innerHTML = "Parabéns, você é um galinheiro!"
            document.getElementById('img1').src = "http://pa1.narvii.com/6585/72c5c64aa480eef7b066a2d2eda89ba01471388f_00.gif";

            break
        case '2':
            document.getElementById('resp').innerHTML = "Sinto muito, você é uma decepção para as galinhas. \n A resposta correta é 13 segundos."
            document.getElementById('img1').src = "https://thumbs.gfycat.com/OddballGranularGroundbeetle-size_restricted.gif";
            break
    }
}

const quiz2 = function(opcao){
    
    switch(opcao){
        case '1':
            document.getElementById('resp2').innerHTML = "Parabéns, resposta correta!"
            document.getElementById('img2').src = "https://i.pinimg.com/originals/08/b7/88/08b788551bf7ca7d3d6fe3dfb9ab96d2.gif";
            break
        case '2':
            document.getElementById('resp2').innerHTML = "Sinto muito, você errou a resposta. \n A resposta correta é 206 ossos."
            document.getElementById('img2').src = "imgs/esqueleto2.gif";
            break
    }
}

const quiz3 = function(opcao){   
    switch(opcao){
        case '1':
            document.getElementById('resp3').innerHTML = "Parabéns, resposta correta!"
            img5.src = "https://thumbs.gfycat.com/BiodegradableCostlyAlbatross-max-1mb.gif";
            document.getElementById('img3').appendChild(img5);
            break
        case '2':
            document.getElementById('resp3').innerHTML = "Sinto muito, você errou a resposta. \n A resposta correta é Girafa."
            document.getElementById('img3').src = "https://media4.giphy.com/media/gAdxI2AjB3cRy/giphy.gif";
            break
    }
}

const quiz4 = function(opcao){

    switch(opcao){
        case '1':
            document.getElementById('resp4').innerHTML = "Parabéns, resposta correta!"
            document.getElementById('img4').src = "https://www.cnet.com/a/img/iujDKly1ZIVIE4emTy-hHLiHn90=/1200x675/2019/01/04/56c26f38-68bb-4f2e-91fd-f974b858b510/neil-armtstron-hi.jpg";
            break
        case '2':
            document.getElementById('resp4').innerHTML = "Sinto muito, você errou a resposta. \n A resposta correta é Neil Armstrong."
            document.getElementById('img4').src = "https://www.cnet.com/a/img/iujDKly1ZIVIE4emTy-hHLiHn90=/1200x675/2019/01/04/56c26f38-68bb-4f2e-91fd-f974b858b510/neil-armtstron-hi.jpg";
            break
        case '3':
            document.getElementById('resp4').innerHTML = "Infelizmente o nosso querido Shrek não foi o primeiro a chegar a lua, e sim Neil Armstrong."
            document.getElementById('img4').src = "https://c.tenor.com/L1SOy0Q8O7gAAAAM/eyebrow-raise-shrek.gif";
            break
        case '4':
            document.getElementById('resp4').innerHTML = "Nesse caso apenas se fosse o Buzz Lightyear. \n A resposta correta é Neil Armstrong."
            document.getElementById('img4').src = "https://i.kym-cdn.com/photos/images/newsfeed/001/593/883/308.gif";
    }
}

const quiz5 = function(opcao){

    switch(opcao){
        case '1':
            document.getElementById('resp5').innerHTML = "Parabéns, resposta correta!"
            document.getElementById('img5').src = "imgs/shrek.jpg";
            break
        case '2':
            document.getElementById('resp5').innerHTML = "Sinto muito, você não merece ir para Tão Tão Distante. \n A resposta correta é sim!"
            document.getElementById('img5').src = "imgs/realoufeiki.jpg";
            break
    }
}

// funçao botoes

window.onload = function(){
    let lista = document.getElementsByTagName('input');
        for (let i = 0; i < lista.length; i++) {
                let input = lista[i];
    
        if (input.className == 'respostaUnica') {
            input.onchange = function() {
                let nome = this.name;
                let outros = document.getElementsByName(nome);
    
        for (let j = 0; j < outros.length; j++) {
                let outro = outros[j];
                
        if (outro != this) outro.disabled = true;
                    }
                }
            }
        }
    }