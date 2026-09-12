// Esperamos a que la página cargue por completo
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleccionamos el botón usando su ID
    var boton = document.getElementById('btn-consejo');
    
    // Le agregamos la acción de escuchar el 'clic'
    boton.addEventListener('click', function() {
        // Mostramos el mensaje en pantalla
        alert('Consejo del Chef: 👨‍🍳 ¡El mole oaxaqueño sabe aún mejor si lo dejas reposar y lo comes al día siguiente!');
    });

});