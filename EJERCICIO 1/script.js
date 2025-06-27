document.addEventListener('DOMContentLoaded', () => {
    const entradaNumero1 = document.getElementById('numero1');
    const entradaNumero2 = document.getElementById('numero2');
    const selectorOperacion = document.getElementById('operacion');
    const botonCalcular = document.getElementById('botonCalcular');
    const divResultado = document.getElementById('resultado');

    const validarEntradas = () => {
        const esDivisionPorCero = selectorOperacion.value === 'division' && parseFloat(entradaNumero2.value) === 0;
        botonCalcular.style.display = esDivisionPorCero ? 'none' : 'block';
        if (esDivisionPorCero) {
            divResultado.textContent = 'Error: No se puede dividir por cero.';
        }
    };

    selectorOperacion.addEventListener('change', validarEntradas);
    entradaNumero2.addEventListener('input', validarEntradas);

    const operaciones = {
        suma: (a, b) => a + b,
        resta: (a, b) => a - b,
        multiplicacion: (a, b) => a * b,
        division: (a, b) => a / b
    };

    botonCalcular.addEventListener('click', () => {
        const numero1 = parseFloat(entradaNumero1.value);
        const numero2 = parseFloat(entradaNumero2.value);
        const operacion = selectorOperacion.value;
        if (isNaN(numero1) || isNaN(numero2)) {
            divResultado.textContent = 'Por favor, ingrese ambos números.';
            return;
        }
        const resultado = operaciones[operacion](numero1, numero2);
        if (typeof resultado === 'number' && isFinite(resultado)) {
            divResultado.textContent = 'Resultado: ' + resultado.toFixed(2);
        } else {
            divResultado.textContent = resultado;
        }
    });

    validarEntradas();
});