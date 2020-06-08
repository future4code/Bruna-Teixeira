// EXERCÍCIO 6

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]



/* 
// EXERCÍCIO 6 - A

 let imprime = function (arrayNumeros) {
       return arrayNumeros.length 
}

const resultado = imprime (array)

console.log("Quantidade de elementos: ", resultado)
 */



// EXERCÍCIO 6 - B

let classifica = (array[i]) => {
    if(i % 2 === 0) {
        return "é par"  //console.log("é par")
    } else {
        return "é ímpar" //console.log("é ímpar")
    }
  }
  
  const resultado = classifica (array)
  console.log(resultado)

