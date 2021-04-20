import express from "express";
import handlebars from "express-handlebars";

const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Server iniciado en el PUERTO: ${PORT}`);
});
server.on("error", (error) => console.error(`Error en el servidor: ${error}`));
