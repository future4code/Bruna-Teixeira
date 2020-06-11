
let controlador = []

function inserirDespesas(){
    const valor = document.getElementById("valor")
    const tipo = document.getElementById("tipo")
    const descricao = document.getElementById("descricao")  
    
    let despesa {
        valor: valor.value,
        tipo: tipo.value,
        descricao: descricao.value,
    }

    conjunto.push(despesa)
    console.log(controlador)

    let tudo = document.getElementById("inserir")
    tudo.innerHTML += `<p> ${valor.value} </p>` `<p> ${tipo.value} </p>` `<p> ${descricao.value} </p>`


    valor.value = ""
    tipo.value = ""
    descricao.value = ""
}

/* 
function filtrar(){
   
}


function limparFiltro(){
    tipo.value = ""
    valormaximo.value = ""
    valorminimo.value = ""
} */