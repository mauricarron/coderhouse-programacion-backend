const getRandomNumber = (min = 1, max = 20) =>
  Math.round(Math.random() * (max - min) + min);

const listaNumeros = {};
for (let i = 0; i < 10000; i++) {
  const number = getRandomNumber();
  if (!listaNumeros[number]) {
    listaNumeros[number] = 0;
  }
  listaNumeros[number]++;
}

console.log(listaNumeros);
