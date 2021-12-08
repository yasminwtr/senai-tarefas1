let contaCadastrada = {}
const usuario = document.getElementById('usuario')
const email = document.getElementById('email')
const senha = documet.getElementById('senha')

const cadastrar = function(){
    contaCadastrada = {
        usuario: usuario.value,
        email: email.value,
        senha: senha.value,
    }

    localStorage.setItem('contaCadastrada', JSON.stringify(contaCadastrada))

    window.location.href = "./cadastro.html"
}

const emailCadastrado = document.getElementById("emailCadastrado")
const senhaCadastrada = document.getElementById("senhaCadastrada")

const entrar = function(){
    contaCadastrada = JSON.parse(localStorage.getItem('contaCadastrada'))

    if(emailCadastrado.value == contaCadastrada.email && senhaCadastrada.value == contaCadastrada.senha){
    alert("Você entrou na sua conta")

    window.location.href = "./index.html"
    } else {
        alert("erro")
    }
}