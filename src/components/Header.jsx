import logo from "media/Logo.png";

import React from 'react'

const Header = () => {
    return (
        <header>
            <ul className="navbar">
                <li>
                    <div>
                        <img src= {logo} alt="imagen" className = "logo"/>
                    </div>
                </li>
                
                <li>
                    <button className="button mainButton"> Nuevo post</button>
                </li>
                <li><button className="button secondaryButton">Login</button></li>
                <li>
                    <div className ="buscar">
                        <input placeholder="Buscar una raza"/>
                        <i className="fas fa-search button iconoBusqueda"></i>
                    </div>                   
                </li> 
                <li><button className="button mainButton">Registro</button></li>
                </ul>
        </header>
    )

}

export default Header
