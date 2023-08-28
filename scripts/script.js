// Ajustes para búsqueda de productos

// Obtiene el input (campo) de búsqueda y la lista de productos.
const busquedaInput = document.getElementById('busqueda');
const productos = document.querySelectorAll('.producto-contenedor');

// Creo un evento que se activa cuando el usuario escribe en el campo de búsqueda.
busquedaInput.addEventListener('input', () => {
    // Convierte el texto que ingresan a minúsculas para que no me de problemas en el caso de que ingresen mayúsculas.
    const busquedaTexto = busquedaInput.value.toLowerCase();

    // Itera sobre cada producto de la lista, es decir, pasa por cada producto muchas veces.
    productos.forEach(producto => {
        // Obtiene el nombre del producto en minúsculas para la comparación con el texto ingresado. Me sirve porque anteriormente convertí el texto ingresado a minúsculas también.
        const nombreProducto = producto.querySelector('.nombre-producto').textContent.toLowerCase();

        // Verifica si el nombre del producto incluye el texto ingresado en la búsqueda
        if (nombreProducto.includes(busquedaTexto)) {
            producto.style.display = 'block'; // Muestra el producto si coincide
        } else {
            producto.style.display = 'none'; // Oculta el producto si no coincide
        }
    });
});



// Ajustes para Botón Volver arriba

// Obtiene el botón "Volver arriba"
const backToTopButton = document.getElementById('volver-arriba');

// Muestra/oculta el botón según la posición de desplazamiento de la página
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.remove('hidden'); // Muestra el botón si bajé lo suficiente en mi página
    } else {
        backToTopButton.classList.add('hidden'); // Oculta el botón si estoy cerca del principio de mi página
    }
});

// Realiza un desplazamiento suave al hacer click en el botón "Volver arriba"
backToTopButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



// Ajustes para el form de suscribirse

// Obtiene el form de suscripción, el campo de correo electrónic y el mensaje de estado. 
const subscriptionForm = document.getElementById('subscription-form');
const emailInput = document.getElementById('email');
const statusMessage = document.getElementById('subscription-status');

// Agrego un evento para capturar el envío del form
subscriptionForm.addEventListener('submit', event => {
    event.preventDefault(); // Evita que el formulario se envíe por defecto (automáticamente).

    // Valido la dirección de correo electrónico usando la función isValidEmail
    if (!isValidEmail(emailInput.value)) {
        statusMessage.textContent = 'Por favor, ingresa una dirección de correo electrónico válida.';
        statusMessage.style.color = 'red';
        return; // Salgo de la función si el correo no es válido.
    }

    // Simula un envío exitoso mostrando un mensaje de éxito en verde.
    statusMessage.textContent = '¡Te has suscrito con éxito!';
    statusMessage.style.color = 'green';

    // Limpia el campo de entrada después del envío exitoso, es decir, queda vacío para poder volver a escribir.
    emailInput.value = '';
});

// Función para validar la dirección de correo electrónico.
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


