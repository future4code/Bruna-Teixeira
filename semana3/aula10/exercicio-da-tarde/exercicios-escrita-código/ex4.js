
// ex. 4-A
// Comentário sobre os 2 números forem iguais: imprimiu os 2 número normalmente.
/*
const numero1 = prompt("Digite o primeiro número: ")
const numero2 = prompt("Digite o segundo número: ")

if(numero1 > 0 && numero2 > 0) {
  let mensagem
  if(numero1 > numero2) {
    console.log("Ordem decrescente: ", numero1, " e ", numero2) 
  } else {
    console.log("Ordem decrescente: ",numero2, " e ", numero1) 
  }
}
*/   


// ex. 4-B

const numero1 = prompt("Digite o primeiro número: ")
const numero2 = prompt("Digite o segundo número: ")
const numero3 = prompt("Digite o terceiro número: ")


if((numero1 > numero2) && (numero2 > numero3)) {
    console.log(numero1, numero2, numero3) 
} else if ((numero1 > numero3) && (numero3 > numero2)) {
    console.log(numero1, numero3, numero2)    
} else if ((numero2 > numero1) && (numero1 > numero3)) {
    console.log(numero2, numero1, numero3) 
} else if ((numero2 > numero3) && (numero3 > numero1)) {
    console.log(numero2, numero3, numero1) 
} else if ((numero3 > numero2) && (numero2 > numero1)) {
    console.log(numero3, numero2, numero1)
} else if ((numero3 > numero1) && (numero1 > numero2)) {
    console.log(numero3, numero1, numero2)    


// ex. 4-C