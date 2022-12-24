// Sintaxis de Desestructuracion: Arreglos.
//Nos permite asignar valores a variables usando arreglos.

// Asignamos dos valores a la vez con arreglos.

var a;
var b;

[a, b] = [1, 2];
console.log(a, b); // 1 2

// Si quisieramos asignar un tercer valor, pero no el tercer valor del arreglo, 
//si no el quinto, hariamos lo siguiente:

var a;
var b;
var c;

[a, b,,, c] = [1, 2, 3, 4, 5, 6]
console.log(a, b, c); // 1 2 5

//Tambien se pueden usar para intercambiar valores de 2 variables.

var a = 8;
var b = 6;

[b, a] = [a, b];
console.log(a, b); // 6 8

// Sintaxis de Desestructuracion con el operador rest.

var a;
var b;
var arr;

[a, b, ...arr] = [1, 2, 3, 4, 5, 6];
console.log(a); // 1
console.log(b); // 2
console.log(arr); // [3, 4, 5, 6]

const arregloInicial = [1, 2, 3, 4, 5, 6, 7, 8];

function removerTresPrimerosElementos(arreglo) {
    var nuevoArreglo;
    [ , , ,...nuevoArreglo] = arreglo;
    return nuevoArreglo
}
const arregloFinal = removerTresPrimerosElementos(arregloInicial);
console.log(arregloFinal); // [4, 5, 6, 7, 8]

// Sintaxis de Desestructuracion: Pasar objetos como argumento.

var newClientProfile = {
    nombre: "Juan Peres",
    edad: 24,
    nacionalidad: "Argentino",
    ubicacion: "Argentina"
};

const reloadProfile = ({nombre, edad, nacionalidad, ubicacion}) => {
    console.log(nombre);
    console.log(edad);
    console.log(nacionalidad);
    console.log(ubicacion);
}
reloadProfile(newClientProfile);

//Otro Ejemplo:

const estadistics = {
    max: 56.78,
    desviacionEstandar: 4.34,
    mediana: 34.54,
    moda: 23.87,
    min: -0.75,
    promedio: 35.85
};

const mitad = ({max, min}) => (max + min) / 2.0;
console.log(mitad(estadistics)); // 28.015

//Plantillas Literales o Cadenas Literales (interpolacion).

var a = 6;
console.log(`El valor de a es ${a}`); // El valor de a es 6

var nombre = "ramiro";
var edad = 8;
console.log(`${nombre} tiene ${edad} anos`); // ramiro tiene 8 anos

var persona = {
    nombre: "ramiro",
    edad: 8
};
console.log(`Hola mi nombre es ${persona.nombre} y tengo ${persona.edad} anos`); //Hola mi nombre es ramiro y tengo 8 anos

// Crear Objetos de Forma Concisa.

// //const createPerson = (nombre, edad, idioma) => {
//     return {
//         nombre: nombre,
//         edad: edad,
//         idioma: idioma
//     };
// }
// //console.log(createPerson("Ramiro Fauret", 8, "Argentino")); // {nombre: 'Ramiro Fauret', edad: 8, idioma: 'Argentino'}

// Otro Ejemplo:

const createPerson = (nombre, edad, idioma) => ({nombre, edad, idioma});
console.log(createPerson("Ramiro Fauret", 8, "Argentino")); //{nombre: 'Ramiro Fauret', edad: 8, idioma: 'Argentino'}

// Metodos
//Cuando hacemos referencia a una propiedad dentro del mismo objeto, 
//usamos la palabra "this"(haciendo referencia al nombre del objeto) y luego . y su propiedad.
//en esta caso (linea 121) this.nombre.

const person = {
    nombre: "Isabel",
    presentarse() {
        return `Hola! Mi nombre es ${this.nombre}.`
    }
}
console.log(person.presentarse()); // Hola! Mi nombre es Isabel.

//Definir una clase.
//Una clase es una estructura base, de la cual podemos usar sus propiedades
//para definir objetos nuevos y asi evitar la repeticion de codigo.

class TransbordadorEspacial {
    constructor(planeta) {
        this.planeta = planeta;
    }
};

var zeus = new TransbordadorEspacial("Jupiter");
console.log(zeus.planeta); // Jupiter

var apolo = new TransbordadorEspacial("Marte");
console.log(apolo.planeta); // Marte

// Otro Ejemplo:

class Mascota {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

var miMascota = new Mascota("Ramiro", 8);
console.log(miMascota.nombre, miMascota.edad); // Ramiro 8

var tuMascota = new Mascota("Manuela", 45);
console.log(tuMascota.nombre, tuMascota.edad); // Manuela 45

// Getters y Setters
// Son funciones que nos dan acceso a una propiedad privada.
// Como vemos en la linea 164 (this._autor) el guion bajo hace a esa propiedad privada.
// Las cuales podemos acceder a ellas con los getters y los setters.

class Libro {
    constructor(autor) {
        this._autor = autor;
    }
    get autor() { // Toma la propiedad privada y accede a ella.
        return this._autor;
    }
    set autor(nuevoAutor) { // Accede a la Propiedad privada gracias al get y le asigna
        this._autor = nuevoAutor; // una nueva variable llamada "nuevoAutor"
    }
}

const libro = new Libro("anonimo");
console.log(libro.autor); // anonimo

libro.autor = "H. P. Lovecraft";
console.log(libro.autor); // H. P. Lovecraft