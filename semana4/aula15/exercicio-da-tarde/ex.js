
let conjunto = []

function criarPost(){
    const titulo = document.getElementById("titulo")
    const autor = document.getElementById("autor")
    const conteudo = document.getElementById("conteudo")  
    
    let post{
        titulo: titulo.value,
        autor: autor.value,
        conteudo: conteudo.value,
    }

    conjunto.push(post)
    console.log(conjunto)

    let tudo = document.getElementById("post-completo")
    tudo.innerHTML += `<p> ${titulo.value} </p>` `<p> ${autor.value} </p>` `<p> ${conteudo.value} </p>`


    titulo.value = ""
    autor.value = ""
    conteudo.value = ""
}



