// stateless
// const LuzMercurial = () => {
//   return (
//     <div className="luzMercurial">
//     </div>
//   );
// }

// stateful -> Componente clase
import React from 'react';
import PropTypes from 'prop-types'

// En los componentes stateful (clase) se 
// tiene que referir en el constructor y se 
// usa como this.props.nombrePropiedad.
class LuzMercurial extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'pink'
    }
  }

   render() {
      return (
        <div 
          className="luzMercurial"
          style={{ backgroundColor: this.props.color || this.state.color }} >
        </div>
      );
   }
};

LuzMercurial.propTypes = {
  color: PropTypes.string
}

export default LuzMercurial;