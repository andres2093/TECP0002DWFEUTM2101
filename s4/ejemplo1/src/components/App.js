import React from 'react';
import Boton from './Boton';

const App = () => {
  const [contador, setContador] = React.useState(0);
  const [texto, setTexto] = React.useState("Cero");
  
  const handleConvertir = (numero, texto) => {
    setContador(numero)
    setTexto(texto)
  }

  return (
  <div className="margen">
    {contador} - {texto}
    <br/>
    <Boton            
      texto={'1'}            
      handleClick={() => handleConvertir(1, 'uno')}
    />
    <Boton            
      texto={'2'}            
      handleClick={() => handleConvertir(2, 'dos')}
    />
    <Boton            
      texto={'3'}            
      handleClick={() => handleConvertir(3, 'tres')}
    />
  </div>   
  );

};

export default App;