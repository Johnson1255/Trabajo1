// https://pokeapi.co/api/v2/pokemon/

let contenedor;
const total_pokemons = 1126;

window.onload = inicio;

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function inicio()
{
    contenedor = document.getElementById("vitrina");
    window.addEventListener("click",pintarVitrina);
}

function pintarVitrina(evento){
    contenedor.innerHTML = "";
    traerDatos(aleatorio(1,total_pokemons));
    traerDatos(aleatorio(1,total_pokemons));
    traerDatos(aleatorio(1,total_pokemons));
    traerDatos(aleatorio(1,total_pokemons));
    traerDatos(aleatorio(1,total_pokemons));
}

function traerDatos(id){
    fetch (`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(function(data){
        let nombre = data.name;
        let url = data.sprites.ther.dream.world.front_default;
        if(nombre && url)
        {
            imprimirTarjeta(nombre,url);
        }
    });
}

function imprimirTarjeta(nombre,url)
{
    let template = `<div class="tarjeta">
    <img src="${url}" alt = "" >
    <br>
    <label for="">
    ${nombre}
    </label> <br>
    <a href="">Ver Más...</a>
    </div>`;
    contenedor.innerHTML += template;
}

