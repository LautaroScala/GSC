export abstract class Vehiculo{

    // propiedades publicas
    
    // readonly: no se puede modificar la propiedad

    constructor(private nombre:string,private precio:number,private fabricante:string){
    }

    greet(){
        console.log(`El vehiculo ${this.nombre} cuesta ${this.precio}`);
    }
    set _fabricante(fabricante:string){
        this.fabricante = fabricante;
    }
    get _fabricante(){
        return this.fabricante
    }
}

export class Moto extends Vehiculo{
    constructor(nombre:string,precio:number, _fabricante:string, private importador:string){
        super(nombre,precio,_fabricante);
        this.importador = importador;
    }
    get _importador(){
        return this.importador;
    }
}