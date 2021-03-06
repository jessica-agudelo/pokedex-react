import React from "react";
import NavBrand from "components/molecules/nav-brand/NavBrand";
import NavItems from "components/molecules/nav-items/NavItems";
import './Navigation.css'
import  { navItems } from "assets/js/navItems";
/**
 * Navigation component. 
 * @returns{JSX.Element}
 */


 const Navigation = () =>(
<nav className='o-navigation'>
   <NavBrand/>
   <NavItems items={navItems}/>
   
</nav>
);
export default Navigation;