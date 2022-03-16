import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../../assets/img/logo.png';

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
    <div onClick={handleClick}>
        <img src={logo} alt="Logo de la app" />
        
            <span>POKEDEX_</span>
    </div>
)};

export default NavBrand;