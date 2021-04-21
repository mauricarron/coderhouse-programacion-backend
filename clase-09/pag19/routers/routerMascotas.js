import express from "express";

const listaMascotas = [{ nombre: "Litia", raza: "Callejera", edad: 12 }];
let nextIdMascota = 0;

const crearRouterMascotas = () => {
  const routerMascotas = express.Router();
  routerMascotas.use(express.json());
  routerMascotas.use(express.urlencoded({ extended: true }));

  routerMascotas.get("/", (req, res) => {
    res.json(listaMascotas);
  });
  routerMascotas.post("/", (req, res) => {
    const nuevaMascota = req.body;
    nuevaMascota.id = ++nextIdMascota;

    listaMascotas.push(nuevaMascota);

    res.json(nuevaMascota);
  });

  return routerMascotas;
};

export { crearRouterMascotas };
