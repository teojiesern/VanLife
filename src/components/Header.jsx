import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header(){
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline"
    }
    
    return (
        <nav>
            <Link to="/" className="nav-link vanlife">#VANLIFE</Link>
            <div>
                <NavLink to="/host" className="nav-link" style={({isActive}) => isActive ? activeStyle : null}>Host</NavLink>
                <NavLink to="/about" className="nav-link" style={({isActive}) => isActive ? activeStyle : null}>About</NavLink>
                <NavLink to="/vans" className="nav-link" style={({isActive}) => isActive ? activeStyle : null}>Van</NavLink>
            </div>
        </nav>
    )
}