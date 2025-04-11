"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("ModuloTS/out/index.js");
const a = 10;
const b = 5;
console.log(`Soma: ${a} + ${b} =`, new index_js_1.Somador().calcular(a, b));
console.log(`Subtração: ${a} - ${b} =`, new index_js_1.Subtrator().calcular(a, b));
console.log(`Multiplicação: ${a} * ${b} =`, new index_js_1.Multiplicador().calcular(a, b));
console.log(`Divisão: ${a} / ${b} =`, new index_js_1.Divisor().calcular(a, b));
