import React from "react";
import Nombre from "./Nombre";

const App = () => {
  const [state, setState] = React.useState({
    tarea: '',
    mensaje: '',
    listaTareas: ['Reto 2']
  })

  const didUpdate = () => {
    setState({
      ...state,
      mensaje: `Por hacer: ${state.listaTareas.length}`
    })
  }
  React.useEffect(didUpdate, [state.listaTareas])

  const handleInputChange = (event) => {
    setState({
      ...state,
      tarea: event.target.value
    })
  }

  const handleClick = () => {
    const tareaEnEstado = state.tarea
    if(!tareaEnEstado) return

    const tareaYaExiste = state.listaTareas.find(
			(item) => item === tareaEnEstado
		);
		if (tareaYaExiste) return alert(`Tarea "${tareaEnEstado}" ya existe.`);

    const listaActualizada = [
      ...state.listaTareas,
      tareaEnEstado
    ]

    setState({
      ...state,
      tarea: '',
      listaTareas: listaActualizada
    })
  }

  const borrarTarea = (key) => {
    const copiaDeLista = [...state.listaTareas]
    copiaDeLista.splice(key, 1)

    setState({
      ...state,
      listaTareas: copiaDeLista
    })
  }

  return (
    <div className="margen">
      { state.mensaje }
      <br/>
      <input 
        value={ state.tarea }
        onChange={handleInputChange}
      />
      <button onClick={ handleClick }>
        Agregar
      </button>

      <ul>
        {
          state.listaTareas.map((item, key) => (
            <li key={ key }>
              <Nombre 
                nombre={ item }
                borrarNombreDeLista={ () => borrarTarea(key) }
              />
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
