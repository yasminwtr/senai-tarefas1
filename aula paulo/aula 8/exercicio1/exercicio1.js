const verificar = function(opcao) {

    switch(opcao){
        case 'morango':
            alert("Fruta selecionada: Morango \nCódigo de origem: 1 \nProcedência: Sul");
            break
        case 'mamao':
            alert("Fruta selecionada: Mamão \nCódigo de origem: 2 \nProcedência: Norte");
            break
        case 'kiwi':
            alert("Fruta selecionada: Kiwi \nCódigo de origem: 3 \nProcedência: Leste");
            break
        case 'melancia':
            alert("Fruta selecionada: Melancia \nCódigo de origem: 4 \nProcedência: Oeste");
            break
        case 'banana':
            alert("Fruta selecionada: Banana \nCódigo de origem: 5 \nProcedência: Nordeste");
            break
        case 'amora':
            alert("Fruta selecionada: Amora \nCódigo de origem: 6 \nProcedência: Sudeste");
            break
        case 'ameixa':
            alert("Fruta selecionada: Ameixa \nCódigo de origem: 7 \nProcedência: Centro-oeste");
            break
        default:
            alert("Nenhuma fruta foi selecionada.");
            break
    }
}