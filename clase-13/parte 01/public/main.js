const socket = io();

const render = (data) => {
  const html = data
    .map((elem) => {
      return `<div>
    <strong> ${elem.author}</strong>:
    <em>${elem.text}</em> </div>`;
    })
    .join(" ");
  document.querySelector("#mensajes").innerHTML = html;
};
socket.on("messages", (data) => render(data));

function addMessage(e) {
  const mensaje = {
    author: document.getElementById("nombre").value,
    text: document.getElementById("texto").value,
  };
  socket.emit("new-message", mensaje);
  return false;
}
