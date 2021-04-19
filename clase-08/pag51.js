import express from "express";

const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let frase = "frase inicial";

app.get("/api/frase", (req, res) => {
  res.send(frase);
});

app.get("/api/frase/:pos", (req, res) => {
  const { pos } = req.params;
  const palabras = frase.split(" ");
  if (palabras.length < pos) {
    res.json({ error: "Posicion invalida." });
  } else {
    res.send(palabras[pos - 1]);
  }
});

app.post("/api/palabras", (req, res) => {
  const { palabra } = req.body;

  let palabras = frase.split(" ");
  palabras.push(palabra);
  frase = palabras.join(" ");

  res.send(palabra);
});

app.post("/api/palabras/:pos", (req, res) => {
  const { pos } = req.params;
  const { palabra } = req.body;
  const palabras = frase.split(" ");

  if (palabras.length < pos) {
    res.json({ error: "Posicion invalida." });
  } else {
    palabras[pos - 1] = palabra;
    frase = palabras.join(" ");
    res.send(palabra);
  }
});

app.delete("/api/palabras/:pos", (req, res) => {
  const { pos } = req.params;
  const palabras = frase.split(" ");

  if (palabras.length < pos) {
    res.json({ error: "Posicion invalida." });
  } else {
    const palabraDeleteada = palabras[pos - 1];
    palabras.splice(pos - 1, 1);
    res.send(palabraDeleteada);
    frase = palabras.join(" ");
  }
});

const server = app.listen(PORT, () => {
  console.log(`El servidor se inicio en el PUERTO: ${PORT}`);
});
server.on("error", (error) => {
  console.error(`ERROR en el servidor: ${error.message}`);
});
