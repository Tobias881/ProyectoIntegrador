const buscadorFormulario = document.getElementById("buscadorFormulario");

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

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('receta-container');
    const cargarMasBtn = document.getElementById('cargarMasBtn');

    const url = 'https://dummyjson.com/recipes';

    let loadedRecetas = 0;
    const recetasPerLoad = 10;

    function fetchRecetas() {
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                if (data) {
                    if (data.recipes) {
                        if (data.recipes.length > 0) {
                            const recetas = data.recipes;
                            renderRecetas(recetas);
                            if (loadedRecetas >= recetas.length) {
                                cargarMasBtn.style.display = 'none';
                            }
                        } 
                    } 
                } 
            })
            .catch(function (error) {
                console.log("Error: " + error);
            });
    }

    function handleNoRecipesFound() {
        console.error('No se encontraron recetas');
        cargarMasBtn.style.display = 'none';
        for (let i = 0; i < 5; i++) {
            let fallbackHTML = `
                <div class="receta-card">
                    <h2 class="receta-title">No se encontraron recetas</h2>
                    <p>Por favor, intenta más tarde.</p>
                </div>
            `;
            container.innerHTML += fallbackHTML;
        }
    }
    function renderRecetas(recetas) {
        let recetasHTML = '';
        for (let i = loadedRecetas; i < recetas.length; i++) {
            if (i < loadedRecetas + recetasPerLoad) {
                const receta = recetas[i];
                recetasHTML += `
                    <div class="receta-card">
                        <img src="${receta.image}" alt="${receta.name}" class="receta-img">
                        <h2 class="receta-title">${receta.name}</h2>
                        <p class="receta-dif">Dificultad: ${receta.difficulty}</p>
                        <a href="#" class="receta-link">Ver Detalles</a>
                    </div>
                `;
            }
        }
        container.innerHTML += recetasHTML;
        loadedRecetas += recetasPerLoad;
    }

    fetchRecetas();

    cargarMasBtn.addEventListener('click', function () {
        fetchRecetas();
    });
});
