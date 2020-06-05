/* b. Escreva um programa que devolva um novo array contendo todos os 
valores do array original divididos por 10. */

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let resposta = []

for (let i of array) {
    resposta.push(i/10)
}
console.log(resposta)