class Producto {
  constructor() {
    this.listaProductos = [
      {
        title: "Gyoza",
        price: "375",
        thumbnail:
          "https://cdn2.iconfinder.com/data/icons/international-food/64/gyoza-512.png",
        id: 1,
      },
      {
        title: "Arroz con Curry",
        price: "430",
        thumbnail:
          "https://cdn2.iconfinder.com/data/icons/international-food/64/curry-512.png",
        id: 2,
      },
      {
        title: "Ramen",
        price: "450",
        thumbnail:
          "https://cdn2.iconfinder.com/data/icons/international-food/64/ramen-512.png",
        id: 3,
      },
    ];
    this.nextIdProductos = 3;
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

const productos = new Producto();
export { productos };
