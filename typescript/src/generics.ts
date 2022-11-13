let arreglo : Array<string> = ['a1', 'a2', 'a3'];
let arreglo2 : string[] = ['a1', 'a2', 'a3'];

function getArray<T>(items:T[]):T[] {// Generic <T> infiere el tipo de dato del array que devuelve la funcion
    return new Array().concat(items);
}

let myNumArr = getArray([100, 200, 300]);
let myStrArr = getArray(['hello','world']);

myNumArr.push(400);
myStrArr.push('Hello TypeScrypt');
// myNumArr.push('Hi');
// myStrArr.push(500);
console.log(myNumArr);
console.log(myStrArr);