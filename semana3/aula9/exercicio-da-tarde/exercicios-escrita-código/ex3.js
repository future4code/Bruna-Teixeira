/*
//exercício 3-A
let quilowatthora = 280
const preçoconsumo = quilowatthora * 0.05

console.log("Consumo quilowatt-hora: ", quilowatthora )
console.log("Preço por consumo: R$ ", preçoconsumo )
*/


//exercício 3-B
let quilowatthora = 280
const preçoconsumo = quilowatthora * 0.05
const desconto = 15
const preçofinal = preçoconsumo - (preçoconsumo * desconto)/100

console.log("Consumo quilowatt-hora: ", quilowatthora )
console.log("Preço por consumo: R$ ", preçoconsumo )
console.log("Desconto: ", desconto + "%" )
console.log("Preço final a pagar: R$ ", preçofinal )