import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { withRouter } from "./withRouter"

const PlanReact = (props) => {
  const {
    router: {
      location: { pathname }
    }
  } = props
  return (
    <div>
      <h3>React</h3>
      <Link className="buttonMenu" to={`${pathname}/jsx`}>
        Jsx
      </Link>
      <Link className="buttonMenu" to={`${pathname}/hooks`}>
        Hooks
      </Link>
    </div>
  )
}

PlanReact.propTypes = {
  router: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string
    })
  })
}

export default withRouter(PlanReact)