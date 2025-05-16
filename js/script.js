function generadorNumero(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

var numeroMisterioso = generadorNumero(0, 101);

function comprobar() {
  let numero = parseInt(document.getElementById("numero").value);
  let inputNum = document.getElementById("numero");
  let resultadoMenor = document.getElementById("menor");
  let resultadoMayor = document.getElementById("mayor");
  if (inputNum.value > 100 || !inputNum.value) {
    mensajeAlerta("Introduce un número entre 1 y 100");
    inputNum.value = "";
  } else {
    if (numero == numeroMisterioso) {
      inputNum.value = "";
      mensajeAlerta("Enhorabuena, has acertado el número");
      lanzarConfeti();
    } else if (numero > numeroMisterioso) {
      resultadoMenor.textContent = `El número es menor que ${numero}`;
      inputNum.value = "";
    } else if (numero < numeroMisterioso) {
      resultadoMayor.textContent = `El número es mayor que ${numero}`;
      inputNum.value = "";
    }
    cont();
  }
}

var contador = 0;

function reiniciar() {
  numeroMisterioso = generadorNumero(0, 101);
  let resultadoMenor = document.getElementById("menor");
  let resultadoMayor = document.getElementById("mayor");
  resultadoMenor.textContent = "";
  resultadoMayor.textContent = "";
  contador = 0;
  let intentos = document.getElementById("intentos");
  intentos.innerHTML = `Has realizado ${contador} intentos`;
}

function cont() {
  contador += 1;
  let intentos = document.getElementById("intentos");
  intentos.innerHTML = `Has realizado ${contador} intentos`;
}

function lanzarConfeti() {
  confetti({
    particleCount: 500,
    spread: 100,
    origin: { x: 0.5, y: 0.5 },
  });
}

document.getElementById("comprobador").addEventListener("click", comprobar);
document.getElementById("reiniciador").addEventListener("click", reiniciar);
