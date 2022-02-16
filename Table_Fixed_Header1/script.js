// function excluirCadastros(idExcluir) {
//      usuariosCadastrados = JSON.parse(usuariosCadastrados);
//      usuariosCadastrados.filter(e => { e.id != idExcluir })
// }

function listarCadastros() {
    let usuariosCadastrados = JSON.parse(localStorage.getItem("dadosCadastros"))
    let htmlListString = ""
    for(i = 0; i < usuariosCadastrados.length; i++) {
        htmlListString += 
            `<tr class="row100 body">
        <td class="cell100 column1">${[i]}</td>
        <td class="cell100 column3">${usuariosCadastrados[i].username}</td>
        <td class="cell100 column3">${usuariosCadastrados[i].password}</td>
        <td class="cell100 column4"><button class='btn btn-danger' onclick="excluirCadastros(idExcluir)">Excluir</button></td>
            </tr>`
    }

    console.log(htmlListString);

    document.getElementById('listarCadastro').innerHTML = htmlListString
}

function removeItemById(id) {
    let usuariosCadastrados = JSON.parse(localStorage.getItem("dadosCadastros"))
    
    let index = usuariosCadastrados.find(function(usuariosCadastrados){
        return usuariosCadastrados.id === id 
    });
    usuariosCadastrados.splice(index, 1)
    localStorage.setItem("dadosCadastros", JSON.stringify(usuariosCadastrados)) 
    listarCadastros()
  }
  
  listarCadastros()