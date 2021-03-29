import { Observable } from "rxjs";

// PULL SINGLE - FUNCTION
/*
function* idGenerator() {
  let i = 0;
  while (true) yield i++;
}

const gen = idGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
*/

// PULL MULTI - ITERADOR
/*
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
*/

// PUSH SINGLE - PROMISE
/*
new Promise((res, rej) => {
  setTimeout(() => {
    res("Este ");
  }, 1000);
})
  .then((res) => {
    console.log(res);
    return res + "es el ";
  })
  .then((res) => {
    console.log(res);
    return res + "texto ";
  })
  .then((res) => {
    console.log(res);
    return res + "completo.";
  })
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log("ERROR: " + error);
  });
*/

//PUSH SINGLE - OBSERVABLE
const observable = new Observable((suscriber) => {
  suscriber.next(1);
  suscriber.next(2);
  suscriber.next(3);
  setTimeout(() => {
    suscriber.next(4);
    suscriber.complete();
  }, 1000);
});

console.log("Antes de suscribirse al observable");
observable.subscribe({
  next(x) {
    console.log("step ", x);
  },
  error(err) {
    console.log("ERROR: ", err);
  },
  complete() {
    console.log("Finish.");
  },
});
console.log("Despues de la suscripcion al observable");
