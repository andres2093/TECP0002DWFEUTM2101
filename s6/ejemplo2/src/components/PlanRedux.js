import { Link, useLocation } from "react-router-dom"

const PlanRedux = () => {
  const location = useLocation()
  return (
    <div>
      <h3>Redux</h3>
      <Link className="buttonMenu" to={`${location.pathname}/actions`}>
        Actions
      </Link>
      <Link className="buttonMenu" to={`${location.pathname}/reducers`}>
        Reducers
      </Link>
    </div>
  )
}

export default PlanRedux