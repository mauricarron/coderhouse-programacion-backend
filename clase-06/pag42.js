const fs = require("fs");

fs.promises
  .readFile("../info.txt", "utf-8")
  .then((data) => {
    let info = JSON.parse(data);
    console.log(info);

    info.contenidoObj.author = `CoderHouse`;
    async function writeNewFile() {
      try {
        fs.promises.writeFile(
          "../package.json.coder",
          JSON.stringify(info.contenidoObj, null, "\t")
        );
      } catch (error) {
        console.error("No se pudo escribir el archivo: ", error);
      }
    }
    writeNewFile();
  })
  .catch((error) => {
    console.log("No se pudo leer el archivo: ", error);
  });
