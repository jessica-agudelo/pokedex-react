import React from "react";
import { useNavigate } from "react-router-dom";
/**
 * Navigation Brand component. 
 * @returns{JSX.Element}
 */


export const NavBrand = () => {
 let navigate = useNavigate();
 const handleClick=()=>{
     navigate('/');
 };
    return(
    <div onClick={handleClick}>
        <img src='' alt="Logo de la app" />
        
            <span>POKEDEX_</span>
    </div>
)};

export default NavBrand;