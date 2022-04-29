// stateless
// const LuzMercurial = () => {
//   return (
//     <div className="luzMercurial">
//     </div>
//   );
// }

// stateful -> Componente clase
import React from 'react';

class LuzMercurial extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'pink'
    }
  }

   render() {
      return (
        <div style={{ backgroundColor: this.state.color }} className="luzMercurial">
        </div>
      );
   }
};

export default LuzMercurial;