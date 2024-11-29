const params = new URL(document.location).searchParams;
const category = params.get('category') || '';

const nombreCategoriaElemento = document.getElementById('categoria-nombre');
const contenedorRecetas = document.getElementById('recetas-container');



fetch(`https://dummyjson.com/recipes/tag/${category}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const recetas = data.recipes || [];
        console.log("Recetas recibidas:", recetas);

        if (recetas.length === 0) {
            contenedorRecetas.innerHTML = '<p>No se encontraron recetas en esta categoría.</p>';
            return;
        }

        let markUp = '';
        for (let i = 0; i < recetas.length; i++) {
            const receta = recetas[i];
            markUp += `
                <div class="receta-card">
                    <img src="${receta.image}" alt="Foto de ${receta.title}" class="receta-img">
                    <h2>${receta.name}</h2>
                    <p><strong>Nivel de dificultad:</strong> ${receta.difficulty}</p>
                    <a href="receta.html?id=${receta.id}" class="btnVerMas">Ver detalle</a>
                </div>
            `;
        }

        contenedorRecetas.innerHTML = markUp; 
       
    })
    .catch(function(error) {
        console.error('Error:', error);
        contenedorRecetas.innerHTML = '<p>Error</p>';
    });
