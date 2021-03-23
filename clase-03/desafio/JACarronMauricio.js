const ejemploTexto1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu vitae elementum curabitur vitae nunc sed.";

const ejemploTexto2 =
  "Porttitor lacus luctus accumsan tortor. Viverra vitae congue eu consequat.";

const ejemploTexto3 =
  "Semper feugiat nibh sed pulvinar proin. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Dignissim diam quis enim lobortis scelerisque fermentum dui.";

const procesoCompleto = (counter) => {
  console.log(`Proceso completo.\n${counter} palabras totales.`);
};

const delay = (element, seg) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(element);
    }, seg * 1000);
  });
};

const mostrarPalabras = async (txt, callback) => {
  const timer = 1;
  let counter = 0;
  const wordList = txt.split(" ");
  for (const word of wordList) {
    counter++;
    console.log(await delay(word, timer));
  }

  callback(counter);
};

(async function tests() {
  await mostrarPalabras(ejemploTexto1, procesoCompleto);
  await mostrarPalabras(ejemploTexto2, procesoCompleto);
  await mostrarPalabras(ejemploTexto3, procesoCompleto);
})();
