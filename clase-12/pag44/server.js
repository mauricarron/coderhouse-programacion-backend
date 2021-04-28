import path from "path";
import express from "express";
import { Server as HttpServer } from "http";
import { Server as IOServer } from "socket.io";

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);
let __dirname = path.resolve(path.dirname(""));
const PORT = 8080;

const listaMensajes = [];

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

httpServer.listen(PORT, () => {
  console.log(`Servidor iniciado en el PUERTO: ${PORT}`);
});
httpServer.on("error", (error) => {
  console.error(`ERROR en el servidor: ${error.message}`);
});

io.on("connection", (socket) => {
  console.log("¡Nuevo cliente conectado!");

  socket.on("submit", (data) => {
    const newMessage = {
      socketid: socket.id,
      mensaje: data,
    };
    listaMensajes.push(newMessage);
    io.sockets.emit("print", listaMensajes);
  });
});
