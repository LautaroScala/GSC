"use strict";
var Color;
(function (Color) {
    Color[Color["ROJO"] = 0] = "ROJO";
    Color[Color["VERDE"] = 1] = "VERDE";
    Color[Color["AZUL"] = 2] = "AZUL";
    Color[Color["GRIS"] = 3] = "GRIS";
})(Color || (Color = {}));
function analizarColor(arg) {
    switch (arg) {
        case Color.AZUL:
            console.log('Es Azul');
            break;
        case Color.VERDE:
            console.log('Es Verde');
            break;
        case Color.ROJO:
            console.log('Es Rojo');
            break;
        case Color.GRIS:
            console.log('Es GRIS');
            break;
        default:
            // throw new Error('No deberia pasar por aca');
            const verifica = arg; // si agrego un color al enum, esto tira error y lo puedo encontrar.
    }
}
