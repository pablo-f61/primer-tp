/* Inspirado en la obra de Frieder Nake

https://creacionhibrida.net/frieder-nake-pionero-del-arte-algoritmico/

A partir del movimiento del mouse, varía si el movimiento es rá pido o lento. El circulo que se mueve de izquierda a derecha aparecen con el movimiento rápido del mouse soble el lienzo */

let circul = 100;

function setup() {
  createCanvas(512, 512);
  background(220)
}

function draw() {
  
  // Dos conjuntos de lineas que se generan de forma random
  
  for (let x = 20; x < width; x += 120) {
    let mx = mouseX / 1;
    let desplazamientoA =  int (random(-mx, mx));
    let desplazamientoB  = int (random(-mx, mx));
    line(x - desplazamientoA, 120, x + desplazamientoB, 510);
    for (let x = 320; x < width; x += 320) {
      let desplazamientoA = int (random(-mx, mx));
      let desplazamientoB = int (random(-mx, mx));
      line(x - desplazamientoA, 2, x + desplazamientoB, 120);
    }
   
   // Circulo mas grande fijo  
    
    push();
    fill(150);
    strokeWeight(200);
    point(180, 230);
  
  //  movimiento del circulo 
    
    circul += 1;
    
    pop();

    fill(200);
    circle(310, 325, 105);
    stroke(110);
    
  // Despazamiento del circulo 
    
    push();
    if (frameCount <= desplazamientoB) {
      fill(155);
      if (circul <= width) {
        background(20);
        circle(circul, 210, 150);
        pop();
        stroke(126);
      }
    }
  }
}
document.oncontextmenu = function () {
  return false;
};