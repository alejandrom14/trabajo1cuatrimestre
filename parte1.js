//Función que valida el formato email con expresión regular
const esEmailValido = (email) => {
    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    return emailRegex.test(email);
}

//Función que valida el nombre ingresado
const validarNombre = () => {
    const nombreInput = document.getElementById('nombre');
    if (nombreInput.value.trim() == "") {
        // Error de requerimiento si esta vacio
        document.getElementById('error-nombre').innerHTML = "El nombre es requerido";
        nombreInput.classList.add('is-invalid');
    } else if (nombreInput.value.trim().length < 3) {
        // Error por cantidad de caracteres requeridos
        document.getElementById('error-nombre').innerHTML = "El nombre debe tener al menos 3 caracteres";
        nombreInput.classList.add('is-invalid');
    } else {
        //Borra el error span cuando las dos validaciones anteriores son correctas y remueve la clase is-invalid(Boostrap)
        document.getElementById('error-nombre').innerHTML = "";
        nombreInput.classList.remove('is-invalid');
    }
}

//Función que valida el email ingresado
const validarEmail = () => {
    const emailInput = document.getElementById('email');
    if (emailInput.value.trim() == "") {
        // Error de requerimiento si esta vacio
        document.getElementById('error-email').innerHTML = "El email es requerido";
        emailInput.classList.add('is-invalid');
    } else if (!esEmailValido(emailInput.value)) {
        // Error que ejecuta la funcion esEmailValido y verifica el formato email con expresión regular
        document.getElementById('error-email').innerHTML = "Dirección de email incorrecta";
        emailInput.classList.add('is-invalid');
    } else {
        //Borra el error span cuando las dos validaciones anteriores son correctas y remueve la clase is-invalid(Boostrap)
        document.getElementById('error-email').innerHTML = "";
        emailInput.classList.remove('is-invalid');
    }
}

//Función que valida el asunto ingresado
const validarAsunto = () => {
    const asuntoInput = document.getElementById('asunto');
    if (asuntoInput.value.trim() == "") {
        // Error de requerimiento si esta vacio
        document.getElementById('error-asunto').innerHTML = "Debe completar este campo";
        asuntoInput.classList.add('is-invalid');
    } else if (asuntoInput.value.trim().length < 5) {
        // Error por cantidad de caracteres requeridos 5 para asunto
        document.getElementById('error-asunto').innerHTML = "Este campo debe conterner al menos 5 caracteres";
        asuntoInput.classList.add('is-invalid');
    } else {
        //Borra el error span cuando las dos validaciones anteriores son correctas y remueve la clase is-invalid(Boostrap)
        document.getElementById('error-asunto').innerHTML = "";
        asuntoInput.classList.remove('is-invalid');
    }
}

//Función que valida el mensaje ingresado
const validarMensaje = () => {
    const mensajeInput = document.getElementById('mensaje');
    if (mensajeInput.value.trim() == "") {
        // Error de requerimiento si esta vacio
        document.getElementById('error-mensaje').innerHTML = "Debe completar este campo";
        mensajeInput.classList.add('is-invalid');
    } else if (mensajeInput.value.trim().length < 5) {
        // Error por cantidad de caracteres requeridos 5 para mensaje
        document.getElementById('error-mensaje').innerHTML = "Este campo debe conterner al menos 5 caracteres";
        mensajeInput.classList.add('is-invalid');
    } else {
        //Borra el error span cuando las dos validaciones anteriores son correctas y remueve la clase is-invalid(Boostrap)
        document.getElementById('error-mensaje').innerHTML = "";
        mensajeInput.classList.remove('is-invalid');
    }
}

//Función que valida que todos los inputs ingresados sean correctos para imprimir por consola cada campo
const enviarFormulario = () => {
    
    let formularioCorrecto = true;
    
    const nombreInput = document.getElementById('nombre');
    if (nombreInput.value.trim() == "") {
        // Error de requerimiento si esta vacio
        document.getElementById('error-nombre').innerHTML = "El nombre es requerido";
        formularioCorrecto = false;
    } else if (nombreInput.value.trim().length < 3) {
        // Error por cantidad de caracteres requeridos
        document.getElementById('error-nombre').innerHTML = "El nombre debe tener al menos 3 caracteres";
        formularioCorrecto = false;
    } else {
        document.getElementById('error-nombre').innerHTML = "";
    }

    const emailInput = document.getElementById('email');
    if (emailInput.value.trim() == "") {
        // Error de requerimiento si esta vacio
        document.getElementById('error-email').innerHTML = "El email es requerido";
        formularioCorrecto = false;
    } else if (!esEmailValido(emailInput.value)) {
        // Error que ejecuta la funcion esEmailValido y verifica el formato email con expresión regular
        document.getElementById('error-email').innerHTML = "Dirección de email incorrecta";
        formularioCorrecto = false;
    } else {
        document.getElementById('error-email').innerHTML = "";
    }

    const asuntoInput = document.getElementById('asunto');
    if (asuntoInput.value.trim() == "") {
        // Error de requerimiento si esta vacio
        document.getElementById('error-asunto').innerHTML = "Debe completar este campo";
        formularioCorrecto = false;
    } else if (asuntoInput.value.trim().length < 5) {
        // Error por cantidad de caracteres requeridos
        document.getElementById('error-asunto').innerHTML = "Este campo debe conterner al menos 5 caracteres";
        formularioCorrecto = false;
    } else {
        document.getElementById('error-asunto').innerHTML = "";
    }

    const mensajeInput = document.getElementById('mensaje');
    if (mensajeInput.value.trim() == "") {
        // Error de requerimiento si esta vacio
        document.getElementById('error-mensaje').innerHTML = "Debe completar este campo";
        formularioCorrecto = false;
    } else if (mensajeInput.value.trim().length < 5) {
        // Error por cantidad de caracteres requeridos
        document.getElementById('error-mensaje').innerHTML = "Este campo debe conterner al menos 5 caracteres";
        formularioCorrecto = false;
    } else {
        document.getElementById('error-mensaje').innerHTML = "";
    }
    
    //Si la variable formularioCorrecto permanece en true se imprimen por consola todos los inputs
        if (formularioCorrecto) {
        console.log("Nombre:", nombreInput.value);
        console.log("Email:", emailInput.value);
        console.log("Asunto:", asuntoInput.value);
        console.log("Mensaje:", mensajeInput.value);
    } else {
        console.log("Formulario incorrecto o incompleto");
    }
}

//función inicializar JavaScript q se ejecuta cuando se hace click en el boton enviar (formulario)
const inicializarJs = () => {
    const boton = document.getElementById("btnEnviarForm");
    boton.addEventListener('click', function (e) {
        enviarFormulario();
    });

    document.getElementById('nombre').addEventListener('change', function (e) {
        validarNombre();
    });
    document.getElementById('email').addEventListener('change', function (e) {
        validarEmail();
    });
    document.getElementById('asunto').addEventListener('change', function (e) {
        validarAsunto();
    });
    document.getElementById('mensaje').addEventListener('change', function (e) {
        validarMensaje();
    });
}

//carga el escuchador de eventos y llama a la funcion inicializarJs
window.addEventListener('load', inicializarJs);