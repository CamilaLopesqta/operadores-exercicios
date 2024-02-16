/* # Exercício 2

Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

```
O primeiro numero é maior que o segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

divisível = com resto zero

Obs: A resposta (true ou false) vai depender dos números inseridos e do resultado das operações. As respostas colocadas acima são apenas exemplos!
``` */

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
