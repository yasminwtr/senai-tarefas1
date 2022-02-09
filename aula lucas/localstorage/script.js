let nome = document.getElementById('id_nome').value;
let idade = document.getElementById('id_idade').value;
let nomePesquisa = document.getElementById('id_pesquisa').value;

let vetorNomes = []
let vetorIdades = []

function salvaDados(){
    vetorNomes = JSON.parse(localStorage.getItem('idades'))
    vetorIdades = JSON.parse(localStorage.getItem('nomes'))

    if(vetorNomes !== null){
    let vetorNomes = []
    let vetorIdades = []

    localStorage.setItem('nomes', JSON.stringify(vetorNomes))
    localStorage.setItem('idades', JSON.stringify(vetorIdades))

    } else {
        vetorNomes.push(nome.value)
        vetorIdades.push(idade.value)
    
        localStorage.setItem('nomes', JSON.stringify(vetorNomes))
        localStorage.setItem('idades', JSON.stringify(vetorIdades))
    }

    alert("Dados salvos no Localstorage")
}

function pesquisa(){
    vetorNomes = JSON.parse(localStorage.getItem('idades'))
    vetorIdades = JSON.parse(localStorage.getItem('nomes'))

    for(i = 0; i < vetorNomes.length; i++){
        if(nomePesquisa.value == vetorNomes[i]){
            alert('o nome existe na base de dados')
        }

    }
}