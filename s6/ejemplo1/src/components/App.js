import React from 'react'
import { 
  BrowserRouter as Router, 
  Route, Routes } from 'react-router-dom'
import Cabeza from './Cabeza'
import Cuerpo from './Cuerpo'
import Header from './Header'
import Header2 from './Header2'
import Hojas from './Hojas'
import Cocos from './Cocos'
import Tronco from './Tronco'

const App = () => {
  return (
    <div className="margen">
      <Router>
        <h1>Ejemplo 1</h1>
        <Header/>
        <br/>

        {/* Version 5 o previa */}
        {/* <Route path="/" component={Cabeza} />
        <Route path="/cuerpo" component={Cuerpo} /> */}

        {/* Version 6 o superior */}
        <Routes>
          <Route exact path="/" element={<Cabeza/>} />
          <Route exact path="/cuerpo" element={<Cuerpo/>} />
          <Route 
            exact path="/juntos" 
            element={
              <React.Fragment>
                <Cabeza/>
                <Cuerpo/>
              </React.Fragment>
            } 
          />
        </Routes>
        
        <h1>Reto 1</h1>
        <Header2/>

        <Routes>
          <Route exact path="/" element={'¿Qué va a llevar?'} />
          <Route exact path="/hojas" element={<Hojas/>} />
          <Route exact path="/cocos" element={<Cocos/>} />
          <Route exact path="/tronco" element={<Tronco/>} />
          <Route 
            exact path="/palmera" 
            element={
              <div className='align'>
                <Hojas/>
                <Cocos/>
                <Tronco/>
              </div>
            } 
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App