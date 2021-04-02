const getRandomNumber = (min = 1, max = 10) =>
  Math.round(Math.random() * (max - min) + min);

const getProduct = () => {
  return {
    id: getRandomNumber(),
    title: "Producto " + getRandomNumber(),
    price: getRandomNumber(0, 10000).toFixed(2),
    thumbnail: "Foto " + getRandomNumber(),
  };
};

const http = require("http");

const server = http.createServer((req, res) => {
  res.end(JSON.stringify(getProduct()));
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`El servidor esta andando en el puerto ${PORT}`);
});
