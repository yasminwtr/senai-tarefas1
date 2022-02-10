let nome = document.getElementById("id_nome")
let idade = document.getElementById("id_idade")

let nomePesquisa = document.getElementById("id_pesquisa")

let vetorNomes = []
let vetorIdades = []

function SalvaDados(){

    vetorNomes = JSON.parse(localStorage.getItem('nomes'))
    vetorIdades = JSON.parse(localStorage.getItem('idades'))
    
    if(vetorNomes == null){

        vetorNomes = []
        vetorIdades = []

        vetorNomes.push(nome.value)
        vetorIdades.push(idade.value)

        localStorage.setItem('nomes', JSON.stringify(vetorNomes))
        localStorage.setItem('idades', JSON.stringify(vetorIdades))

    }else{
       
        vetorNomes.push(nome.value)
        vetorIdades.push(idade.value)

        localStorage.setItem('nomes', JSON.stringify(vetorNomes))
        localStorage.setItem('idades', JSON.stringify(vetorIdades))

    }

    alert("Dados salvos no Local Storage! :D")

}

function Pesquisa(){

    vetorNomes = JSON.parse(localStorage.getItem('nomes'))
    vetorIdades = JSON.parse(localStorage.getItem('idades'))

    for(i=0; i < vetorNomes.length; i++){

        if(nomePesquisa.value == vetorNomes[i]){

            alert("Achooooooou :)")

        }

    }

}