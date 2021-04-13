const express = require("express");
const moment = require("moment");

const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`El server si inicio en el puerto: ${PORT}`);
});
server.on("error", (error) => {
  console.error(`ERROR en el servidor: ${error}`);
});

app.get("/", (req, res) => {
  res.send(`
  <html>
  <h1 style="color:blue;">Bienvenidos a Servidor Express</h1>
  </html>
  `);
});

let cantidadVisitas = 0;
app.get("/visitas", (req, res) => {
  cantidadVisitas++;

  res.send(`Esta pagina se visito ${cantidadVisitas} veces`);
});

app.get("/fyh", (req, res) => {
  const fecha = moment().format("DD/MM/YYYY");
  const hora = moment().format("LTS");

  res.json({ fyh: `${fecha} ${hora}` });
});
