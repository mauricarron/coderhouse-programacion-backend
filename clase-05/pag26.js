let productos = [
  {
    id: 1,
    nombre: "Escuadra",
    precio: 323.45,
  },
  {
    id: 2,
    nombre: "Calculadora",
    precio: 234.56,
  },
  {
    id: 3,
    nombre: "Globo Terráqueo",
    precio: 45.67,
  },
  {
    id: 4,
    nombre: "Paleta Pintura",
    precio: 456.78,
  },
  {
    id: 5,
    nombre: "Reloj",
    precio: 67.89,
  },
  {
    id: 6,
    nombre: "Agenda",
    precio: 78.9,
  },
];

const getProductName = (arr) => arr.map((item) => item.nombre).join(", ");
const getTotalPrice = (arr) => arr.reduce((acc, item) => acc + item.precio, 0);
const getAveragePrice = (arr) => getTotalPrice(arr) / arr.length;
const getLowestPrice = (arr) => {
  product = arr[0].nombre;
  lowestPrice = arr[0].precio;
  for (const item of arr) {
    if (item.precio < lowestPrice) {
      lowestPrice = item.precio;
      product = item.nombre;
    }
  }
  return product;
};
const getHighestPrice = (arr) => {
  product = arr[0].nombre;
  highestPrice = arr[0].precio;
  for (const item of arr) {
    if (item.precio > highestPrice) {
      lowestPrice = item.precio;
      product = item.nombre;
    }
  }
  return product;
};

const listaProductos = {
  items: getProductName(productos),
  totalPrice: Number(getTotalPrice(productos).toFixed(2)),
  averagePrice: Number(getAveragePrice(productos).toFixed(2)),
  lowestPriceItem: getLowestPrice(productos),
  highestPriceItem: getHighestPrice(productos),
};

console.log(listaProductos);
