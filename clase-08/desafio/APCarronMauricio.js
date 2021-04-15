import express, { json } from "express";

const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const listaProductos = [];
let nextIdProductos = 0;

app.get("/api/productos", (req, res) => {
  if (listaProductos.length === 0) {
    res.json({ error: "no hay productos cargados" });
  } else {
    res.json(listaProductos);
  }
});

app.get("/api/productos/:id", (req, res) => {
  const { id } = req.params;
  const reqProducto = listaProductos.filter((product) => product.id === id);
  console.log(reqProducto);

  if (reqProducto.length === 0) {
    res.json({ error: "producto no encontrado" });
  } else {
    res.json(reqProducto);
  }
});

app.post("/api/productos", (req, res) => {
  const producto = req.body;
  producto.id = ++nextIdProductos;
  listaProductos.push(producto);

  res.json(producto);
});

const server = app.listen(PORT, () => {
  console.log(`El servidor se inicio en el PUERTO: ${PORT}`);
});
server.on("error", (error) => {
  console.error(`ERROR en el servidor: ${error.message}`);
});
