import { Fragment, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";

function App() {
  //Definir el State
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');
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
        />
      </div>
    </Fragment>
    );
}

export default App;
