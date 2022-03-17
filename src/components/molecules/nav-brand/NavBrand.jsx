import React from "react";
import { useNavigate } from "react-router-dom";
import logo from 'assets/img/logo.png';
import "./nav-brand.css";
/**
 * Navigation Brand component. 
 * @returns{JSX.Element}
 */


 const NavBrand = () => {
 let navigate = useNavigate();
 const handleClick=()=>{
     navigate('/');
 };
    return(
    <div className="m-nav-brand" onClick={handleClick}>
        <img className="m-nav-brand__image" 
        src={logo} 
        alt="Logo de la aplicación"
         />
        
        <span className="m-nav-brand__text">POKEDEX_</span>
    </div>
)};

export default NavBrand;