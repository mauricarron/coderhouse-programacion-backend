const palabra = "coderhouse";

const fin = () => {
  console.log("Termine!");
};

const delayReturn = (item) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(item);
    }, 1000);
  });
};

const printLetters = async (text, callback) => {
  const letters = text.split("");
  for (chars in letters) {
    console.log(await delayReturn(letters[chars]));
  }

  callback();
};

console.log("Hola!");
setTimeout(() => {
  printLetters(palabra, fin);
}, 0);
setTimeout(() => {
  printLetters(palabra, fin);
}, 250);
setTimeout(() => {
  printLetters(palabra, fin);
}, 500);
