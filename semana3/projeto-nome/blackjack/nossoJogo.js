/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta' sortear uma carta
 * 
 * 
  
 * 

   A rodada consiste em sortear 2 cartas para cada jogador, definir a pontuação de cada jogador e informar 
   o vencedor (usuário ou computador), ou empate, caso as pontuações sejam iguais.
   As cartas tem um valor de acordo com seu número (a carta 4♣️ tem valor 4, e a carta 9♦️ tem valor 9). 
   As cartas J, Q e K tem valor 10, e a carta A tem valor 11.
   O jogo inicia com cada jogador (usuário e computador) recebendo 2 cartas. 
   A pontuação de cada jogador é a soma do valor das suas cartas.
   O jogador com a maior pontuação ganha a rodada.
 * 
 * "Usuário - cartas: Q♣️ 10♣️  - pontuação 20" 
   "Computador - cartas: Q♣️ 10♣️  - pontuação 20"
 * 
   "Empate!"
   "O usuário ganhou!"
   "O computador ganhou!"
 */




// O JOGO 

   let usuario = [comprarCarta(), comprarCarta()] 
   let computador = [comprarCarta(), comprarCarta()]


   function comprarCarta() {
  
   const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];  // Cria array de cartas
   const naipes = ["♦️", "♥️", "♣️", "♠️"] // Cria array de naipes
   const numero = cartas[Math.floor(Math.random() * 13)]  // Sorteia uma carta
   const naipe = naipes[Math.floor(Math.random() * 4)]  // Sorteia um naipe
 
   let valor
 
   
   if (numero === "A") {  // Verifica se é uma das letras e coloca o valor correspondente na variável valor
     valor = 11
   } else if (numero === "J" || numero === "Q" || numero === "K") {
     valor = 10
   } else { // Se nao for uma das letras, só converte a string para número
     valor = Number(numero)
   }
 
   
   const carta = {  // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
     texto: numero + naipe,
     valor: valor
   }
 
   return carta
 }


 let pontuacaoUsuario

 for(let i of usuario) {
   pontuacaoUsuario.push(carta.valor[i] + carta.valor[i])
 }

 let pontuacaoComputador = 

 for(let i of computador) {
   pontuacaoComputador.push(carta.valor[i] + carta.valor[i])
}


 // INÍCIO


if(confirm("Bem vindo ao jogo de Blackjack! Quer iniciar uma nova rodada?")) {
   // o que fazer se o usuário clicar "ok"
 console.log("Usuário: ", usuario, " - pontuação: ", pontuacaoUsuario)
 console.log("Computador: ", computador, " - pontuação: ", pontuacaoComputador)
} else {
 console.log("O jogo acabou")
}
  



/*  const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
 console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
 console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10) */