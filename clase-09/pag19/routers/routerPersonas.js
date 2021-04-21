import express from "express";

const listaPersonas = [{ nombre: "Sopita", apellido: "Quick", edad: 97 }];
let nextIdPersona = 0;

const crearRouterPersonas = () => {
  const routerPersonas = express.Router();
  routerPersonas.use(express.json());
  routerPersonas.use(express.urlencoded({ extended: true }));

  routerPersonas.get("/", (req, res) => {
    res.json(listaPersonas);
  });
  routerPersonas.post("/", (req, res) => {
    console.log(req.body);
    const nuevaPersona = req.body;
    nuevaPersona.id = ++nextIdPersona;

    listaPersonas.push(nuevaPersona);

    res.json(nuevaPersona);
  });

  return routerPersonas;
};

export { crearRouterPersonas };
