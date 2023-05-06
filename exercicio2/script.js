let primeiroNumero = Number(prompt("digite um numero"))
let segundoNumero = Number(prompt("digite outro numero"))

console.log("digite um número", primeiroNumero)
console.log("digite outro número", segundoNumero)

let verificacao = primeiroNumero > segundoNumero
console.log("o primeiro número é maior que o segundo?", verificacao)

let verificacao1 = primeiroNumero === segundoNumero
console.log("o primeiro número é igual o segundo?", verificacao1)

let verificacao2 = primeiroNumero%segundoNumero
console.log("o primeiro número é divisível pelo segundo?", verificacao2 === 0)

let verificacao3 = segundoNumero%primeiroNumero
console.log("o segundo número é divisível pelo primeiro?", verificacao3 === 0)
