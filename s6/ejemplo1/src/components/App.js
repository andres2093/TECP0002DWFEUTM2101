import React from 'react'
import { 
  BrowserRouter as Router, 
  Route, Routes } from 'react-router-dom'
import Cabeza from './Cabeza'
import Cuerpo from './Cuerpo'
import Header from './Header'

const App = () => {
  return (
    <div className="margen">
      <Router>
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
      </Router>
    </div>
  )
}

export default App