
//declaracion en JS
let edad=1;
let nombre ='Juancito';
let activo =true;

//declaracion de Ts
let edad: number =25;
let nombre: string = 'Juancito';
let activo: boolean = true;

//ARREGLOS
let edades: number[] = [18,19,20,21,22,23,24,25];
let nombres: string[]= ['Juancito','Pedro,'Julia','Pamela'];
//RECORRER ARREGLOS
for (let nombre of nombres){
    console.log(nombre);
    
}
//funciones
function sumar(a:number, b:number):number {
    retur a+b;
}

console.log(sumar(10,5)); //15

//EJEMPLO DE INTERFACES

interface Estudiante {
    id: number;
    nombre: string;
    correo: string;
    carrera: string;
}

let Estudiante1: Estudiante= {
    id:1;
    nombre: 'Juanito Precioso';
    correo: 'Juanito.NuncaSol@gmail.com'
    carrera: 'Mercadeo Internacional'
};

console.log(Estudiante1.nombre);


class Persona {
    nombre: string;
    edad: number;

    constructor(nombre:string, edad:number){
        this.nombre= nombre;
        this.edad = edad;
    }

    mostrarInformacion():string {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}`;

    }
}

let Persona1= new Persona('Ana',22);

console.log(Persona1.mostrarInformacion());