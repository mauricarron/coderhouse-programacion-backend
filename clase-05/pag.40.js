const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Hola");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`El servidor esta andando en el puerto ${PORT}`);
});

const greetUser = () => {
  const date = new Date();
  const hour = date.getHours();

  if (hour >= 6 && hour <= 12) {
    return "Buenos dias!";
  } else if (hour >= 13 && hour <= 19) {
    return "Buenas tardes!";
  } else {
    return "Buenas noches!";
  }
};
