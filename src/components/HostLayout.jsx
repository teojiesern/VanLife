import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout(){
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline"
    }

    return (
        <div>
            <div>
                <NavLink 
                    to="." 
                    end
                    className="nav-link" 
                    style={({isActive}) => isActive ? activeStyle : null}
                >Dashboard
                </NavLink>
                <NavLink 
                    to="income" 
                    className="nav-link" 
                    style={({isActive}) => isActive ? activeStyle : null}
                >Income
                </NavLink>
                <NavLink 
                    to="vans" 
                    className="nav-link" 
                    style={({isActive}) => isActive ? activeStyle : null}
                >Vans
                </NavLink>
                <NavLink 
                    to="reviews" 
                    className="nav-link" 
                    style={({isActive}) => isActive ? activeStyle : null}
                >Reviews
                </NavLink>
            </div>
            <Outlet />
        </div>
    )
}