
// Renderizado condicional
//  - Directo
//  - Ternario
//  - Por función

import React from "react";
import Profes from "./Profes";
import Tareas from "./Tareas";
import Usuarios from "./Usuarios";

const App = () => {
  const [mostrarTareas, setMostrarTareas] = React.useState(false)
  const [mostrarProfes, setMostrarProfes] = React.useState(false)
  const [mostrarUsuarios, setMostrarUsuarios] = React.useState(false)

  const componente = <span>Hola mundo!</span>
  const componenteNo = <span>Adios mundo!</span>
  const componenteNoHay = <span>No hay!</span>

  const renderizarUsuarios = () => {
    if (mostrarUsuarios) return componente
    return componenteNoHay
  }

  return (
    <div className="margen">
      Directo
      <br/>
      { (mostrarUsuarios && componente) || componenteNo}
      <br/>
      <br/>
      Ternario
      <br/>
      { mostrarUsuarios ? componente : componenteNoHay }
      <br/>
      <br/>
      Por función
      <br/>
      { renderizarUsuarios() }
      <br/>
      <br/>
      <br/>
      <br/>
      <button onClick={() => setMostrarTareas(!mostrarTareas)}>
        Tareas
      </button>
      <br/>
      { mostrarTareas && <Tareas/> }
      <br/>
      <button onClick={() => setMostrarProfes(!mostrarProfes)}>
        Profes
      </button>
      <br/>
      { mostrarProfes && <Profes/> }
      <br/>
      <button onClick={() => setMostrarUsuarios(!mostrarUsuarios)}>
        Usuarios
      </button>
      <br/>
      { mostrarUsuarios && <Usuarios/> }
      <br/>
    </div>
  );
}

export default App;
