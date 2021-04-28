const socket = io();

const $form = document.querySelector("#form");
const $input = document.querySelector("#input");
const $text = document.querySelector("#text");

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  socket.emit("submit", $input.value);

  $form.reset();
});

socket.on("print", (data) => {
  $text.innerHTML = "";
  if (data.length > 0) {
    data.forEach((item) => {
      const mensaje = document.createElement("p");
      mensaje.innerHTML = `<small class="text-muted">${item.socketid} </small>${item.mensaje}`;

      $text.append(mensaje);
    });
  }
});
