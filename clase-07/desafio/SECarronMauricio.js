import fs from "fs";
import express from "express";

const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`El servidor se inicio en el PUERTO: ${PORT}.`);
});
server.on("error", (error) => {
  console.log(`ERROR en el servidor: ${error}`);
});

const visitasTotales = {
  items: 0,
  item: 0,
};

app.get("/items", (req, res) => {
  visitasTotales.items++;
  const items = JSON.parse(fs.readFileSync("./productos.txt", "utf-8"));
  const cantidad = items.length;

  res.json({
    items,
    cantidad,
  });
});

app.get("/item-random", (req, res) => {
  visitasTotales.item++;
  const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);
  const items = JSON.parse(fs.readFileSync("./productos.txt", "utf-8"));

  res.json({
    item: items[getRandomIndex(items)],
  });
});

app.get("/visitas", (req, res) => {
  res.json({
    visitas: visitasTotales,
  });
});
