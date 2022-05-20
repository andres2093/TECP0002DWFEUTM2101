import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'

import Fotos from './Fotos';
import Parrafos from './Parrafos';
import Opiniones from './Opiniones';

const App = () => {
  return (
    <Container>
      <h1>Ejemplo 01</h1>
      <Container className="container">
        <Grid container spacing={3}>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <div className='gridItem'>
              Grid 1
            </div>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <div className='gridItem'>
              Grid 2
            </div>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <div className='gridItem'>
              Grid 3
            </div>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <div className='gridItem'>
              Grid 4
            </div>
          </Grid>

          <Grid item sm={6} xs={12}>
            <div className='gridItem'>
              Grid item con container
              <Grid container>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                  <div className='anidado'>
                    Grid anidado
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>

      <br/>
      <br/>
      <Divider />

      <h1>Reto 01</h1>
      <Container>
        <Grid container>

          <Grid item xs={12} align="center">
            <h1>
              Un título corto y pegajoso
            </h1>
          </Grid>

          <Grid item xs={12}>
            <Fotos />
          </Grid>

          <Grid item xs={12}>
            <Parrafos />
          </Grid>

          <Grid item xs={12}>
            <h2>
              Opiniones
            </h2>
          </Grid>

          <Grid item xs={12}>
            <Opiniones />
          </Grid>

        </Grid>
      </Container>
    </Container>
  )
}

export default App