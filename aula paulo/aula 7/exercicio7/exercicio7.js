let select = document.querySelector('#produto')
        let paragrafo = document.querySelector('p')

        select.addEventListener('change', setProduto)

        function setProduto(){
            let opcao = select.value
            console.log(opcao);

            if (opcao === 'televisao'){
                paragrafo.textContent = "Televisão: \nModelo: Samsung Smart TV 85 Neo QLED 4K \nPreço: 26.999,00 \nQuantidade em estoque: 23"
            } else if (opcao === 'notebook'){
                paragrafo.textContent = "Notebook: \nModelo: Notebook Acer 15,6 I5-1035G1 8GB 256GB \nPreço: 4.199,90 \nQuantidade em estoque: 50"
            } else if (opcao === 'celular'){
                paragrafo.textContent = "Celular: \n Modelo: Galaxy A32 128GB \nPreço: 1.619,10 \nQuantidade em estoque: 12"
            } else {
                paragrafo.textContent = " "
            }
        }