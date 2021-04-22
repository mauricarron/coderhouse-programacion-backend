import express from "express";

const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const listaPersonas = [{ nombre: "Sopita", apellido: "Quick", edad: 97 }];

app.set("view engine", "ejs");
app.set("views", "./views/pages");
app.set("partials", "./views/partials");

app.get("/", (req, res) => {
  res.render("index.ejs", { data: listaPersonas });
});

app.post("/datos", (req, res) => {
  console.log(req.body);
  listaPersonas.push(req.body);
  res.redirect("/");
});

const server = app.listen(PORT, () => {
  console.log(`El servidor se inicio en el PUERTO: ${PORT}`);
});
server.on("error", (error) => {
  console.error(`ERROR en el servidor: ${error.message}`);
});
