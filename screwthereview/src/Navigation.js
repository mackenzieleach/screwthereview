import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/roulette">Roulette</NavLink>
       </div>
    );
}
 
export default Navigation;