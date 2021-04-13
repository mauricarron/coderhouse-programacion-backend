import express from "express";
import { throwError } from "rxjs";

const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Se inició el server en el puerto ${PORT}`);
});

server.on("error", (error) => {
  console.error(`ERROR en el servidor: ${error}`);
});
