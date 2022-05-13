import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { RUTAS } from "../helpers/constants"
import Header from "./Header"
import PlanReact from "./PlanReact"
import PlanRedux from "./PlanRedux"
import SubtemaHooks from "./SubtemaHooks"
import SubtemaViejo from "./SubtemaViejo"

const App = () => {
  return (
    <div className="margen">
      <Router>
        <h1>Ejemplo 2</h1>
        <Header/>

        <Routes>
          <Route exact path={RUTAS.planReact} element={<PlanReact/>}/>
          <Route exact path={`${RUTAS.planReact}/:subtema`} element={<SubtemaViejo/>}/>

          <Route exact path={RUTAS.planRedux} element={<PlanRedux/>}/>
          <Route exact path={`${RUTAS.planRedux}/:subtema`} element={<SubtemaHooks/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App