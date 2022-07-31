function validarFormulario() {
    var nombre = document.getElementById('Name');
    var correo = document.getElementById('Email');
    if(nombre.validity.valid && correo.validity.valid) {
        return true;
    }
    return false;
}

function contactAlert(){
    if (validarFormulario()){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: '¡Mensaje enviado!\nPronto nos contactaremos contigo',
            showConfirmButton: false,
            timer: 3000
        })
    }
}