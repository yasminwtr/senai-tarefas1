let tarefas = []

const list = function(){
    let paragrafoTarefas = document.getElementById('tarefas')
    paragrafoTarefas.innerHTML = ""

    tarefas = JSON.parse(localStorage.getItem('tarefas'))
    
    tarefas.forEach(tarefa => {
    paragrafoTarefas.innerHTML += tarefa[0] + " - " + tarefa[1] + "<br>"
    });
}

const add = function(){
    let data = document.getElementById('data')
    let tarefa = document.getElementById('tarefa')
    
    tarefas = JSON.parse(localStorage.getItem('tarefas'))
    tarefas.push([data.value, tarefa.value])
    console.log(tarefas);
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
    data.value = ""
    tarefa.value = ""
}