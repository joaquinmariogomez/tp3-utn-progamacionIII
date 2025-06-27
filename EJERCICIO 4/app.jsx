function App() {
const [esTurnoDelIzquierdo, setEsTurnoDelIzquierdo] = React.useState(true);

return (
    <div>
    <h1>Ejercicio 4: Botones Alternados</h1>
    <h2>Turno del botón: {esTurnoDelIzquierdo ? 'Izquierdo' : 'Derecho'}</h2>

    <button
        onClick={() => setEsTurnoDelIzquierdo(false)}
        className={esTurnoDelIzquierdo ? 'activo' : 'inactivo'}
        disabled={!esTurnoDelIzquierdo}
    >
        Izquierdo
    </button>

    <button
        onClick={() => setEsTurnoDelIzquierdo(true)}
        className={!esTurnoDelIzquierdo ? 'activo' : 'inactivo'}
        disabled={esTurnoDelIzquierdo}
    >
        Derecho
    </button>
    </div>
);
}

const contenedor = document.getElementById('root');
const raiz = ReactDOM.createRoot(contenedor);
raiz.render(<App />);