const verificar = function(opcao){

    switch(opcao){
        case '1':
            alert("Classificação: Alimento não-perecível")
            break
        case '2':
            alert("Classificação: Alimento perecível")
            break
        case '3':
            alert("Classificação: Vestuário")
            break
        case '4':
            alert("Classificação: Higiene pessoal")
            break
        case '5':
            alert("Classificação: Limpeza e utensílios domésticos")
            break
        default:
            alert("Nenhum produto foi selecionado.")
            break
    }
}