import React from 'react';
import PropTypes from 'prop-types';
import Plato from './Plato';
import Cubierto from './Cubierto';

const Mantel = (props) => {
	const [height, ] = React.useState(props.height || 120)
	const [backgroundColor, setBackgroundColor] = React.useState(props.backgroundColor || 'darksalmon')

	return (
		<div
			className="mantel spaceAround"
			style={{ height, backgroundColor}}
		>
			<Cubierto />
			<Plato />
			<Cubierto />
		</div>
	);
};

Mantel.propTypes = {
	height: PropTypes.number,
	backgroundColor: PropTypes.string
}

export default Mantel;