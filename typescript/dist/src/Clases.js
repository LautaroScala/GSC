"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = exports.Vehiculo = void 0;
class Vehiculo {
    // propiedades publicas
    // readonly: no se puede modificar la propiedad
    constructor(nombre, precio, fabricante) {
        this.nombre = nombre;
        this.precio = precio;
        this.fabricante = fabricante;
    }
    greet() {
        console.log(`El vehiculo ${this.nombre} cuesta ${this.precio}`);
    }
    set _fabricante(fabricante) {
        this.fabricante = fabricante;
    }
    get _fabricante() {
        return this.fabricante;
    }
}
exports.Vehiculo = Vehiculo;
class Moto extends Vehiculo {
    constructor(nombre, precio, _fabricante, importador) {
        super(nombre, precio, _fabricante);
        this.importador = importador;
        this.importador = importador;
    }
    get _importador() {
        return this.importador;
    }
}
exports.Moto = Moto;
