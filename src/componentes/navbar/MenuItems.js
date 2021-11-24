 
import  React  from  'react'
import Logo from '../Logo'
import './navbar.css'



 function MenuItems() {
     return (
       <div className="MenuItems">
         <Logo/>
    <ul  className="Menu">
    
     <li><a href="#">HOME</a></li>
     <li><a href="#">PRODUCTOS</a></li>
     <li><a href="#">CONTACTOS</a></li>
     
    </ul>

    </div> 


     )
 }
 export default  MenuItems