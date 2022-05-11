import React from "react"

const Tareas = () => {
  const [tareas, setTareas] = React.useState([])

  const didMount = () => {
    setTimeout(() => {
      setTareas(['Reto 1', 'Reto 2', 'Reto 3'])
    }, 2000);
  }

  React.useEffect(didMount, [])

  return (
    <div>
      { !tareas.length && '...'}
      { !!tareas.length && tareas.map((tarea) => `${tarea} - `) }
      {/* !!algo - convierte ese algo a booleano (true, false) */}
    </div>
  )
}

export default Tareas