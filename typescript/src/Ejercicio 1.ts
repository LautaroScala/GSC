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

let esPablo: boolean = true;

console.log('[Ejercicio 1.3]', `${esPablo ? 'Oh, hola Pablo' : 'Quien sos vos?'}`);

// EJ 1.4

const entero:number = 6;
const decimal:number = 6.66;
const hexadecimal:number = 0xf00d;
const binario:number = 0b1010011010;
const octal:number = 0o744;
const ceroNegativo:number = -0;
const enRealiadadNumero:number = NaN;
const mayorNumero:number = Number.MAX_VALUE;
const elNumeroMasGrande:number = Infinity;

const miembros: number[] = [
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

// EJ 1.5

const secuencia:number[] = Array.from(Array(10).keys());
const animales:string [] = ['pinguino', 'oso hormiguero', 'zorro', 'jirafa'];
const cadenasYNumeros: (string | number)[] = [1, 'uno', 2, 'dos', 3, 'tres'];
const todosMisArreglos:(string|number)[][] = [secuencia, animales, cadenasYNumeros];

console.log('Ejercicio 1.5', todosMisArreglos);

// EJ 1.6

const elementoInventario = ['tuerca', 11];

// despues lo desestructuramos
const [nombre, cantidad] = elementoInventario;

const mensaje = agregarInventario(nombre, cantidad);

console.log('[Ejercicio 1.6]', mensaje);
function agregarInventario<T,U>(nombre: T, cantidad: U): string {
return `Se agregaron ${cantidad} ${nombre}s al inventario.`;
}