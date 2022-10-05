import { Fragment } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";

function App() {
  return (
    <Fragment>
      <Header
        titulo="Cotizador de Prestamos"
        descripcion="Llena el formulario y obten una cotización"
      />
      <div className="container lg:w-3/4 bg-slate-300/70 mx-auto mt-5 rounded-md">
        <Formulario/>
      </div>
    </Fragment>
    );
}

export default App;
