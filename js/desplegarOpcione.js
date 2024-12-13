// Seleccionar todos los textos desplegables y sus contenidos
const textosDesplegables = document.querySelectorAll('.texto-desplegable');
textosDesplegables.forEach(texto => {
  texto.addEventListener('click', () => {
    const contenido = texto.nextElementSibling;

    // Verificar si el contenido relacionado es desplegable
    if (contenido && contenido.classList.contains('contenido-oculto')) {
      contenido.classList.toggle('activo');
    }
  });
});
