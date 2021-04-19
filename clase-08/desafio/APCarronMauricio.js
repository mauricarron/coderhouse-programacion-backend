import express, { json } from "express";
import { Producto } from "./producto.js";
const prod = new Producto();

const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/productos", (req, res) => {
  const listaProductos = prod.get();
  if (!listaProductos) {
    res.json({ error: "no hay productos cargados" });
  } else {
    res.json(listaProductos);
  }
});

app.get("/api/productos/:id", (req, res) => {
  const { id } = req.params;
  const reqProduct = prod.getByID(id);

  if (!reqProduct) {
    res.json({ error: "producto no encontrado" });
  } else {
    res.json(reqProduct);
  }
});

app.post("/api/productos", (req, res) => {
  const data = req.body;
  prod.add(data);

  res.json(data);
});

const server = app.listen(PORT, () => {
  console.log(`El servidor se inicio en el PUERTO: ${PORT}`);
});
server.on("error", (error) => {
  console.error(`ERROR en el servidor: ${error.message}`);
});
