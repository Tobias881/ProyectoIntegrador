const buscadorFormulario = document.getElementById("buscadorFormulario");

buscadorFormulario.addEventListener("submit", function(event) {
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

