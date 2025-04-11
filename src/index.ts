import {Somador, Subtrator, Multiplicador, Divisor} from "ModuloTS/out/index.js"

const a = 10
const b = 5

console.log(`Soma: ${a} + ${b} =`, new Somador().calcular(a, b)); 
console.log(`Subtração: ${a} - ${b} =`, new Subtrator().calcular(a, b)); 
console.log(`Multiplicação: ${a} * ${b} =`, new Multiplicador().calcular(a, b)); 
console.log(`Divisão: ${a} / ${b} =`, new Divisor().calcular(a, b)); 