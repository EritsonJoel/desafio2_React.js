import React from 'react';
import './App.css';
import MenuItems from './componentes/navbar/MenuItems';
import Titulo from './componentes/Titulo';


function App() {
  return (
    <div className="App"> 
   <MenuItems/>
    <Titulo className="Titulo"/>
     </div>
    
  );
}
export default App;
