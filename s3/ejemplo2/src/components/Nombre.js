import PropTypes from 'prop-types'
import React from 'react'

class Nombre extends React.Component {
  componentDidMount(){
    alert('Bienvenido ' + this.props.nombre)
  }

  componentWillUnmount(){
    alert('Adios ' + this.props.nombre)
  }

  render() {
    return (
      <div>
        { this.props.nombre }
        <button onClick={ this.props.borrarNombreDeLista }>
          x
        </button>
      </div>
    )
  }
}

Nombre.propTypes = {
  nombre: PropTypes.string.isRequired,
  borrarNombreDeLista: PropTypes.func.isRequired
}

export default Nombre