let fruta = document.getElementById('fruta_id')
let qtd = document.getElementById('qtd_id')
  
function validarCampos(){
    let fruta = document.getElementById('fruta_id').value;
    let qtd = document.getElementById('qtd_id').value;

    if(!fruta || !qtd){
        alert('Preencha todos os campos!')
        return;
    } adicionarFruta({fruta,qtd})
}

function adicionarFruta(objetoFrutas){

    let listaFrutas = JSON.parse(localStorage.getItem('listaFrutas')) 
    
    if(!listaFrutas){
        listaFrutas = []
    }

    listaFrutas = [
        ...listaFrutas,
        objetoFrutas
    ]
        
    localStorage.setItem("listaFrutas",JSON.stringify(listaFrutas))
    
    console.log("listaFrutas",listaFrutas);
    console.log('objetoFrutas',objetoFrutas);

}

const mostrarFruta = function(){
    let paragrafoFrutas = document.getElementById('paragrafoFrutas')
    paragrafoFrutas.innerHTML = ""

    let fruta = JSON.parse(localStorage.getItem('listaFrutas'))
    console.log("fruta",fruta);
    if(fruta != null){
        for(i = 0; i < fruta.length; i++){
            paragrafoFrutas.innerHTML += "Fruta: " + fruta[i].fruta + "<br>Quantidade: " + fruta[i].qtd + '<br><br>'
        }
    } else {
        paragrafoFrutas.innerHTML = "Você ainda não adicionou nenhuma fruta."
    }
}

mostrarFruta()