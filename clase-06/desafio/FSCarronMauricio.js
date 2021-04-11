import fs from "fs";

class Archivo {
  constructor(fileName) {
    this.fileName = fileName;
  }

  async leer() {
    try {
      const listaProductos = await fs.promises.readFile(this.fileName, "utf-8");
      console.log(listaProductos);
      return JSON.parse(listaProductos);
    } catch (error) {
      console.error(`No se pudo LEER el archivo. ${error}`);
      return [];
    }
  }

  async guardar(producto, precio, imagen) {
    try {
      const listaProductos = await this.leer();
      const nuevoProducto = {
        id: listaProductos.length + 1,
        title: producto,
        price: precio,
        thumbnail: imagen,
      };
      listaProductos.push(nuevoProducto);

      await fs.promises.writeFile(
        this.fileName,
        JSON.stringify(listaProductos, null, 2)
      );

      console.log(`Se GUARDO el producto ${producto}`);
    } catch (error) {
      console.error(`No se puedo ESCRIBIR el archivo. ${error}`);
    }
  }

  async borrar() {
    await fs.promises.unlink(this.fileName);
    console.log(`${this.fileName} BORRADO.`);
  }
}

(async () => {
  const miProducto = new Archivo("./productos.txt");

  await miProducto.leer();

  await miProducto.guardar("Remera", 480, "miremera.jpg");
  await miProducto.guardar("Pantalones", 1200, "mipantalon.jpg");
  await miProducto.guardar("Zapatillas", 5500, "mizapatillas.jpg");

  await miProducto.leer();
  await miProducto.borrar();
})();
