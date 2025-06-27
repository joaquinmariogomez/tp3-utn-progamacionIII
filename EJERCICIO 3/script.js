document.addEventListener('DOMContentLoaded', () => {
    const listaTareas = document.getElementById('lista-tareas');

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(respuesta => {
            return respuesta.json();
        })
        .then(tareas => {
            const tareasCompletadas = tareas.filter(tarea => tarea.completed === true);
            listaTareas.innerHTML = '';
            tareasCompletadas.forEach(tarea => {
                const li = document.createElement('li');
                li.textContent = tarea.title;
                listaTareas.appendChild(li);
            });
        })
});