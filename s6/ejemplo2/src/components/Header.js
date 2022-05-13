import { Link } from "react-router-dom"
import { RUTAS } from "../helpers/constants"

const Header = () => {
  return (
    <div className="menuContainer">
      <Link className="buttonMenu" to={RUTAS.inicio}>
        Inicio
      </Link>
      {/* {' | '} */}
      <Link className="buttonMenu" to={RUTAS.planReact}>
        React
      </Link>
      {/* {' | '} */}
      <Link className="buttonMenu" to={RUTAS.planRedux}>
        Redux
      </Link>
    </div>
  )
}

export default Header