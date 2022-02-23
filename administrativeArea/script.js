function listarCadastros() {
  let usuariosCadastrados = JSON.parse(localStorage.getItem("dadosCadastros"))
  let htmlListString = `<table>
              <thead>
                <tr class="row100 head">
                  <th class="cell100 column1">#</th>
                  <th class="cell100 column2">Usuário</th>
                  <th class="cell100 column6">Senha</th>
                  <th class="cell100 column6">Ação</th>
                </tr>
              </thead>
              <tbody id="listarCadastro">
              </tbody>
              </table>`

  if (usuariosCadastrados == null){
    htmlListString = ""
    Swal.fire({
      title: 'Ainda não há contas cadastradas.',
      showClass: {
      popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
      }
  })

  } else {
     for(i = 0; i < usuariosCadastrados.length; i++) {

        htmlListString += `<tbody>
        <tr class="row100 body">
            <td class="cell100 column1">${i}</td>
            <td class="cell100 column2">${usuariosCadastrados[i].username}</td>
            <td class="cell100 column5">${usuariosCadastrados[i].password}</td>
            <td class="cell100 column1"><button class='btn btn-danger' onclick="removeItemById(${i})">Excluir</button></td>
        </tr>
    </tbody>`

     }
  }

  document.getElementById('listagem').innerHTML = htmlListString
}


function listarPontosColeta() {
  let collectionPoint = JSON.parse(localStorage.getItem("collectionPoint"))
  let htmlListString = `<table>
              <thead>
                <tr class="row100 head">
                  <th class="cell100 column1">#</th>
                  <th class="cell100 column2">Localização</th>
                  <th class="cell100 column6">Lixos aceitos</th>
                  <th class="cell100 column6">Ação</th>
                </tr>
              </thead>
              <tbody id="listarCadastro">
              </tbody>
              </table>`

  if (collectionPoint == null){
      htmlListString = ""
      Swal.fire({
        title: 'Ainda não há pontos de coleta cadastrados.',
        showClass: {
        popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
        }
    })

  } else {
     for(i = 0; i < collectionPoint.length; i++) {

        htmlListString += `<tbody>
        <tr class="row100 body">
            <td class="cell100 column1">${i}</td>
            <td class="cell100 column2">${collectionPoint[i].cep}, ${collectionPoint[i].localidade}, ${collectionPoint[i].bairro},\n${collectionPoint[i].logradouro}, ${collectionPoint[i].numero}, ${collectionPoint[i].complemento}</td>
            <td class="cell100 column5">${collectionPoint[i].acceptedTrash}</td>
            <td class="cell100 column1"><button class='btn btn-danger' onclick="">Excluir</button></td>
        </tr>
    </tbody>`

     }
  }

  document.getElementById('listagem').innerHTML = htmlListString
}

function listarEstoquesLixo() {
  let stockPoints = JSON.parse(localStorage.getItem("stockPoints"))
  let htmlListString = `<table>
              <thead>
                <tr class="row100 head">
                  <th class="cell100 column1">#</th>
                  <th class="cell100 column2">Localização</th>
                  <th class="cell100 column6">Descarte</th>
                  <th class="cell100 column6">Ação</th>
                </tr>
              </thead>
              <tbody id="listarCadastro">
              </tbody>
              </table>`

  if (stockPoints == null){
    htmlListString = ""
    Swal.fire({
      title: 'Ainda não há estoques de lixo cadastrados.',
      showClass: {
      popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
      }
  })

  } else {
     for(i = 0; i < stockPoints.length; i++) {

        htmlListString += `<tbody>
        <tr class="row100 body">
            <td class="cell100 column1">${i}</td>
            <td class="cell100 column2">${stockPoints[i].cep}, ${stockPoints[i].localidade}, ${stockPoints[i].bairro},\n${stockPoints[i].logradouro}, ${stockPoints[i].numero}, ${stockPoints[i].complemento}</td>
            <td class="cell100 column5">${newPointItems[i].trashType}</td>
            <td class="cell100 column1"><button class='btn btn-danger' onclick="">Excluir</button></td>
        </tr>
    </tbody>`

     }
  }

  document.getElementById('listagem').innerHTML = htmlListString
}


//  function removeItemById(id) {
//      let usuariosCadastrados = JSON.parse(localStorage.getItem("dadosCadastros"))
    
//      let index = usuariosCadastrados.find(function(usuariosCadastrados){
//         return usuariosCadastrados.id === id 
//      });
//      usuariosCadastrados.splice(index, 1)
//      localStorage.setItem("dadosCadastros", JSON.stringify(usuariosCadastrados)) 
//      listarCadastros()
//    }
  
//    listarCadastros()