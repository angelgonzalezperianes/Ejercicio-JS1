var dni = 0
var divisor = 23
var numero = 53566493
var letras = [
    'T', 'R', 'W', 'A',
    'G', 'M', 'Y', 'F',
    'P', 'D', 'X', 'B',
    'N', 'J', 'Z', 'S',
    'Q', 'V', 'H', 'L',
    'C', 'K', 'E'
]

function calcular(numero) {

    var aux = numero % divisor
    console.log(letras[aux])
}

calcular(numero)