import FilaFocos from './FilaFocos';
import FocoMercurial from './FocoMercurial';

function App() {
  return (
    <div id="techo">
      <FocoMercurial color="green"/>
      <FilaFocos/>
      <FocoMercurial color="brown"/>
      <FocoMercurial color={1}/> 
    </div>
  );
}

export default App;
