import React from 'react';

const App = () => {
   const [nombre, setNombre] = React.useState('')
   // Focus ------------------
   const [state, setState] = React.useState({
      profes: 0,
      alumnos: 0,
      materias: 0
   })
   // Focus ------------------

   const editarNombre = (event) => setNombre(event.target.value)
   const editarProfes = (event) => setState({
      ...state,
      profes: event.target.value
   })
   // Focus ------------------
   const editarState = (atributo) => (event) => {
      console.log(event.target.id);
      console.log(event.target.value);
      setState({
         ...state,
         // alumnos: event.target.value
         [atributo]: event.target.value
      })
   }
   // Focus ------------------

   // Focus ------------------ x2
   const editarStateSinVariable = (event) => {
      setState({
         ...state,
         [event.target.id]: event.target.value
      })
   }
   // Focus ------------------ x2

   return (
      <div className='margen'>
         <input onChange={editarNombre}/>
         {nombre}
         <br/><br/>

         <input type='number' onChange={editarProfes}/>
         {state.profes}
         <br/><br/>

         <input type='number' onChange={editarState('alumnos')}/>
         {state.alumnos}
         <br/><br/>

         <input id='materias' type='number' onChange={editarStateSinVariable}/>
         {state.materias}
         <br/><br/>

         <button onClick={() => {
            console.log(state)
         }}>Enviar</button>
      </div>
   );
};

export default App;