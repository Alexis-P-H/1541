if (typeof Storage !== "undefined") {
  // Obtener los datos de localStorage
  var getDato = localStorage.getItem(dato);
  
  // Obtener el dato de la URL
  var parametroCode = window.location.search;
  var dato = parametroCode.substring(parametroCode.indexOf("=") + 1);

  // Verificar si sessionStorage está disponible
  const VISIT_COUNT_KEY = "visitCount";
  let visitCount = parseInt(sessionStorage.getItem(VISIT_COUNT_KEY)) || 0;

  // Incrementar el contador de visitas
  visitCount++;

  // Guardar el nuevo valor de visitas en sessionStorage
  sessionStorage.setItem(VISIT_COUNT_KEY, visitCount);

  // Mostrar el contador en la consola o en el HTML
  console.log("Número de visitas: " + visitCount);

  // Mostrar el dato en la consola
  console.log("este es el dato: " + dato);
  console.log("Este es el tipo de dato " + typeof dato)
  
  // Obtener o inicializar el array de parámetros
  let parametrosGuardadosEnMemoria = JSON.parse(localStorage.getItem("parametros")) || [];
  console.log("parametros guardadinis " + parametrosGuardadosEnMemoria)
  
  if (dato.trim() !== "") {  // Asegúrate de que dato no sea una cadena vacía ni contenga solo espacios
    let datoYaGuardado = parametrosGuardadosEnMemoria.includes(dato);  // Verifica si dato ya está en parametrosPreRecuperados
  
    if (datoYaGuardado) {
      console.log("Manito ese parametro ya se encuentra guardado");
    } else {
      // Agregar el parámetro al array y guardar en LocalStorage
      parametrosGuardadosEnMemoria.push(dato);
      localStorage.setItem("parametros", JSON.stringify(parametrosGuardadosEnMemoria));
      console.log("Mani agregamos ese parametro porque no existía " + dato);
    }
  } else { 
    console.log("El dato no puede ser una cadena vacía");
  }

  // Traemos el objeto por ID y lo guardamos en MyQr
  let myQr = document.getElementById("codigo1");
  let myQr2 = document.getElementById("codigo2");
  let myQr3 = document.getElementById("codigo3");
  let myQr4 = document.getElementById("codigo4");
  let myQr5 = document.getElementById("codigo5");

  setTimeout(() => {
  if (parametrosGuardadosEnMemoria) {
    parametrosGuardadosEnMemoria.forEach((parametro) => { 
      switch (parametro) {
        case "randomizeCode1":
          console.log(`Log dentro de case randomizeCode: ${parametro}`);
          console.log("Se cambia propiedad de css: " + dato);
          myQr.style.display = "block";
          break;
        case "randomizeCode2":
          console.log(`Log dentro de case randomizeCode: ${parametro}`);
          console.log("Se cambia propiedad de css: " + dato);
          myQr2.style.display = "block";
          break;
        case "randomizeCode3":
          myQr3.style.display = "block";
          break;
        case "randomizeCode4":
          myQr4.style.display = "block";
          break;
        case "randomizeCode5":
          myQr5.style.display = "block";
          break;
        default:
            console.log('No hay parametros guardado');
      }
    });
  } else {
    console.log("No hay parámetros guardados");
  }
  }, 500);

  //history.replaceState() oculta los parametros de URL
  history.replaceState({}, document.title, window.location.pathname);
  if (visitCount != 0) {
    // Al cargar la página suma
  } else {
    console.log("Lo siento, tu navegador no es compatible con sessionStorage.");
  }
}
