import { useState } from "react";
const Formulario = ({cantidad, guardarCantidad, plazo, guardarPlazo}) => {

    //Definir el state
    const [error, guardarError] = useState(false);

    const leerCantidad = (e) => {
        guardarCantidad(parseInt(e.target.value));
    }
    const leerPlazo = (e) => {
        guardarPlazo(parseInt(e.target.value));
    }

    //Cuando el usuario hace submit
    const calcularPrestamo = e => {
        e.preventDefault();

        //Validar
        if(cantidad === 0 || plazo === '' ){
            guardarError(true)
        }

        //Cotizar
    }
    return (
        <form
            className="p-8 max-w-[600px] mx-auto"
            onSubmit={calcularPrestamo}
        >
          <div>
              <div>
                  <label className="text-center text-indigo-900 text-3xl font-semibold">Cantidad Prestamo</label>
                  <input
                      className="w-full bg-slate-200 mt-1.5 p-2 rounded-md"
                      type="number"
                      placeholder="Ejemplo: 3000"
                      onChange={leerCantidad}
                  />
              </div>
              <div className="mt-5">
                  <label className="text-center text-indigo-900 text-3xl font-semibold">Plazo para pagar</label>
                  <select className="w-full bg-slate-200 mt-1.5 py-2 px-3 rounded-md"
                  onChange={leerPlazo}>
                      <option value="">Seleccionar</option>
                      <option value="3">3 meses</option>
                      <option value="6">6 meses</option>
                      <option value="12">12 meses</option>
                      <option value="24">24 meses</option>
                  </select>
              </div>
              <div className="mt-5">
                  <input
                      type="submit"
                      value="Calcular"
                      className="w-full bg-indigo-600 text-white p-2 rounded-md cursor-pointer disabled:opacity-50 font-semibold uppercase tracking-wide"
                      //disabled
                    />
                </div>
            </div>
        </form>
    )
}

export default Formulario;