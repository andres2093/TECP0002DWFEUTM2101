// Ejemplo 1

// import logo from './logo.svg';
// import './App.css';
// import React from 'react'

// class App extends React.Component {
//   constructor(){
//     super()
//     this.state = { offline: !navigator.onLine }
//   }

//   setOfflineStatus = () => {
//     this.setState({ offline: !navigator.onLine })
//   }

//   componentDidMount(){
//     window.addEventListener('online', this.setOfflineStatus)
//     window.addEventListener('offline', this.setOfflineStatus)
//   }

//   componentWillUnmount(){
//     window.removeEventListener('online', this.setOfflineStatus)
//     window.removeEventListener('offline', this.setOfflineStatus)
//   }

//   render(){
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <p>
//             { !this.state.offline ? 'Conectado' : 'Desconectado' }
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

// Reto 1
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Precios from './Precios';
import Cotizador from './Cotizador';
import Instrucciones from './Instrucciones';
import { RUTAS } from './helpers/constants';

const App = () => {
   const [estadoGlobal, setEstadoGlobal] = React.useState({
      hamburguesas: [],
      precios: {
         pan1: '1',
         lechuga: '1',
         queso: '1',
         carne: '1',
         pan2: '1'
      }
   });

   return (
      <BrowserRouter>
         <div className="margen">
            <Header />

            <Routes>
               <Route exact path={RUTAS.instrucciones} element={<Instrucciones/>} />

               <Route 
                  exact path={RUTAS.precios}
                  element={
                     <Precios
                        estadoGlobal={estadoGlobal}
                        setEstadoGlobal={setEstadoGlobal}
                     />
                  }
               />
                  
               <Route 
                  exact path={RUTAS.cotizador}
                  element={
                     <Cotizador
                        estadoGlobal={estadoGlobal}
                        setEstadoGlobal={setEstadoGlobal}
                     />
                  }
               />
            </Routes>
         </div>
      </BrowserRouter>
   );
};

export default App;
