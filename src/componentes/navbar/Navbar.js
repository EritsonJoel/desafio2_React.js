import React, {componente} from "react";
import {MenuItems} from "./MenuItems";
import './navbar.css'


class Navbar extends componente  {
   

    render(){
        return (
            <nav className="NavbarItems">
                <h1 className="Navbar-logo">React<i className="fab fa-react"></i></h1>
                <div className="menu-icon">

                </div>
                <ul>

                    {MenuItems.map((Item, index)=>{
                        return(
                            <li key={index}>
                                
                                <a className={Item.cName} href={Item.url}>{Item.title}</a>
                                
                                
                                
                                
                            </li>


                        )
                    })}
                 
                </ul>

            </nav>
        )
    }
}

export default Navbar