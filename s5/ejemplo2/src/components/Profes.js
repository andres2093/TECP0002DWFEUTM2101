import React from "react"

const Profes = () => {
  const [profes, setProfes] = React.useState([])

  // didMount
  const avisameCuandoPintesLaPrimerVez = () => {
    setTimeout(() => {
      setProfes(['Profe 1', 'Profe 2', 'Profe 3'])
    }, 2000);
  }

  React.useEffect(avisameCuandoPintesLaPrimerVez, [])

  return (
    <div>
      {
        profes.length 
          ? profes.map((prf) => `${prf} - `)
          : '...'

      }
    </div>
  )
}

export default Profes