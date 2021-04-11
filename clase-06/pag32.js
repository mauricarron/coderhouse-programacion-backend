const fs = require("fs");

const getFileSize = (route) => {
  let stats = fs.statSync(route);
  let fileSizeInBytes = stats.size;
  return fileSizeInBytes;
};

try {
  const packageJson = fs.readFile("../package.json", "utf-8", (error, data) => {
    if (error) {
      console.error(error);
    } else {
      const fileSize = getFileSize("../package.json");

      let info = {
        contenidoStr: JSON.stringify(data),
        contenidoObj: JSON.parse(data),
        size: fileSize,
      };
      console.log(info);

      fs.writeFile("../info.txt", JSON.stringify(info, null, "\t"), (error) => {
        if (error) {
          throw new Error("No se pudo escribir el archivo.");
        } else {
          console.log("Archivo info.txt guardado.");
        }
      });
    }
  });
} catch (e) {
  console.error(`${e.name}: ${e.message}`);
}
