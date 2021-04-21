import path from "path";
import express from "express";
import handlebars from "express-handlebars";

const app = express();
const PORT = 8080;
let __dirname = path.resolve(path.dirname(""));

const datos = {
  nombre: "Sopita",
  apellido: "Quick",
  edad: "31",
  email: "sopita.quick@gmail.com",
  telefono: "2994987654",
};

app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    defaultLayout: "index.hbs",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
  })
);
app.set("view engine", "hbs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("main", datos);
});

const server = app.listen(PORT, () => {
  console.log(`Server iniciado en el PUERTO: ${PORT}`);
});
server.on("error", (error) => console.error(`Error en el servidor: ${error}`));
