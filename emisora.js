//Install → npm install prompt-sync
const prompt = require('prompt-sync')();

let personas = [];

function agregarPersona() {
    let persona = {};
    persona.nombre = prompt('Ingrese el nombre: ');
    persona.cedula = prompt('Ingrese el número de identificación (cédula): ');
    persona.fechaNacimiento = prompt('Ingrese la fecha de nacimiento (dd/mm/yyyy): ');
    persona.correo = prompt('Ingrese el correo electrónico: ');
    persona.ciudadResidencia = prompt('Ingrese la ciudad de residencia: ');
    persona.ciudadOrigen = prompt('Ingrese la ciudad de origen: ');
    persona.cancionesFavoritas = [];
    for (let i = 0; i < 3; i++) {
        let cancion = {};
        cancion.artista = prompt(`Ingrese el artista de la canción favorita ${i+1}: `);
        cancion.titulo = prompt(`Ingrese el título de la canción favorita ${i+1}: `);
        persona.cancionesFavoritas.push(cancion);
    }
    personas.push(persona);
    console.log('Persona agregada exitosamente.');
}

function mostrarPersona() {
    let posicion = parseInt(prompt('Ingrese la posición de la persona que desea ver (0 basado): '));
    if (posicion >= 0 && posicion < personas.length) {
        console.log('Información de la persona:');
        console.log(personas[posicion]);
    } else {
        console.log('Posición inválida.');
    }
}

function mostrarMenu() {
    console.log('\nMenú:');
    console.log('a. Agregar una persona');
    console.log('b. Mostrar la información de una persona por su posición en el vector');
    console.log('c. Salir');
    let opcion = prompt('Ingrese una opción: ');
    return opcion;
}

function main() {
    let continuar = true;
    while (continuar) {
        let opcion = mostrarMenu();
        switch (opcion) {
            case 'a':
                agregarPersona();
                break;
            case 'b':
                mostrarPersona();
                break;
            case 'c':
                continuar = false;
                break;
            default:
                console.log('Opción no válida.');
        }
    }
}

main();


/*

Para resolver este problema en JavaScript, podemos crear un programa que permita agregar personas con los datos especificados y mostrar la información de una persona en particular por su posición en el vector. Usaremos un menú simple para interactuar con el usuario.

A continuación, te muestro un ejemplo básico de cómo hacerlo:

javascript
Copy code
const prompt = require('prompt-sync')();

let personas = [];

function agregarPersona() {
    let persona = {};
    persona.nombre = prompt('Ingrese el nombre: ');
    persona.cedula = prompt('Ingrese el número de identificación (cédula): ');
    persona.fechaNacimiento = prompt('Ingrese la fecha de nacimiento (dd/mm/yyyy): ');
    persona.correo = prompt('Ingrese el correo electrónico: ');
    persona.ciudadResidencia = prompt('Ingrese la ciudad de residencia: ');
    persona.ciudadOrigen = prompt('Ingrese la ciudad de origen: ');
    persona.cancionesFavoritas = [];
    for (let i = 0; i < 3; i++) {
        let cancion = {};
        cancion.artista = prompt(`Ingrese el artista de la canción favorita ${i+1}: `);
        cancion.titulo = prompt(`Ingrese el título de la canción favorita ${i+1}: `);
        persona.cancionesFavoritas.push(cancion);
    }
    personas.push(persona);
    console.log('Persona agregada exitosamente.');
}

function mostrarPersona() {
    let posicion = parseInt(prompt('Ingrese la posición de la persona que desea ver (0 basado): '));
    if (posicion >= 0 && posicion < personas.length) {
        console.log('Información de la persona:');
        console.log(personas[posicion]);
    } else {
        console.log('Posición inválida.');
    }
}

function mostrarMenu() {
    console.log('\nMenú:');
    console.log('a. Agregar una persona');
    console.log('b. Mostrar la información de una persona por su posición en el vector');
    console.log('c. Salir');
    let opcion = prompt('Ingrese una opción: ');
    return opcion;
}

function main() {
    let continuar = true;
    while (continuar) {
        let opcion = mostrarMenu();
        switch (opcion) {
            case 'a':
                agregarPersona();
                break;
            case 'b':
                mostrarPersona();
                break;
            case 'c':
                continuar = false;
                break;
            default:
                console.log('Opción no válida.');
        }
    }
}

main();
Este programa realiza las siguientes acciones:

Define un array personas para almacenar la información de las personas.
La función agregarPersona permite agregar una persona con todos los datos requeridos.
La función mostrarPersona permite mostrar la información de una persona particular por su posición en el array.
La función mostrarMenu muestra el menú de opciones y retorna la opción seleccionada por el usuario.
La función main contiene el bucle principal que permite al usuario interactuar con el programa hasta que decida salir.
Para ejecutar este código, asegúrate de tener prompt-sync instalado. Puedes instalarlo con el siguiente comando:*/
