/* a. Escreva um programa que devolva o maior 
e o menor números contidos no array original */


const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maior = array[0]
let menor = array[0]

for(let i of array) {
    if(i >= maior) {
        maior = i
    } 
    if(i <= menor){
        menor = i
    }
}
    console.log("O maior número é ", maior, " e o menor é", menor)