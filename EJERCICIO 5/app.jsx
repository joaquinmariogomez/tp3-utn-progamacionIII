function App() {
const [numero1, setNumero1] = React.useState('');
const [numero2, setNumero2] = React.useState('');
const [operacion, setOperacion] = React.useState('suma');
const [resultado, setResultado] = React.useState(null);
const esDivisionPorCero = operacion === 'division' && parseFloat(numero2) === 0;

const operaciones = {
    suma: (a, b) => a + b,
    resta: (a, b) => a - b,
    multiplicacion: (a, b) => a * b,
    division: (a, b) => a / b,
};

const manejarCalculo = (evento) => {
    evento.preventDefault();
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);

    if (isNaN(n1) || isNaN(n2)) {
    setResultado('Por favor, ingrese números válidos.');
    return;
    }

    if (esDivisionPorCero) {
        setResultado('Error: División por cero no permitida.');
        return;
    }

    const res = operaciones[operacion](n1, n2);
    setResultado('Resultado: ' + res.toFixed(2));
};

return (
    <div className="calculadora">
    <h1>Calculadora con React</h1>
    <form onSubmit={manejarCalculo}>
        <div className="calculadora-inputs">
        <input
            type="number"
            value={numero1}
            onChange={(e) => setNumero1(e.target.value)}
            placeholder="Número 1"
            required
        />
        <select value={operacion} onChange={(e) => setOperacion(e.target.value)}>
            <option value="suma">Suma</option>
            <option value="resta">Resta</option>
            <option value="multiplicacion">Multiplicación</option>
            <option value="division">División</option>
        </select>
        <input
            type="number"
            value={numero2}
            onChange={(e) => setNumero2(e.target.value)}
            placeholder="Número 2"
            required
        />
        </div>
        <button type="submit" disabled={esDivisionPorCero}>
        Calcular
        </button>
    </form>
    <div className="resultado">
        {esDivisionPorCero ? 'Error: División por cero.' : resultado}
    </div>
    </div>
);
}

const contenedor = document.getElementById('root');
const raiz = ReactDOM.createRoot(contenedor);
raiz.render(<App />);