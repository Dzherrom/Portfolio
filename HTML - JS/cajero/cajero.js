class Billete
{
    constructor(v, c)
    {
        this.valor = v;
        this.cantidad = c;
    }
}
function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    
    for(var bi of caja)
    {
        if(dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);
            if(div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }
            
            entregado.push( new Billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);

        }
    }

    if(dinero > 0) 
        {
            resultado.innerHTML = "No queda más efectivo";
        }

    else
    {
        for(var e of entregado)
        {
            resultado.innerHTML +=  + e.cantidad + " billetes de $" + e.valor + "<br />";
        }
    }
}

var caja = [];
var entregado = [];
caja.push( new Billete(100,10));
caja.push( new Billete(50,10));
caja.push( new Billete(20,30));
caja.push( new Billete(10,10));
caja.push( new Billete(5,5));
var div = 0;
var papeles = 0;
var dinero = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("retirar");
b.addEventListener("click", entregarDinero);