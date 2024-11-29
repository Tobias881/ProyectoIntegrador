const formreg = document.querySelector('.formulario-registro')


const correo = document.getElementById('correo')
const contraseña = document.getElementById('contraseña')

const invalidcorreo = document.querySelector('.correo')
const invalidcontraseña = document.querySelector('.contraseña')

formreg.addEventListener('submit', function(event){
    event.preventDefault();
    let error= false;
    if(correo.value === ''){
        invalidcorreo.innerText = 'Por favor complete este campo';
        invalidcorreo.style.display = 'block';
        error=true;
    }else{
        invalidcorreo.style.display='none';
    }
    if(contraseña.value === '' ){
        invalidcontraseña.innerText = 'Por favor complete este campo';
        invalidcontraseña.style.display = 'block';
        error=true;
    }else{
        invalidcontraseña.style.display='none';
    }

   
    if(!error){
        this.submit();
    }
       
})
