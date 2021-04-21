import express from "express";

const listaMascotas = [{ nombre: "Litia", raza: "Callejera", edad: 12 }];
let nextIdMascota = 0;

function crearRouterMascotas() {
  const routerMascotas = express.Router();
  routerMascotas.use(express.json());

  routerMascotas.get("/", (req, res) => {
    res.json(listaMascotas);
  });
  routerMascotas.post("/", (req, res) => {
    const nuevaMascota = req.body;
    nuevaMascota.id = ++nextIdMascota;

    listaMascotas.push(nuevaMascota);

    res.json(nuevaPersona);
  });

  return routerMascotas;
}

export { crearRouterMascotas };
