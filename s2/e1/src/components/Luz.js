// stateless
// const Luz = () => {
//   return (
//     <div className="luz">
//     </div>
//   );
// }

// stateful -> Componente clase
import React from 'react';

class Luz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'pink'
    }
  }

   render() {
      return (
        <div style={{ backgroundColor: this.state.color }} className="luz">
        </div>
      );
   }
};

export default Luz;