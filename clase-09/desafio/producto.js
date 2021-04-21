export class Producto {
  constructor() {
    this.listaProductos = [];
    this.nextIdProductos = 0;
  }

  get() {
    return this.listaProductos.length
      ? [...this.listaProductos]
      : { error: "no hay productos cargados" };
  }

  getByID(id) {
    const reqProducto = this.listaProductos.find(
      (producto) => producto.id == id
    );
    return reqProducto || { error: "producto no encontrado" };
  }

  add(data) {
    const nuevoProducto = { ...data, id: ++this.nextIdProductos };
    this.listaProductos.push(nuevoProducto);
    return nuevoProducto;
  }

  update(data, id) {
    this.listaProductos = this.listaProductos.map((producto) => {
      if (producto.id == id) {
        producto.title = data.title;
        producto.price = data.price;
        producto.thumbnail = data.thumbnail;
      }
      return producto;
    });
    console.log(this.listaProductos);
    return data;
  }

  delete(id) {
    const deletedProducto = this.listaProductos.filter(
      (producto) => producto.id == id
    );
    this.listaProductos = this.listaProductos.filter(
      (producto) => producto.id !== Number(id)
    );
    return deletedProducto;
  }
}
