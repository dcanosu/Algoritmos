//instalar el módulo npm install prompt-sync
const prompt = require('prompt-sync')({sigint: true});

//número de edades a solicitar
const NUM_EDADES = 10

let edades = []

// Inicialización de variables para las estadísticas
let sumaEdades = 0;
let menoresDeEdad = 0;
let mayoresDeEdad = 0;
let adultosMayores = 0;
let edadMinima = Infinity;
let edadMaxima = -Infinity;
let promedioEdades = 0;

//Función para solicitar 10 edades al usuario y almacenarlo en el array
function SolicitarEdades(){
    for (let i = 0; i < NUM_EDADES; i++) {
        let edad
        do {
            // Solicita la entrada del usuario
            edad = parseInt(prompt("Ingresa la edad de la persona " + (i + 1) + ": "), 10);
            // Verifica si la entrada es un número válido y está en el rango permitido
            if (isNaN(edad) || edad < 0 || edad > 120) {
                console.log("La edad ingresada no es válida. Por favor, ingrese una edad entre 0 y 120.");
            }
        } while (isNaN(edad) || edad < 0 || edad > 120); // Repite si la entrada no es válida
        edades.push(edad); // Agrega la edad válida al array
    }
    console.log("Estan son las edades ingresadas: " + edades); // Muestra las edades ingresadas en la consola
}

// Función para calcular estadísticas de las edades
function CalcularEstadistica(){
    edades.forEach(edad => {
        sumaEdades += edad
        menoresDeEdad += edad < 18 ? 1 : 0
        adultosMayores += edad >= 60 ? 1: 0
        mayoresDeEdad += edad >= 18 && edad < 60 ? 1 : 0
    
        if (edad < edadMinima) {
            edadMinima = edad
        }
        if (edad > edadMaxima) {
            edadMaxima = edad
        }
    })

    // Calcular promedio de edades
    promedioEdades = sumaEdades / edades.length;
}

// Función para mostrar resultados en la consola
function MostrarResultados(){
    console.log("Cantidad de menores de edad: " + menoresDeEdad);
    console.log("Cantidad de mayores de edad: " + mayoresDeEdad);
    console.log("Cantidad de adultos mayores: " + adultosMayores);
    console.log("Edad más baja: " + edadMinima);
    console.log("Edad más alta: " + edadMaxima);
    console.log("Promedio de edades: " + promedioEdades.toFixed(2));
}

//Ejecucción del programa
SolicitarEdades()
CalcularEstadistica()
MostrarResultados()









