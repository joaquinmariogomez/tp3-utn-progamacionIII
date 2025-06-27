function App() {
const [peso, setPeso] = React.useState('');
const [altura, setAltura] = React.useState('');
const [resultado, setResultado] = React.useState(null);

const calcularIMC = (evento) => {
    evento.preventDefault();
    const pes = parseFloat(peso);
    const alt = parseFloat(altura);

    if (!pes || !alt || pes <= 0 || alt <= 0) {
    setResultado({
        mensaje: 'Por favor, ingrese valores válidos.',
        claseColor: 'red'
    });
    return;
    }

    const imc = pes / (alt * alt);
    let datosResultado = {};

    if (imc < 18.5) {
    datosResultado = { mensaje: 'Nivel bajo', claseColor: 'goldenrod' };
    } else if (imc >= 18.5 && imc <= 24.9) {
    datosResultado = { mensaje: 'Nivel normal', claseColor: 'green' };
    } else if (imc >= 25 && imc <= 29.9) {
    datosResultado = { mensaje: 'Nivel de sobrepeso', claseColor: 'orange' };
    } else {
    datosResultado = { mensaje: 'Nivel de obesidad', claseColor: 'red' };
    }
    
    setResultado({ ...datosResultado, valor: imc.toFixed(2) });
};

return (
    <div className="imc-calculadora">
    <h1>Calculadora de IMC</h1>
    <form onSubmit={calcularIMC}>
        <input
        type="number"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        placeholder="Peso (kg)"
        step="0.1"
        required
        />
        <input
        type="number"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        placeholder="Altura (m)"
        step="0.01"
        required
        />
        <button type="submit">Calcular</button>
    </form>

    {resultado && (
        <div 
        className="resultado-imc" 
        style={{ 
            borderColor: resultado.claseColor, 
            color: resultado.claseColor 
        }}
        >
        <p>{resultado.mensaje}</p>
        {resultado.valor && <span>Tu IMC: {resultado.valor}</span>}
        </div>
    )}
    </div>
);
}

const contenedor = document.getElementById('root');
const raiz = ReactDOM.createRoot(contenedor);
raiz.render(<App />);