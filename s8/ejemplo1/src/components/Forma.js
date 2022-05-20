import { TextField, Grid, Button } from '@mui/material'
import React from 'react'

const Forma = () => {
  const [nombre, setNombre] = React.useState('')
  const [edad, setEdad] = React.useState('')
  const [empresa, setEmpresa] = React.useState('')
  const [ocupacion, setOcupacion] = React.useState('')

  const handleBuscar = () => {
    if (!nombre | !edad | !empresa | !ocupacion) return

    setTimeout(() => {
      alert('Si se encuentra!!!')
    }, 1000)
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
        <Button variant='contained' onClick={handleBuscar}>
          Buscar
        </Button>
      </Grid>
    </Grid>
  )
}

export default Forma