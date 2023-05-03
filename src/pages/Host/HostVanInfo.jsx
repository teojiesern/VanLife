import React from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";

export function HostVanInfo(){
    const { id } = useParams()
    const [van, setVan] = React.useState({})
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline"
    }

    const upStyle = {
        margin: "0",
        marginBottom: "10px",
        padding: "0",
    }

    const imgStyle = {
        borderRadius: "0",
        width: "35%"
    }       

    const linkStyle = {
        padding: "0",
        marginRight: "10px"
    }

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans))
    },[])

    return (
        <div className="detailVanContainer">
            <Link to=".." relative="path" className="backButton">&larr;<span> Back to all vans</span></Link>
            <div className="hostVanDetailContainer">
                <div className="listed-van" style={upStyle}>
                    <img src={van.imageUrl} style={imgStyle}/>
                    <div>
                        <p className={`van-type-button ${van.type} no-margin`}>{van.type}</p>
                        <h1 className="no-margin vanName">{van.name}</h1>
                        <p className="no-margin">${van.price}/day</p>
                    </div>
                </div>

                <div>
                    <NavLink 
                        to="." 
                        end
                        className="nav-link nav-link-no-padding" 
                        style={({isActive}) => isActive ? activeStyle : null}
                    >Details
                    </NavLink>
                    <NavLink 
                        to="pricing" 
                        className="nav-link nav-link-no-padding" 
                        style={({isActive}) => isActive ? activeStyle : null}
                    >Pricing
                    </NavLink>
                    <NavLink 
                        to="photos" 
                        className="nav-link nav-link-no-padding" 
                        style={({isActive}) => isActive ? activeStyle : null}
                    >Photos
                    </NavLink>
                </div>
                <Outlet context={van}/>
            </div>
        </div>
    )
}