"use strict";
// EJ 1
let pi = 3.14159;
let tau = pi * 2;
console.log('[Ejercicio 1.1]', `${tau} es ${pi} veces el dos.`);
// EJ 1.2
let torta;
torta = 'queso';
// torta = never;
console.log('[Ejercicio 1.2]', `Me gusta comer torta con sabor a ${torta}.`);
// EJ 1.3
let esPablo = true;
console.log('[Ejercicio 1.3]', `${esPablo ? 'Oh, hola Pablo' : 'Quien sos vos?'}`);
// EJ 1.4
const entero = 6;
const decimal = 6.66;
const hexadecimal = 0xf00d;
const binario = 0b1010011010;
const octal = 0o744;
const ceroNegativo = -0;
const enRealiadadNumero = NaN;
const mayorNumero = Number.MAX_VALUE;
const elNumeroMasGrande = Infinity;
const miembros = [
    entero,
    decimal,
    hexadecimal,
    binario,
    octal,
    ceroNegativo,
    enRealiadadNumero,
    mayorNumero,
    elNumeroMasGrande
];
miembros[0] = 12345;
console.log('[Ejercicio 1.4]', miembros);
