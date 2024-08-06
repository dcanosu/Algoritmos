//Install → npm install prompt-sync
const prompt = require('prompt-sync')();

//Define un array personas para almacenar la información de las personas.
let personas = [];

//La función agregarPersona permite agregar una persona con todos los datos requeridos.
function agregarPersona() {
    let persona = {};
    persona.nombre = prompt("Ingrese el nombre: ");
    persona.cedula = prompt("Ingrese el número de identificación (cédula): ");
    persona.fechaNacimiento = prompt("Ingrese la fecha de nacimiento (dd/mm/yyyy): ");
    persona.correo = prompt("Ingrese el correo electrónico: ");
    persona.ciudadResidencia = prompt("Ingrese la ciudad de residencia: ");
    persona.ciudadOrigen = prompt("Ingrese la ciudad de origen: ");
    persona.cancionesFavoritas = [];
    for (let i = 0; i < 3; i++) {
        let cancion = {};
        cancion.artista = prompt("Ingrese el artista de la canción favorita "+ (i+1) +": ");
        cancion.titulo = prompt("Ingrese el título de la canción favorita" + (i+1) +": ");
        persona.cancionesFavoritas.push(cancion);
    }
    personas.push(persona);
    console.log('Persona agregada exitosamente.');
}

//La función mostrarPersona permite mostrar la información de una persona particular por su posición en el array.
function mostrarPersona() {
    let posicion = parseInt(prompt("Ingrese la posición de la persona que desea ver: "));
    if (posicion >= 0 && posicion < personas.length) {
        console.log("Información de la persona:");
        console.log(personas[posicion]);
    } else {
        console.log("Posición inválida.");
    }
}

//La función mostrarMenu muestra el menú de opciones y retorna la opción seleccionada por el usuario.
function mostrarMenu() {
    console.log("\nMenú:");
    console.log("1. Agregar una persona");
    console.log("2. Mostrar la información de una persona por su posición en el vector");
    console.log("3. Salir");
    let opcion = prompt("Ingrese una opción: ");
    return opcion;
}

//La función main contiene el bucle principal que permite al usuario interactuar con el programa hasta que decida salir.
function main() {
    let continuar = true;
    while (continuar) {
        let opcion = mostrarMenu();
        switch (opcion) {
            case "1":
                agregarPersona();
                break;
            case "2":
                mostrarPersona();
                break;
            case "3":
                continuar = false;
                break;
            default:
                console.log("Opción no válida.");
        }
    }
}

main();
