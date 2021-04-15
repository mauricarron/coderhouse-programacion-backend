import express from "express";

const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/sumar", (req, res) => {
  console.log(req.query);
  const n = req.query.num;
  res.json({ result: Number(n[0]) + Number(n[1]) });
});

app.get("/api/restar", (req, res) => {
  console.log(req.query);
  const n = req.query.num;
  res.json({ result: Number(n[0]) - Number(n[1]) });
});

app.get("/api/multiplicar", (req, res) => {
  console.log(req.query);
  const n = req.query.num;
  res.json({ result: Number(n[0]) * Number(n[1]) });
});

app.get("/api/dividir", (req, res) => {
  console.log(req.query);
  const n = req.query.num;
  res.json({ result: Number(n[0]) / Number(n[1]) });
});

const server = app.listen(PORT, () => {
  console.log(`El servidor se inicio en el PUERTO: ${PORT}`);
});
server.on("error", (error) => {
  console.error(`ERROR en el servidor: ${error.message}`);
});
