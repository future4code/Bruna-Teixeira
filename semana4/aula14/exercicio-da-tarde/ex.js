function criarTarefa() {
    const listaDeTarefas = document.getElementsByClassName("content")
    listaDeTarefas.innerHTML += `<li> ${item} </li>`
    meuInput.value = ""
}


function checaTecla() {
    const meuInput = document.getElementById("novaTask")
    let item = meuInput.value 
}