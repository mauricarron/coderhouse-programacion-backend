function* idGenerator() {
  let i = 0;
  while (true) yield i++;
}

const gen = idGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

function crearIterador(arr) {
  let nextId = 0;

  return {
    next: function () {
      return nextId < arr.length
        ? { value: arr[nextId++], done: false }
        : { done: true };
    },
  };
}

const iterador = crearIterador(["yo", "ya", "yi"]);

console.log(iterador.next().value);
console.log(iterador.next().value);
// console.log(iterador.next().value);
console.log(iterador.next().done);
