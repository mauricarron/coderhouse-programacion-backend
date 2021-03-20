const operar = (a, b, operacion) => operacion(a, b);

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;
const modulo = (a, b) => a % b;

// EJEMPLOS
console.log(operar(3, 7, suma));
console.log(operar(27, 17, resta));
console.log(operar(5, 2, multiplicacion));
console.log(operar(100, 10, division));
console.log(operar(10, 2, modulo));
