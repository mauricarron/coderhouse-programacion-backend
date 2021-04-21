import express from "express";
import { crearRouterFront } from "./routers/routerFront.js";
import { crearRouterMascotas } from "./routers/routerMascotas.js";
import { crearRouterPersonas } from "./routers/routerPersonas.js";
const PORT = 8080;
const app = express();

app.use("/", crearRouterFront());
app.use("/api/mascotas/", crearRouterMascotas());
app.use("/api/personas/", crearRouterPersonas());

const server = app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
server.on("error", (error) => `ERROR en el servidor: ${error}`);
