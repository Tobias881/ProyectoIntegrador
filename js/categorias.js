
const categoriasContainer = document.getElementById('categorias-container');

fetch('https://dummyjson.com/recipes/tags')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        categoriasContainer.innerHTML = '';

        let htmlCategorias = ''; 

        for (let i = 0; i < data.length; i++) {
            const categoria = data[i];

            htmlCategorias += `
                <boton class="categoria-btn" onclick="window.location.href='categoria.html?category=${categoria}'">
                    ${categoria}
                </boton>
            `;
        }

        categoriasContainer.innerHTML = htmlCategorias;
    })
    .catch(function(error) {
        console.error('Error al obtener las categorías:', error);
    });
