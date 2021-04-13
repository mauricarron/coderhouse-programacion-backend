//INSTALACION DE PAQUETES CON NPM
//USO DE LIBRERIA MOMENTJS con import ES6

import moment from "moment";

const today = moment();
const birth = moment("19890807");
const yearsSinceBirth = today.diff(birth, "years");
const daysSinceBirth = today.diff(birth, "days");

console.log(`Hoy es ${today.format("DD/MM/YY")}.`);
console.log(`Nací el ${birth.format("DD/MM/YY")}.`);
console.log(`Desde mi nacimiento pasaron ${yearsSinceBirth} años.`);
console.log(`Desde mi nacimiento pasaron ${daysSinceBirth} días.`);
