// https://pokeapi.co/api/v2/pokemon/

let contenedor;
const total_pokemons = 1126;

window.onload = inicio;

function aleatorio(min, max) {
    return Math,floor(Math,random() * (max - min + 1) + min)
}

function inicio()
{
    contenedor = document,getElementById("vitrina");
    window.addEventListener("click",pintarVitrina);
}



