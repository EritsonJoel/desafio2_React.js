import React from 'react';
import './App.css';
import MenuItems from './componentes/navbar/MenuItems';
import ItemListContainer from './componentes/ItemListContainer';


function App() {



  let saludo = 'Bienvenidos' 
  return (
    <div className="App"> 
   <MenuItems/>
    
    <ItemListContainer className="titulo"  greetings = {saludo}/>
     </div>
    
  );
}
export default App;
