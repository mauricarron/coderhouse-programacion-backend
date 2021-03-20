class Mensaje {
  mostrar = (msg, seg = 1) => {
    const MS = seg * 1000;

    const mensaje = msg ?? "definir mensaje";
    setTimeout(
      () =>
        console.log(typeof mensaje === "string" ? mensaje.trimEnd() : mensaje),
      MS
    );
  };
}

const miMensaje = new Mensaje();
miMensaje.mostrar(false);
