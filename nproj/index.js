let nombre = "Luis";
console.log(typeof nombre);

let apellido = "Barrientos";

let edad = 20;

let NombreCompleto = nombre + " " + apellido + " ("+ edad +")";
console.log(NombreCompleto);

//1) Declarar un Array de Números

let Array1 = [1, 2, 3, 4, 5];
console.log(Array1);

//2) Acceder a Elementos de un Array

let Array2 =['pera', 'mango', 'kiwi'];
console.log(Array2[1]);

//3) Modificar un Elemento de un Array

let Array3 = ['negro', 'amarillo', 'cafe'];
Array3[2]='naranjo';
console.log(Array3);

//4) Añadir un Elemento a un Array

let Array4 = ['loro', 'gato', 'mono'];
Array4[3]='perro';
console.log(Array4);

//Ejercicios con Objetos:

//1) Declarar un Objeto Simple

let persona = {
    nombre: 'Jose',
    edad: 30,
    ciudad: 'castro',
}
console.log(persona);

//2) Acceder a una Propiedad de un Objeto

let coche = {
    marca: 'Suzuki',
    modelo: 'Dzire',
    año: '2021',
}
console.log(coche.modelo);

//3) Modificar una Propiedad de un Objeto

let libro = {
    libro:'Señor de los anillos',
    autor: 'J.R.R Tolkien',
}
libro.autor = 'George Orwell';
console.log(libro.autor);

//4) Añadir una Nueva Propiedad a un Objeto

let pelicula ={
    titulo: '3 ninjas',
    director: 'Jon Turteltaub',
}
pelicula.año = 1994;
console.log(pelicula);