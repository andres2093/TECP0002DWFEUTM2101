import PropTypes from 'prop-types'
import { withRouter } from "./withRouter"

const SubtemaViejo = (props) => {
  const {
    router: {
      params: { subtema }
    }
  } = props
  return (
    <p>
      { subtema }
    </p>
  )
}

SubtemaViejo.propTypes = {
  router: PropTypes.shape({
    params: PropTypes.shape({
      subtema: PropTypes.string
    })
  })
}

export default withRouter(SubtemaViejo)