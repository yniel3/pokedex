const pokemon = document.querySelector(".pokemon");
const inputValor = document.querySelector("#input-valor");
const botonBuscar = document.querySelector(".botonsito");
const alertaForm = document.querySelector(".lupa");
const link = "https://pokeapi.co/api/v2/pokemon/";
const barraDatos = document.querySelector(".personal");
const direc = document.querySelector(".id");


//valores maximos de HP, Def y Ataque
const maxHp = 255;
const maxDefensa = 200;
const maxAtaque = 190;

//mientras no se use el input valor sera 1
let valor = 94;

//el escuchador de eventos con la llamada al fetch
botonBuscar.addEventListener('click', (event) =>{
    event.preventDefault();

    valor = inputValor.value;
    fetch(link + valor)
    .then((response) => response.json())
    .then((data) => {

        // mostrar la ID
        const direccion = document.querySelector(".direccion");
        direccion.textContent = `#${data.id}`;
        pokemon.appendChild(direccion);
        //para enseñar la imagen
        const imagen = document.querySelector(".imagen");
        imagen.innerHTML = `<img src="${data.sprites.other.showdown.front_default}" alt="">`;
        pokemon.appendChild(imagen);
        //mostrar el nombre
        const nombre = document.querySelector(".nombre");
        nombre.textContent = data.name;
        pokemon.appendChild(nombre);
        
        //agregar las clases
        let tipos = data.types.map((type) => `<li class="${type.type.name} tipo">${type.type.name}</li>`);
        tipos = tipos.join("");
        const clases = document.querySelector(".tipo");
        clases.innerHTML = `<ul>${tipos}</ul>`;
        pokemon.appendChild(clases);
        //añadiendo peso y metros
        const stats = document.querySelector(".stats");
        stats.innerHTML = `<div>${data.height} M</div><div>${data.weight} KG</div>`;
        pokemon.appendChild(stats);

        const hp = data.stats[0].base_stat;
        const defensa = data.stats[2].base_stat;
        const ataque = data.stats[1].base_stat;
        const hpPorcentaje = (hp / maxHp) * 100;
        const defensaPorcentaje = (defensa / maxDefensa) * 100;
        const ataquePorcentaje = (ataque / maxAtaque) * 100;

        const barraHp = document.querySelector("#barra-hp");
        barraHp.style.width = `${hpPorcentaje}%`; 
        barraHp.textContent = `HP: ${hp}`; 
        barraDatos.append(barraHp);
        

        const barraDefensa = document.querySelector("#barra-defensa");
        barraDefensa.style.width = `${defensaPorcentaje}%`;
        barraDefensa.textContent = `Defensa: ${defensa}`;
        barraDatos.append(barraDefensa);

        const barraAtaque = document.querySelector("#barra-ataque");
        barraAtaque.style.width = `${ataquePorcentaje}%`;
        barraAtaque.textContent = `Ataque: ${ataque}`;
        barraDatos.append(barraAtaque);

        pokemon.appendChild(barraDatos);
    
    });

    alertaForm.reset();
})

fetch(link + valor)
    .then((response) => response.json())
    .then((data) => {

        // mostrar la ID
        const direccion = document.querySelector(".direccion");
        direccion.textContent = `#${data.id}`;
        pokemon.appendChild(direccion);
        //para enseñar la imagen
        const imagen = document.querySelector(".imagen");
        imagen.innerHTML = `<img src="${data.sprites.other.showdown.front_default}" alt="">`;
        pokemon.appendChild(imagen);
        //mostrar el nombre
        const nombre = document.querySelector(".nombre");
        nombre.textContent = data.name;
        pokemon.appendChild(nombre);
        
        //agregar las clases
        let tipos = data.types.map((type) => `<li class="${type.type.name} tipo">${type.type.name}</li>`);
        tipos = tipos.join("");
        const clases = document.querySelector(".tipo");
        clases.innerHTML = `<ul>${tipos}</ul>`;
        pokemon.appendChild(clases);
        //añadiendo peso y metros
        const stats = document.querySelector(".stats");
        stats.innerHTML = `<div>${data.height} M</div><div>${data.weight} KG</div>`;
        pokemon.appendChild(stats);

        const hp = data.stats[0].base_stat;
        const defensa = data.stats[2].base_stat;
        const ataque = data.stats[1].base_stat;
        const hpPorcentaje = (hp / maxHp) * 100;
        const defensaPorcentaje = (defensa / maxDefensa) * 100;
        const ataquePorcentaje = (ataque / maxAtaque) * 100;

        const barraHp = document.querySelector("#barra-hp");
        barraHp.style.width = `${hpPorcentaje}%`; 
        barraHp.textContent = `HP: ${hp}`; 
        barraDatos.append(barraHp);
        

        const barraDefensa = document.querySelector("#barra-defensa");
        barraDefensa.style.width = `${defensaPorcentaje}%`;
        barraDefensa.textContent = `Defensa: ${defensa}`;
        barraDatos.append(barraDefensa);

        const barraAtaque = document.querySelector("#barra-ataque");
        barraAtaque.style.width = `${ataquePorcentaje}%`;
        barraAtaque.textContent = `Ataque: ${ataque}`;
        barraDatos.append(barraAtaque);

        pokemon.appendChild(barraDatos);
    })



