import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="menuContainer">
      {/* <a href="/">
        Cabeza
      </a> */}
      <Link className="buttonMenu" to="/">
        Cabeza
      </Link>
      {/* {' | '} */}
      <Link className="buttonMenu" to="/cuerpo">
        Cuerpo
      </Link>
      {/* {' | '} */}
      <Link className="buttonMenu" to="/juntos">
        Juntos
      </Link>
    </div>
  )
}

export default Header