const params = new URL(document.location).searchParams;
const query = params.get('query') || '';

const buscadorFormulario = document.getElementById("buscadorFormulario");
const contenedorRecetas = document.getElementById("recetas-container");

buscadorFormulario.addEventListener("submit", function (event) {
    if (!validarCampoBusqueda()) {
        event.preventDefault();
    }
});

function validarCampoBusqueda() {
    const campoBusqueda = document.getElementById("campoBusqueda");
    const termino = campoBusqueda.value;

    if (termino === "") {
        campoBusqueda.placeholder = "Campo vacío";
        campoBusqueda.style.borderColor = "red";
        console.log("Campo de búsqueda vacío");
        return false;
    } else if (termino.length < 3) {
        campoBusqueda.value = "";
        campoBusqueda.placeholder = "Menos de 3 caracteres";
        campoBusqueda.style.borderColor = "red";
        console.log("Texto de búsqueda con menos de 3 caracteres");
        return false;
    } else {
        campoBusqueda.style.borderColor = "";
        return true;
    }
}

document.querySelector('.query');

fetch(`https://dummyjson.com/recipes/search?q=${query}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const recetas = data.recipes || [];
        console.log("Recetas recibidas:", recetas);

        if (recetas.length === 0) {
            contenedorRecetas.innerHTML = '<p>No se encontraron recetas.</p>';
            return;
        }

        let markUp = '';
        for (let i = 0; i < recetas.length; i++) {
            const receta = recetas[i];
            markUp += `
                <div class="receta-card">
                    <img src="${receta.image}" alt="${receta.name}" class="receta-img">
                    <h2 class="receta-titulo">${receta.name}</h2>
                    <p class="receta-dif">Dificultad: ${receta.difficulty}</p>
                    <a href="receta.html?id=${receta.id}" class="receta-link">Ver Detalles</a>
                </div>
            `;
        }

        contenedorRecetas.innerHTML = markUp;

        
    })
    .catch(function(error) {
        console.error('Error:', error);
        contenedorRecetas.innerHTML = '<p>Error al cargar las recetas.</p>';
    });
