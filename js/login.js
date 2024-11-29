const formlog = document.querySelector('.formulario-login');
const correo = document.getElementById('correo');
const contraseña = document.getElementById('contraseña');


formlog.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let errors = false;

    if (correo.value === '') {
        alert('Por favor complete el campo email');
        errors = true;
    } 

    if (contraseña.value === '') {
        alert('Por favor complete el campo contraseña');
        errors = true;
    } 
    if (!errors) {
        this.submit();
    }
});