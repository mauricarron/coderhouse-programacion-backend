const moduleSpecifier = "./utils/calc.js";

const operacion = (n1: number, n2: number, operador: string) => {
  return new Promise((res, rej) => {
    import(moduleSpecifier).then((calc) => {
      const oper = calc.newOper(n1, n2, operador);
      res(oper.resultado());
    });
  });
};

const operaciones = async () => {
  try {
    console.log(await operacion(15, 15, "suma"));
    console.log(await operacion(30, 10, "resta"));
    console.log(await operacion(5, 4, "noperacion"));
  } catch (error) {
    console.log(error);
  }
};

operaciones();
