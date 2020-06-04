/* d. Escreva um programa que gere um novo array contendo strings, 
da seguinte forma: "O elemento do índex i é: numero" */


const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let texto = []

for (let i=0; i < array.length; i++) {
    let valor = array[i]
    texto.push("O elemento do índex " + i + " é " + valor)
 }   
 console.log(texto)