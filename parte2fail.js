
const creadorInput = () => {
    //tomamos los elementos
    const inputTarea = document.getElementById("ingresarTarea");
    const listado = document.getElementById("listadoTareas");
    const cantidad = document.getElementById("cantidadTareas");
    

    //Variable contadora de tareas
    var totalTareas = 0;
    //Verificamos si el input esta vacio y return si lo esta
    if (inputTarea.value == "") {
        return;
    }
    //Asiganamos el valor ingresado del input a la conts elemento
    const elemento = inputTarea.value;
    //Creamos un elemento lista
    const li = document.createElement("li");
    //Agregamos el texto ingresado al elemento creado
    li.textContent = elemento;
    //Agregamos el elemento li creado con el valor input ingresado a la lista
    listado.appendChild(li);
    //Sumamos a la variable tareas +1 tarea
    totalTareas++;
    cantidad.innerHTML = totalTareas;
    document.getElementById('error-input').innerHTML = "";
    inputTarea.classList.remove('is-invalid');


    //Agregamos el boton eliminar a cada elemento del listado
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    li.appendChild(btnEliminar);


    //Agregamos la funcionalidad que elimina del listado el elemento
    btnEliminar.onclick = function () {
        li.remove();
        totalTareas--;
        cantidad.innerHTML = totalTareas;
    }

    //Borramos el input que se ingreso
    inputTarea.value = "";
}

const validarInput = () => {
    const ingresarInput = document.getElementById('ingresarTarea');
    if (ingresarInput.value.trim() == "") {
        // Error de requerimiento si esta vacio
        document.getElementById('error-input').innerHTML = "Debe completar este campo";
        ingresarInput.classList.add('is-invalid');
    } else if (ingresarInput.value.trim().length < 3) {
        // Error por cantidad de caracteres requeridos 5 para mensaje
        document.getElementById('error-input').innerHTML = "Debe contener al menos 3 caracteres";
        ingresarInput.classList.add('is-invalid');
    } else {
        //Borra el error span cuando las dos validaciones anteriores son correctas y remueve la clase is-invalid(Boostrap)
        document.getElementById('error-input').innerHTML = "";
        ingresarInput.classList.remove('is-invalid');
    }
}

//Función que valida el nombre ingresado
const addInput = () => {
    const ingresarInput = document.getElementById('ingresarTarea');
    if (ingresarInput.value.trim() == "") {
        // Error de requerimiento si esta vacio
        document.getElementById('error-input').innerHTML = "Debe completar este campo";

    } else if (ingresarInput.value.trim().length < 3) {
        // Error por cantidad de caracteres requeridos
        document.getElementById('error-input').innerHTML = "Debe contener al menos 3 caracteres";

    } else {
        //Borra el error span cuando las dos validaciones anteriores son correctas y remueve la clase is-invalid(Boostrap)
        document.getElementById('error-input').innerHTML = "";

    }
}

const inicializarJs = () => {
    const boton = document.getElementById("btnAgregarTarea");
    boton.addEventListener('click', function (e) {
        creadorInput();
        addInput();
    });

    document.getElementById('ingresarTarea').addEventListener('change', function (e) {
        validarInput();
    });
}

window.addEventListener('load', inicializarJs);