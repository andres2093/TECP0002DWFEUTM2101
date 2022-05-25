import Loader from "./Loader";
import React from 'react';

function App() {
  const [loader, setLoader] = React.useState(true);

  const didMount = () => {
    if (loader){
      setTimeout(() => {
        setLoader(false)
      }, 3000);
    }
  }
  React.useEffect(didMount, [])

  return (
    <div className="App">
      {
        loader && <Loader/>
      }
      <button onClick={() => setLoader(false)}>Cerrar</button>
    </div>
  );
}

export default App;
