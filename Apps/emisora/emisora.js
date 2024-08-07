//Install → npm install prompt-sync
const prompt = require('prompt-sync')();

//Define un array personas para almacenar la información de las personas.
const LONGITUD = 6
let personas = [];
let decorador = ("=".repeat(50))

//La función agregarPersona permite agregar una persona con todos los datos requeridos.
function agregarPersona() {
    while (personas.length < LONGITUD){
        let persona = {};
        console.log(decorador)
        console.log("Ingrese los datos correspondientes a la persona -> "+(personas.length + 1))
        console.log(decorador)
        persona.nombre = prompt("Ingrese su nombre: ");
        persona.cedula = prompt("Ingrese su número de identificación: ");
        persona.fechaNacimiento = prompt("Ingrese su fecha de nacimiento (dd/mm/yyyy): ");
        persona.correo = prompt("Ingrese su correo electrónico: ");
        persona.ciudadResidencia = prompt("Ingrese su ciudad de residencia: ");
        persona.ciudadOrigen = prompt("Ingrese su ciudad de origen: ");
        persona.cancionesFavoritas = [];
        for (let i = 0; i < 3; i++) {
            let cancion = {};
            cancion.artista = prompt("Ingrese su artista favorito "+ (i+1) +": ");
            cancion.titulo = prompt("Ingrese la canción favorita de su artista" + (i+1) +": ");
            persona.cancionesFavoritas.push(cancion);
        }
        personas.push(persona);
        console.log(decorador)
        console.log("Persona agregada exitosamente.");
        console.log(decorador)
    }
    console.log(decorador)
    console.log("Se han agregado 6 personas exitosamente.")
    console.log(decorador)
}

//La función mostrarPersona permite mostrar la información de una persona particular por su posición en el array.
function mostrarPersona() {
    console.log(decorador)
    let posicion = parseInt(prompt("Ingrese un número entre 0 a " + (personas.length - 1) + " para visualizar los datos de la persona ingresada: " ));
    console.log(decorador)
    if (posicion >= 0 && posicion < personas.length) {
        console.log(decorador)
        console.log("Información de la persona:");
        console.log(decorador)
        console.log(personas[posicion]);
    } else {
        console.log(decorador)
        console.log("Posición inválida, posiciónes válidas -> 0 a "+ (personas.length - 1));
        console.log(decorador)
    }
}

//La función mostrarMenu muestra el menú de opciones y retorna la opción seleccionada por el usuario.
function mostrarMenu() {
    console.log(decorador)
    console.log("                        Menú");
    console.log(decorador)
    console.log("1. Agregar una persona");
    console.log("2. Mostrar la información de una persona por su posición en el vector");
    console.log("3. Salir");
    console.log(decorador)
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
