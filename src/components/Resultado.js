
const Resultado = ({total, plazo, cantidad}) => (
    <div className="max-w-[540px] mx-auto grid place-items-center border-2 border-indigo-800 bg-indigo-300 py-7 px-0 rounded-md">
        <div className="text-left">
            <h2 className="text-3xl mb-3 uppercase">Resumen:</h2>
            <p className="font-semibold">Cantidad solicitada: ${cantidad}</p>
            <p className="font-semibold">En un plazo de: {plazo} meses</p>
            <p className="font-semibold">Cuota: ${(total / plazo).toFixed(2)}</p>
            <p className="text-xl font-semibold">Total a pagar: <span className="font-bold tracking-wide border-b-2 border-black">${(total).toFixed(2)}</span></p>
        </div>
    </div>
)

export default Resultado;