document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe por defecto

    // Obtener los valores de los inputs
    const Nombre = document.getElementById("firstName").value.trim();
    const Apellido = document.getElementById("lastName").value.trim();
    const Email = document.getElementById("email").value.trim();
    const Telefono = document.getElementById("phone").value.trim();

    // Obtener las referencias a los elementos de input
    const nombreInput = document.getElementById("firstName");
    const apellidoInput = document.getElementById("lastName");
    const emailInput = document.getElementById("email");
    const telefonoInput = document.getElementById("phone");

    // Función de alerta error con temporizador
    function mostrarError(idAlerta, mensaje) {
        const alertContainer = document.getElementById(idAlerta);
        alertContainer.innerHTML = '<div class="alert alert-danger" role="alert">' + mensaje + '</div>';
        setTimeout(function() {
            alertContainer.innerHTML = '';
        }, 3000); 
    }

    // Establecer bordes predeterminados para los inputs
    nombreInput.style.border = "1px solid #ced4da";
    apellidoInput.style.border = "1px solid #ced4da";
    emailInput.style.border = "1px solid #ced4da";
    telefonoInput.style.border = "1px solid #ced4da";

    // Validación del Nombre
    const nombreRegex = /^[^\d]+$/;
    if (Nombre === "" || !nombreRegex.test(Nombre)) {
        mostrarError("alertaFirstName", "Por favor, introduce tu nombre.");
        nombreInput.style.border = "1px solid red";
        return;
    }

    // Validación del Apellido
    if (Apellido === "" || !nombreRegex.test(Apellido)) {
        mostrarError("alertaLastName", "Por favor, introduce tu apellido.");
        apellidoInput.style.border = "1px solid red";
        return;
    }

    // Validación del Email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (Email === "" || !emailRegex.test(Email)) {
        mostrarError("alertaEmail", "Por favor, introduce un email válido.");
        emailInput.style.border = "1px solid red";
        return;
    }

    // Validación del Teléfono
    const phoneRegex = /^\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    if (Telefono === "" || !phoneRegex.test(Telefono)) {
        mostrarError("alertaPhone", "Por favor, introduce un teléfono válido.");
        telefonoInput.style.border = "1px solid red";
        return;
    }

    // Si todas las validaciones son exitosas, se puede procesar el formulario
    alert("Formulario enviado con éxito.");
});
