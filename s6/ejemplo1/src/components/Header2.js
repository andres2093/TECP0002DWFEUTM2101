import { Link } from "react-router-dom"

const Header2 = () => {
  return (
    <div className="menuContainer">
      <Link className="buttonMenu" to="/">
        Inicio
      </Link>
      {/* {' | '} */}
      <Link className="buttonMenu" to="/hojas">
        Hojas
      </Link>
      {/* {' | '} */}
      <Link className="buttonMenu" to="/cocos">
        Cocos
      </Link>
      <Link className="buttonMenu" to="/tronco">
        Tronco
      </Link>
      <Link className="buttonMenu" to="/palmera">
        Palmera
      </Link>
    </div>
  )
}

export default Header2