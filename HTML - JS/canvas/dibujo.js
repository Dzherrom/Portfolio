var texto = document.getElementById("input_lineas");
var button = document.getElementById("dot");
button.addEventListener("click", clickInButton);
var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");



//do{
//    l++;
//    yi = 10 * l;
//    xf = 10 * (l + 1);
//   dibujarLinea("red", 0, yi, xf, 300)
//    dibujarLinea("blue", 300, yi, xf, 0 )
//    console.log("linea " + l);;
//} while (l < lineas);
    

function dibujarLinea(color, xini, yini, xfin, yfin)
{
    
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xini, xfin);
    lienzo.lineTo(yini, yfin);
    lienzo.stroke();
    lienzo.closePath();

}

function clickInButton()
{
    parseInt(texto.value);
    var lineas = texto.value;
    var l = 0;
    var yi, xf;
    
    while(l < lineas)
    {
     yi = 10 * l;
     xf = 10 * (l + 1);
     dibujarLinea("red", 0, yi, xf, 300)
     dibujarLinea("blue", 300, yi, xf, 0 )
     console.log("linea" + l);
     l = l + 1;
    }
}

