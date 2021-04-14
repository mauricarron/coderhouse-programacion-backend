import express from "express";

const app = express();
const PORT = 8080;
const frase = "Hola Mundo como están";

const server = app.listen(PORT, () => {
  console.log(`Se inicio el server en el puerto ${PORT}.`);
});
server.on("error", (error) => console.log(`ERROR en servidor: ${error}`));

app.get("/api/frase", (req, res) => {
  res.json(frase);
});

app.get("/api/letras/:id", (req, res) => {
  const letras = frase.split("");
  const id = Number(req.params.id) - 1;

  if (id > letras.length - 1 || isNaN(id) || id === -1) {
    res.json({ error: "El parámetro está fuera de rango." });
  } else {
    res.json(letras[id]);
  }
});

app.get("/api/palabras/:id", (req, res) => {
  const palabras = frase.split(" ");
  const id = Number(req.params.id) - 1;

  if (id > palabras.length - 1 || isNaN(id) || id === -1) {
    res.json({ error: "El parámetro está fuera de rango." });
  } else {
    res.json(palabras[id]);
  }
});
