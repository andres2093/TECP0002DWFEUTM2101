import Loader from "./Loader";
import React from 'react';
import { banner, beto } from "./const";

function App() {
  const [loader, setLoader] = React.useState(true);

  const didMount = () => {
    if (loader){
      setTimeout(() => {
        setLoader(false)
        // fetch('http://localhost:4000')
        // .then(response => response.json())
        // .then(data => {
        //   console.log('Correcto');
        //   console.log(data)
        // })
        // .catch(error => {
        //   console.log('Falló');
        //   console.log(error)
        // })
      }, 1000);
    }
  }
  React.useEffect(didMount, [])

  return (
    <div className="App">
      {
        loader ? <Loader/> : 
        <div>
          <div class="navbar">
            {/* Iconos */}
            {/* https://fontawesome.com/v4/icons/ */}
            <a class="active" href="#"><i class="fa fa-fw fa-home"></i> Home</a> 
            <a href="#"><i class="fa fa-fw fa-search"></i> Search</a> 
            <a href="#"><i class="fa fa-fw fa-envelope"></i> Contact</a> 
            <a href="#"><i class="fa fa-fw fa-user"></i> Login</a>
            <a href="#"><i class="fa fa-fw fa-bell"></i> Fotos</a>
          </div>
          <br/>
          <button onClick={() => setLoader(false)}>Cerrar</button>
          <img src={banner}/>
          <img src={beto}/>
        </div>
      }
    </div>
  );
}

export default App;
