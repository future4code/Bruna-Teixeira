/* c. Escreva um programa que devolva um novo array contendo, somente, 
os números pares do array original. */


const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let pares = []

for (let i of array) {
    if(i % 2 === 0) {
     pares.push(i)
    }   
}
console.log(pares)