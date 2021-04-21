import express from "express";

const listaPersonas = [{ nombre: "Sopita", apellido: "Quick", edad: 97 }];
let nextIdPersona = 0;

function crearRouterPersonas() {
  const routerPersonas = express.Router();
  routerPersonas.use(express.json());

  routerPersonas.get("/", (req, res) => {
    res.json(listaPersonas);
  });
  routerPersonas.post("/", (req, res) => {
    const nuevaPersona = req.body;
    nuevaPersona.id = ++nextIdPersona;

    listaPersonas.push(nuevaPersona);

    res.json(nuevaPersona);
  });

  return routerPersonas;
}

export { crearRouterPersonas };
