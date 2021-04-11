const moment = require("moment");

const today = moment().format("YY/MM/DD");
const birth = moment("19890807").format("YY/MM/DD");

console.log(`Hoy es ${today}.`);
console.log(`Hoy es ${birth}.`);
