import path from "path";
import express from "express";
import { Server as HttpServer } from "http";
import { Server as IOServer } from "socket.io";

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);
const PORT = 8080;
let __dirname = path.resolve(path.dirname(""));

app.use(express.static("public]"));
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

httpServer.listen(PORT, () => {
  console.log(`Servidor iniciado en el PUERTO: ${PORT}`);
});
httpServer.on("connection", (socket) => {
  console.log("Cliente conectado");
  socket.emit("serverMessage", "Este es mi mensaje desde el servidor.");
});
httpServer.on("error", (error) => {
  console.error(`ERROR en el servidor: ${error.message}`);
});
