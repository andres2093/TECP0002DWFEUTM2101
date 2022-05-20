import { TextField, Grid, Button, CircularProgress } from '@mui/material'
import React from 'react'
import Resultado from './Resultado'

const Forma = () => {
  const [nombre, setNombre] = React.useState('')
  const [edad, setEdad] = React.useState('')
  const [empresa, setEmpresa] = React.useState('')
  const [ocupacion, setOcupacion] = React.useState('')
  const [msg, setMsg] = React.useState('')
  const [cargando, setCargando] = React.useState(false)
  const [dialogAbierto, setDialogAbierto] = React.useState(false)

  const inputsNotFilled = !nombre || !edad || !empresa || !ocupacion

  const handleBuscar = () => {
    if (inputsNotFilled) return

    setCargando(true)
    // fetch('http://example.com/movies.json')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data)
    //     setMsg('Si se encuentra')
    //     setDialogAbierto(true)
    //     setCargando(false)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //     setMsg('Falló')
    //     setDialogAbierto(true)
    //     setCargando(false)
    //   })
    setTimeout(() => {
      setMsg('Si se encuentra')
      setDialogAbierto(true)
      setCargando(false)
    }, 1000)
  }

  const cerrarDialog = () => {
    setNombre('')
    setEdad('')
    setEmpresa('')
    setOcupacion('')
    setDialogAbierto(false)
  }

  return(
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <TextField 
          label="Nombre" 
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          fullWidth
          required
          error={!nombre}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField 
          label="Edad" 
          type='number' 
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          fullWidth
          required
          error={!edad}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField 
          label="Empresa" 
          value={empresa}
          onChange={(e) => setEmpresa(e.target.value)}
          fullWidth
          required
          error={!empresa}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField 
          label="Ocupación" 
          value={ocupacion}
          onChange={(e) => setOcupacion(e.target.value)}
          fullWidth
          required
          error={!ocupacion}
        />
      </Grid>

      <Grid item xs={12} align='center'>
        {
          cargando ? (
            <CircularProgress/>
          ) : (
            <Button 
              variant='contained' 
              onClick={handleBuscar}
              disabled={inputsNotFilled}
            >
              Buscar
            </Button>
          )
        }

        <Resultado 
          dialogAbierto={dialogAbierto} 
          cerrarDialog={cerrarDialog}
          msg={msg}
        />
      </Grid>
    </Grid>
  )
}

export default Forma