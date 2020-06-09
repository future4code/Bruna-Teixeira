

let jogando = true

while(jogando){ 
  if(confirm("Bem vindo ao jogo de Blackjack! Quer iniciar uma nova rodada?")) {
  
    let usuario = [comprarCarta(), comprarCarta()] 
    let computador = [comprarCarta(), comprarCarta()]
    
    let pontuacaoUsuario = usuario[0].valor + usuario[1].valor
    let pontuacaoComputador = computador[0].valor + computador[1].valor

    console.log("Usuário - cartas: ", usuario[0].texto, usuario[1].texto, " - pontuação ", pontuacaoUsuario)
    console.log("Computador - cartas: ", computador[0].texto, computador[1].texto, " - pontuação ", pontuacaoComputador)

 
    if(pontuacaoUsuario === pontuacaoComputador){
      console.log("Empate!")
    } else if(pontuacaoUsuario > pontuacaoComputador){
      console.log("O usuário ganhou!")
    } else{
      console.log("O computador ganhou!")
    }
    
  
  } else {
    jogando = false
    console.log("O jogo acabou")
  }
}