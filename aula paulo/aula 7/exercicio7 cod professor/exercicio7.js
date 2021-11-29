let select = document.querySelector('select')
let paragrafo = document.querySelector('#paragrafo')

select.addEventListener('change', setProduto)

    function setProduto(){
        let opcao = select.value

        if (opcao === 'bolo'){
            paragrafo.textContent = "Bolo de chocolate com recheio de brigadeiro com morangos. \n Valor: R$ 50,00"
        } else if (opcao === 'brownie'){
            paragrafo.textContent = "Notebook: \nModelo: Notebook Acer 15,6 I5-1035G1 8GB 256GB \nPreço: 4.199,90 \nQuantidade em estoque: 50"
        } else if (opcao === 'torta'){
            paragrafo.textContent = "Celular: \n Modelo: Galaxy A32 128GB \nPreço: 1.619,10 \nQuantidade em estoque: 12"
        } else {
            paragrafo.textContent = ""
        }

    }