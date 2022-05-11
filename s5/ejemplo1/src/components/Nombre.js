import PropTypes from 'prop-types'
import React from 'react'

const Nombre = (props) => {
  // Practica no recomendada
  // React.useEffect(() => {
  //   // console.log('UseEffect', 'Mount');
  //   console.log('Bienvenido ', props.nombre);
  //   return () => {
  //     // console.log('willUnmount');
  //     console.log('Adios ', props.nombre);
  //   }
  // }, [])

  // Recomendado -> Buenas practicas
  const didMount = () => {
    console.log('Bienvenido ', props.nombre);
  }
  React.useEffect(didMount, [])

  const willUnmount = () => {
    return () => {
      console.log('Adios ', props.nombre);
    }
  }
  React.useEffect(willUnmount, [])

  return (
    <div>
      { props.nombre }
      <button onClick={ props.borrarNombreDeLista }>
        x
      </button>
    </div>
  )
}

Nombre.propTypes = {
  nombre: PropTypes.string.isRequired,
  borrarNombreDeLista: PropTypes.func.isRequired
}

export default Nombre