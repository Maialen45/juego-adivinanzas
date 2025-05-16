const mensajeAlerta = (mensaje) => {
  let alerta = document.createElement("div");
  alerta.className = "alerta";
  alerta.innerHTML = `<p>${mensaje}</p>
            <button id="botonAceptar">Aceptar</button>
        `;
  document.body.appendChild(alerta);

  const botonAceptar = document.getElementById("botonAceptar");

  botonAceptar.onclick = function () {
    alerta.remove();
  };
};
