
//Variable contadora de tareas
var totalTareas = 0;

const verificarTareaInput = () => {
    //tomamos los elementos
    const inputTarea = document.getElementById('ingresarTarea');

    //Verificamos si el input esta vacio y return si lo esta
    if (inputTarea.value.trim() == "") {
        document.getElementById('error-input').innerHTML = "Este campo es requerido";
        inputTarea.classList.add('is-invalid');

    } else if (inputTarea.value.trim().length < 3) {
        // Error por cantidad de caracteres requeridos
        document.getElementById('error-input').innerHTML = "Este campo debe contener al menos 3 caracteres";
        inputTarea.classList.add('is-invalid');

    } else {
        //Borra el error span cuando las dos validaciones anteriores son correctas y remueve la clase is-invalid(Boostrap) y va a la funcion para agregar la tarea
        document.getElementById('error-input').innerHTML = "";
        inputTarea.classList.remove('is-invalid');
        agregarTareaInput(inputTarea);
    }

}

const agregarTareaInput = (textInput) => {
    const listado = document.getElementById('listadoTareas');
    const cantidad = document.getElementById('cantidadTareas');

    //Creamos un elemento lista
    const liNueva = document.createElement("li");
    //Agregamos el texto ingresado al elemento creado
    liNueva.textContent = textInput.value;
    //Agregamos el elemento li creado con el valor input ingresado a la lista
    listado.appendChild(liNueva);
    //Sumamos a la variable tareas +1 tarea
    totalTareas++;
    cantidad.innerHTML = totalTareas;


    //Agregamos el boton eliminar a cada elemento del listado
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    liNueva.appendChild(btnEliminar);


    //Función para eliminar las tareas ingresadas
    btnEliminar.onclick = function () {
        liNueva.remove();
        totalTareas--;
        cantidad.innerHTML = totalTareas;
    }

    //Borramos el input que se ingreso
    textInput.value = "";
}


//función inicializar JavaScript q se ejecuta cuando se hace click en el boton agregar tarea
const inicializarJs = () => {
    const btnAgregar = document.getElementById("btnAgregarTarea");
    btnAgregar.addEventListener('click', function (e) {
        verificarTareaInput();
    });
}

//carga el escuchador de eventos y llama a la funcion inicializarJs
window.addEventListener('load', inicializarJs);