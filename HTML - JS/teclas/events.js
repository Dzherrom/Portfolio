var teclas = {
    LEFT: 39,
    UP: 38,
    RIGHT: 37,
    DOWN: 40
};

document.addEventListener("keyup", DibujarTeclado);
var cuadrito = document.getElementById("dibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xini, yini, xfin, yfin, lienzo)
{
    
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xini, yini);
    lienzo.lineTo(xfin, yfin);
    lienzo.stroke();
    lienzo.closePath();

}

function DibujarTeclado(evento)
{
    var colorcito = "blue"
    var movimiento = 10;
    switch (evento.keyCode) 
    {
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento
            break;
        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento
            break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento
            break;
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento
            break;
    }
}


