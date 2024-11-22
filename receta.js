let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");

const receta = document.querySelector('.receta');

fetch(`https://dummyjson.com/recipes/${id}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let markUp = `
            <article>
                <h1>${data.name}</h1>
                <p>Instrucciones: ${data.instructions}</p>
                <p>Tiempo de cocción: ${data.prepTimeMinutes} minutos</p>
                <img src="${data.image}" alt="${data.name}">
                <p>Categorías: ${data.mealType}</p>
            </article>
        `;
        receta.innerHTML = markUp;
    })
    .catch(function(error) {
        console.log("Error: " + error);
    });
