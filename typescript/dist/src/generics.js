"use strict";
let arreglo = ['a1', 'a2', 'a3'];
let arreglo2 = ['a1', 'a2', 'a3'];
function getArray(items) {
    return new Array().concat(items);
}
let myNumArr = getArray([100, 200, 300]);
let myStrArr = getArray(['hello', 'world']);
myNumArr.push(400);
myStrArr.push('Hello TypeScrypt');
// myNumArr.push('Hi');
// myStrArr.push(500);
console.log(myNumArr);
console.log(myStrArr);
