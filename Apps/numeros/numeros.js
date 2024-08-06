//instalar el módulo npm install prompt-sync
const prompt = require('prompt-sync')({sigint: true});
//const LONGITUD = 5
let longitud = 0

let conjuntoA = []
let conjuntoB = []

function SolicitarDatosA(){
    longitud = parseInt(prompt("Ingrese el tamaño del conjunto A: "))
    if(longitud > 0 && longitud <= 5){
        for (let i = 0; i < longitud; i++) {
            let datosA
            do {
                // Solicita la entrada del usuario
                datosA = parseInt(prompt("Ingresa un número para el conjuto A en la posición " + (i + 1) + ": "), 10);
                // Verifica si la entrada es un número válido y está en el rango permitido
                if (isNaN(datosA) || i > 0 && datosA < conjuntoA[i-1]) {
                    console.log("Por favor ingrese un número válido, el número debe de ser mayor o igual al anterior");
                }
            } while (isNaN(datosA) || i > 0 && datosA < conjuntoA[i-1]); // Repite si la entrada no es válida
            conjuntoA.push(datosA); // Agrega la edad válida al array
        }
        //console.log("Conjunto A => " + "["+conjuntoA+"]"); // Muestra las edades ingresadas en la consola
    }else{
        console.log("El tamaño permitido es entre 0 y 5")
        SolicitarDatosA()
    }
}

function SolicitarDatosB(){
    longitud = parseInt(prompt("Ingrese el tamaño del conjunto B: "))
    if(longitud > 0 && longitud <= 5){
        for (let i = 0; i < longitud; i++) {
            let datosB;
            do {
                // Solicita la entrada del usuario
                datosB = parseInt(prompt("Ingresa un número para el conjuto B en la posición " + (i + 1) + ": "), 10)
                // Verifica si la entrada es un número válido y está en el rango permitido
                if (isNaN(datosB)) {
                    console.log("Por favor ingrese un número válido");
                }
            } while (isNaN(datosB)); // Repite si la entrada no es válida
            conjuntoB.push(datosB); // Agrega la edad válida al array
        }
    }else{
        console.log("El tamaño permitido es entre 0 y 5")
        SolicitarDatosB()
    }
}

SolicitarDatosA()
SolicitarDatosB()


//let unido = [].concat(conjuntoA, conjuntoB)
console.log("Conjunto A => " + "["+(conjuntoA)+"]"); // Muestra las edades ingresadas en la consola
console.log("Conjunto B => " + "["+(conjuntoB)+"]"); // Muestra las edades ingresadas en la consola

let conjuntoUnido = conjuntoA.concat(conjuntoB)
console.log("Conjunto unido: " + "["+conjuntoUnido+"]")
conjuntoUnido.sort((a, b) => a - b)
console.log("Organizado ascendente:" + "["+conjuntoUnido+"]")

conjuntoUnido.sort((a, b) => b - a)
console.log("Organizado descendente: " + "["+conjuntoUnido+"]")