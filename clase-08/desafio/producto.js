const listaProductos = [];
let nextIdProductos = 0;

export class Producto {
  constructor() {}

  get() {
    if (listaProductos.length < 1) {
      return false;
    }
    return listaProductos;
  }

  getByID(id) {
    const reqProducto = listaProductos.filter(
      (product) => product.id === Number(id)
    );
    if (reqProducto.length < 1) {
      return false;
    }
    return reqProducto;
  }

  add(data) {
    data.id = ++nextIdProductos;
    listaProductos.push(data);
  }
}
