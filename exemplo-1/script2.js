let rlSync = require('readline-sync')

let nome = rlSync.question("Qual o seu nome?\n")

console.log(`Olá, ${nome}`)

let idade = rlSync.questionInt("Qual a sua idade?\n")

console.log(`Você tem ${idade} anos`)