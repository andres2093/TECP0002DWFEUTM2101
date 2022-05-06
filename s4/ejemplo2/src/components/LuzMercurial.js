import React from 'react';

const LuzMercurial = () => {
  const [color, setColor] = React.useState('pink') 

  return (
    <div style={{ backgroundColor: color }} className="luzMercurial">
    </div>
  );
}

export default LuzMercurial