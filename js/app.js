const modalImagen = document.querySelector('#modal-imagen');
const modalBody = document.querySelector('.modal-body');

if(modalImagen) {
  modalImagen.addEventListener('show.bs.modal', (e) => {
    const rutaImagen = e.relatedTarget.getAttribute('data-bs-imagen');
  
    // Scripting de la imagen
    const imagen = document.createElement('IMG');
    imagen.src = `img/${rutaImagen}.jpg`;
    imagen.alt = 'imagen galeria'
    imagen.classList.add('img-fluid');
  
    modalBody.appendChild(imagen);
  
  });
  
  modalImagen.addEventListener('hidden.bs.modal', () => {
    modalBody.textContent = ''
  });
}

(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()