 // Seleccionamos el texto desplegable y el contenido oculto
 const textoDesplegable = document.getElementById('texto-desplegable');
 const contenidoOculto = document.querySelector('.contenido-oculto');

 // Agregamos el evento de clic
 textoDesplegable.addEventListener('click', () => {
   // Alternamos la clase 'activo' para mostrar u ocultar el contenido
   contenidoOculto.classList.toggle('activo');
 });