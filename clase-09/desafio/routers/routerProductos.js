import express from "express";
import { Producto } from "../producto.js";
const prod = new Producto();

const crearRouterProductos = () => {
  const routerProductos = express.Router();
  routerProductos.use(express.json());
  routerProductos.use(express.urlencoded({ extended: true }));

  routerProductos.get("/", (req, res) => {
    res.json(prod.get());
  });

  routerProductos.get("/:id", (req, res) => {
    const { id } = req.params;
    res.json(prod.getByID(id));
  });

  routerProductos.post("/", (req, res) => {
    const data = req.body;
    res.json(prod.add(data));
  });

  routerProductos.put("/:id", (req, res) => {
    const data = req.body;
    const { id } = req.params;
    res.json(prod.update(data, id));
  });

  routerProductos.delete("/:id", (req, res) => {
    const { id } = req.params;
    res.json(prod.delete(id));
  });

  return routerProductos;
};

export { crearRouterProductos };
