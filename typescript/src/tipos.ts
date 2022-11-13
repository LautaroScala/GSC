let tipo1: void;
let tipo2: any;
let tipo3: never  | number; //uno o el otro
let tipo4 = 'Lautaro'; // Inferencia de tipo

function FuncionEj(tipostring:string): string {
    return tipostring;
}