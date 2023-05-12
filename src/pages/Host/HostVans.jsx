import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";

export function loader(){
    return getHostVans()
}

export function HostVans(){
    const vans = useLoaderData()

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