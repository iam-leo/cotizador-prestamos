import { Fragment, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Mensaje from "./components/Mensaje";
import Resultado from "./components/Resultado";

function App() {
  //Definir el State
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');
  const [total, guardarTotal] = useState(0);

  //Carga condicional de componentes
  let componente;
  if (total === 0) {
    componente = <Mensaje/>
  } else {
    componente = <Resultado
                    total = {total}
                    plazo = {plazo}
                    cantidad = {cantidad}
                 />
  }

  return (
    <Fragment>
      <Header
        titulo="Cotizador de Prestamos"
        descripcion="Llena el formulario y obten una cotización"
      />
      <div className="container lg:w-3/4 bg-slate-300/70 mx-auto mt-5 rounded-md">
        <Formulario
          cantidad = {cantidad}
          guardarCantidad = {guardarCantidad}
          plazo = {plazo}
          guardarPlazo = {guardarPlazo}
          total = {total}
          guardarTotal = {guardarTotal}
        />

        <div className="text-center">
          {componente}
        </div>
      </div>
    </Fragment>
    );
}

export default App;
