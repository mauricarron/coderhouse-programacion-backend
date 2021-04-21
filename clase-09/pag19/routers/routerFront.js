import express from "express";
import path from "path";

const crearRouterFront = () => {
  const routerFront = express.Router();
  routerFront.use(express.json());
  routerFront.use(express.urlencoded({ extended: true }));

  routerFront.get("/", (req, res) => {
    res.sendFile(path.resolve("./views/index.html"));
  });

  return routerFront;
};

export { crearRouterFront };
