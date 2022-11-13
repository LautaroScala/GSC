let x: [string, number];

x = [ 'Hola', 10];
// x = [ 10 , 'Hola']
let employees: [number, string][]; // arreglo de tuplas
employees = [[1,'Steve'], [2, 'Bill']];
employees.push([3,'Juan']);
console.log(employees);
