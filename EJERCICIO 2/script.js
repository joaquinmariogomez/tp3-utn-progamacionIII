document.addEventListener('DOMContentLoaded', () => {
    const listaDePalabras = ["manzana", "banana", "pera", "durazno", "frutilla", "mango"];

    const entradaFiltro = document.getElementById('entradaFiltro');
    const botonFiltrar = document.getElementById('botonFiltrar');
    const listaResultados = document.getElementById('listaResultados');
    const mensajeError = document.getElementById('mensajeError');

    botonFiltrar.addEventListener('click', () => {
        listaResultados.innerHTML = '';
        mensajeError.textContent = '';
        const textoFiltro = entradaFiltro.value.trim().toLowerCase();
        if (textoFiltro === '') {
            mensajeError.textContent = 'Por favor, ingrese un texto para filtrar.';
            return; 
        }
        const palabrasFiltradas = listaDePalabras.filter(palabra =>
            palabra.toLowerCase().includes(textoFiltro)
        );
        if (palabrasFiltradas.length > 0) {
            palabrasFiltradas.forEach(palabra => {
                const li = document.createElement('li');
                li.textContent = palabra;
                listaResultados.appendChild(li);
            });
        } else {
            listaResultados.innerHTML = '<li>No se encontraron coincidencias.</li>';
        }
    });
});