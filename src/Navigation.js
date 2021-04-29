import React, { Component } from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div class="nav-bar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/search">Search</NavLink>
            <NavLink to="/roulette">Roulette</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/account">Account</NavLink>
       </div>
    );
}
 
export default Navigation;