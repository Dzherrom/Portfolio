var cafecito = require("express");
var app = cafecito();

app.get("/", inicio);
app.get("/cursos", cursos);

function inicio(peticion, resultado)
{
    resultado.send("este es el <strong>home</strong>");
}

function cursos(peticion, resultado)
{
    resultado.send("esto son los <strong>cursos</strong>");
}

app.listen(8989);