var vp = document.getElementById("villaplatzi");
var paper = vp.getContext("2d");
document.addEventListener("keyup", moverLobo);

var xLobo = 218;
var yLobo = 218;
function moverLobo(evento)
{
    var movimiento = 64;
    var teclas = {
        UP: 38,
        DOWN: 40,
        LEFT: 39,
        RIGHT: 37
    };
    switch(evento.keyCode)
    {
        case teclas.UP:
        yLobo = yLobo - movimiento;
        dibujar();
        break;

        case teclas.DOWN:
        yLobo = yLobo + movimiento;
        dibujar();
        break;

        case teclas.RIGHT:
        xLobo = xLobo - movimiento;
        dibujar();
        break;

        case teclas.LEFT:
        xLobo = xLobo + movimiento;
        dibujar();
        break;
        
        default:
        console.log("otra tecla");

    }
}

var fondo = {
    url: "tile.png",
    cargaOK: false
}
var vaca = {
    url: "vaca.png",
    cargaOK: false

}
var cerdo = {
    url: "cerdo.png",
    cargaOK: false

}
var pollo = {
    url: "pollo.png",
    cargaOK: false

}
var lobo ={
    url: "lobo.png",
    cargaOK: false,
    posX: 225,
    posY: 225
}

var n = random(0,4);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargarLobo);

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}
function cargarVaca()
{
    vaca.cargaOK = true;
    dibujar();
}
function cargarCerdo()
{
    cerdo.cargaOK = true;
    dibujar();
}
function cargarPollo()
{
    pollo.cargaOK = true;
    dibujar();
}
function cargarLobo()
{
    lobo.cargaOK = true;
    dibujar();
}

function dibujar()
{
    if(fondo.cargaOK)
    {
        paper.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK)
    {
        console.log(n)
        for(var v=0; v < n; v++)
         {
            var x = random(0, 7);
            var y = random(0, 7);
            var x = x * 60;
            var y = y * 60;
            paper.drawImage(vaca.imagen, x, y);
         }
    }
    if(cerdo.cargaOK)
    {
        for(var c=0; c < n; c++)
        {
            var x = random(0, 7);
            var y = random(0, 7);
            var x = x * 60;
            var y = y * 60;
            paper.drawImage(cerdo.imagen, x, y);
        }
    }
    if(pollo.cargaOK)
    {
        for(var c=0; c < n; c++)
        {
            var x = random(0, 7);
            var y = random(0, 7);
            var x = x * 60;
            var y = y * 60;
            paper.drawImage(pollo.imagen, x, y);
        }
    }
    if(lobo.cargaOK)
    paper.drawImage(lobo.imagen, xLobo, yLobo);
}

function random(min, maxi)
{
    var result;
    result = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return result;
}