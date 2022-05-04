import React from "react";
import Boton from "./Boton";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contador: 0
    }
  }

  restar = () => {
    this.setState({
      contador: this.state.contador - 1
    })
  }

  sumar = () => {
    this.setState({
      contador: this.state.contador + 1
    })
  }

  render() {
    return (
      <div className="margen">
        <Boton
          texto={ 'Restar' }
          handleClick= { this.restar }
        />

        { this.state.contador }

        <Boton
          texto={ 'Sumar' }
          handleClick= { this.sumar }
        />
      </div>
    );
  }
}

export default App;
