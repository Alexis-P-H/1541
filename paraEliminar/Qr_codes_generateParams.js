
if (typeof Storage !== "undefined") {
    // Verificar si sessionStorage está disponible
    const VISIT_COUNT_KEY = 'visitCount';
    let visitCount = parseInt(sessionStorage.getItem(VISIT_COUNT_KEY)) || 0;
    // Incrementar el contador de visitas
    visitCount++;
    // Guardar el nuevo valor en sessionStorage
    sessionStorage.setItem(VISIT_COUNT_KEY, visitCount);

    // Mostrar el contador en la consola o en el HTML
    console.log('Número de visitas: ' + visitCount);

    //Acá recibe parametros
    const paramURL = window.location.search;
    console.log('Parametros de URL obtenidos: '+ paramURL);

    //Acá asignamos paramURL a  parametrosURl para recorrer el array
    const parametrosURL = new URLSearchParams(paramURL);
    console.log('Tipo de URL obtenida: '+typeof(parametrosURL));

    for (let valoresURL of parametrosURL) {
        console.log("for: ", valoresURL);
    }

    const tokenSeguridad = parametrosURL.get('token')
    console.info('El token es: ' + tokenSeguridad)

    if (tokenSeguridad != null) {
        // Guardar datos en localStorage
        sessionStorage.setItem('Dato', tokenSeguridad);
        window.onload = function () {
            var dato = sessionStorage.getItem('Dato');
            console.log(dato)
            // Redirigir a otra página y pasar los datos como parámetro en la URL
            window.location.href = 'file:///D:/Proyectos/personal/1541proyectDavid/Qr_codes_tokenCheck.html' + encodeURI(dato);
            return dato;
        }
        
    //history.replaceState() oculta los parametros de URL
    history.replaceState({}, document.title, window.location.pathname);
    }
} else {
    console.log('Lo siento, tu navegador no es compatible con sessionStorage.');
}