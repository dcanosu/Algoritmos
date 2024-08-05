const prompt = require('prompt-sync')({sigint: true});

// Función para validar si el valor es un número
function validarNumero(valor) {
    return !isNaN(parseFloat(valor)) && isFinite(valor) && valor > 0;
}

function solicitarNumero(mensaje) {
    let valor
    do {
        valor = prompt(mensaje);
        if (!validarNumero(valor)) {
            console.log("Entrada inválida. Por favor, ingrese un número válido.");
        }
    } while (!validarNumero(valor));
    return parseFloat(valor);
}

function mensaje(){
    const mensajeInicial = ("Bienvenido al programa Área y perímetro de figuras planas")
    const asteriscos = ("*".repeat(mensajeInicial.length))
    console.log(asteriscos)
    console.log(mensajeInicial)
    console.log(asteriscos)
}

function calcularPerimetro(a, b, c){
    const guiones = ("-".repeat(30))

    //Solicitar los datos al usuario
    do {
        a = prompt("Ingrese el primer lado: ")
        if (!validarNumero(a)){
            console.log("Entrada inválida. Por favor, ingrese un número válido")
        }
    } while (!validarNumero(a))
    a = parseFloat(a)

    var c = solicitarNumero("Ingrese el segundo lado: ")
    var b = solicitarNumero("Ingrese la base: ")

    //Calcular el perímetro
    let perimetro = a + b + c

    console.log(guiones)
    console.log("El perímetro es: " + perimetro)
    console.log(guiones)

    var h = solicitarNumero("Ingrese la altura: ")
    console.log("La base es: " + b)

    //Calcular el área
    let area = (b * h) / 2

    console.log(guiones)
    console.log("El área es: " + area)
    console.log(guiones)
}


mensaje()
calcularPerimetro()