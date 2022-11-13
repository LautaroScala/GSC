enum Color {
    ROJO, VERDE, AZUL, GRIS
}

function analizarColor(arg: Color):void{
    switch (arg) {
        case Color.AZUL:
            console.log('Es Azul');
            break;
        case Color.VERDE:
            console.log('Es Verde')
            break;
        case Color.ROJO:
            console.log('Es Rojo');
            break;
        case Color.GRIS:
            console.log('Es GRIS');
            break;
        default:
            // throw new Error('No deberia pasar por aca');
            const verifica: never = arg; // si agrego un color al enum, esto tira error y lo puedo encontrar.
    }
}