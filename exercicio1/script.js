/* # Exercício 1

Construa um programa que:

a) Peça ao usuário que insira um número **par**

b) Imprima no console **o resto da divisão** desse número por 2.

c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

d) O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código.

>💡  **Dica**:   não se esqueça de **converter** as respostas para o tipo número */

const numeroPar = Number(prompt("Digite um número par"))
console.log("Digite um número par", numeroPar)

const restoDivisao = numeroPar % 2
console.log("resto da divisão", restoDivisao) // padrão: o resto é sempre 0 (zero)
// se o usuário digitar um número ímpar o padrão: o resto retorna o número 1

