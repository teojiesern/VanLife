import React from "react";
import { NavLink, useOutletContext } from "react-router-dom";

export function HostVans(){
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/host/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    },[])


    const vansList = vans.map(van => {
        return (
            <NavLink to={van.id} key={van.id} className="listed-van">
                <img src={van.imageUrl} />
                <div>
                    <h1 className="no-margin vanName">{van.name}</h1>
                    <p className="no-margin">${van.price}/day</p>
                </div>
            </NavLink>
        )
    })
    return (
        <div>
            <h1>Your Listed Vans</h1>
            <div className="listed-van-conatiner">
                {vansList}
            </div>
        </div>
    )
}