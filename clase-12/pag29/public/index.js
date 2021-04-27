const socket = io();

socket.on("serverMessage", (data) => {
  alert(data);
});
