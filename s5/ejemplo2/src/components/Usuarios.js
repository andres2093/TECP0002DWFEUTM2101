import React from "react"

const Usuarios = () => {
  const [usuarios, setUsuarios] = React.useState([])

  const didMount = () => {
    setTimeout(() => {
      setUsuarios(['Usuarios 1', 'Usuarios 2', 'Usuarios 3'])
    }, 2000);
  }

  React.useEffect(didMount, [])

  const desplegarUsuarios = () => {
    if(!usuarios.length) return '...'
    return usuarios.map((user) =>  `${user} - `)
  }
  return (
    <div>
      { desplegarUsuarios() }
    </div>
  )
}

export default Usuarios