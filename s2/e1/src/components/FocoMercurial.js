import LuzMercurial from "./LuzMercurial";
import PropTypes from 'prop-types'

// En los componentes stateless (funcionales) 
// se tiene que recibir el parámetro a la hora 
// de declarar y se usa solo como 
// props.nombrePropiedad.
const FocoMercurial = (props) => {
  return (
    <div className="focoMercurial">
      <LuzMercurial color={props.color}/>
    </div>
  );
}

FocoMercurial.propTypes = {
  color: PropTypes.string
}

export default FocoMercurial;