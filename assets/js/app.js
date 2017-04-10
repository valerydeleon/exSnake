// 1 crear area de 5 x 5   ya
// 2 over cuadrito cada vex que se presiona una tecla
// 3 mostrar un alert de que si toa el borde ha terminado el juego
// left 37, up 38, right 39, down 40,

var areaJuego = document.getElementById("areaDeJuego")
var snake = document.getElementById('laSnake');
var botonReinicio = document.getElementById("botonReinicio")
var teclas = {
  IZQUIERDA: 37,
  ARRIBA: 38,
  DERECHA: 39,
  ABAJO: 40
};
var y = 0;
var x = 0;
var movimiento = 20;

document.addEventListener("keydown", eventoTecla);
document.addEventListener("click", reiniciarJuego);
// izq -x   -   arriba -y    der +x   -   abajo +y

function eventoTecla(queTeclaEs){

  switch (queTeclaEs.keyCode) {
    case teclas.IZQUIERDA:
    console.log("izq")
      x = x - movimiento
      snake.style.marginLeft = x.toString() + "px";
      if(x < 0){
        youLose();
      }
    break;

    case teclas.ARRIBA:
    console.log("arr")
      y = y - movimiento
      snake.style.marginTop = y.toString() + "px";
      if(y < 0){
        youLose();
      }
    break;

    case teclas.DERECHA:
    console.log("der")
      x = x + movimiento
      snake.style.marginLeft = x.toString() + "px";
      if(x > 500){
        youLose();
      }
    break;

    case teclas.ABAJO:
    console.log("aba")
      y = y + movimiento
      snake.style.marginTop = y.toString() + "px";
      if(y > 500){
        youLose();
      }
    break;

    default:
    console.log("otra tecla")
    break;
  }

}

function youLose(){
  alert("Ya perdiste Loser :3");
  bloquearTeclas();
}

function bloquearTeclas(){
  document.removeEventListener("keydown", eventoTecla);
}


function reiniciarJuego() {
  x=0;
  y=0;

  snake.style.marginTop = x;
  snake.style.marginLeft = y;
  document.addEventListener("keydown",eventoTecla);
}
