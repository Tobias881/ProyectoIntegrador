let elementosCargados = false;


const contenedorRecetas = document.getElementById('receta-container');
const botonCargarMas = document.getElementById('cargarMasBtn');
let recetasCargadas = 0;

if (contenedorRecetas) {
    if (botonCargarMas) {
        elementosCargados = true;
        function obtenerRecetas() {
            fetch(`https://dummyjson.com/recipes?limit=10&skip=${recetasCargadas}`)
                .then(function (respuesta) {
                    return respuesta.json();
                })
                .then(function (datos) {
                    if (datos) {
                        if (datos.recipes) {
                            if (datos.recipes.length > 0) {
                                const recetas = datos.recipes;
                                mostrarRecetas(recetas);
                                // if (recetasCargadas >= recetas.length) {
                                //     botonCargarMas.style.display = 'none';
                                // }
                            }
                        }
                    }
                })
                .catch(function (error) {
                    console.log("Error: " + error);
                });
        }

        function mostrarRecetas(recetas) {
            console.log('llego recetas', recetasCargadas)
            let recetasHTML = '';
            for (let i = 0; i < recetas.length; i++) {
                const receta = recetas[i];
                recetasHTML += `
                            <div class="receta-card">
                                <img src="${receta.image}" alt="${receta.name}" class="receta-img">
                                <h2 class="receta-titulo">${receta.name}</h2>
                                <p class="receta-dif">Dificultad: ${receta.difficulty}</p>
                                <a href="receta.html?id=${receta.id}" class="receta-link">Ver Detalles</a>
                            </div>
                        `;


            }

            contenedorRecetas.innerHTML += recetasHTML;
        }

        obtenerRecetas();




    }
}

botonCargarMas.addEventListener('click', function (e) {
    e.preventDefault()
    recetasCargadas += 10
    obtenerRecetas();
});

if (elementosCargados === false) {
    console.error('No se encontraron los elementos necesarios después de varios intentos.');
}
