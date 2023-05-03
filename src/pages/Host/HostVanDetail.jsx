import React from "react";
import { useOutletContext } from "react-router-dom";

export function HostVanDetail(){
    const van = useOutletContext()
    return (
        <div>
            <p><b>Name: </b>{van.name}</p>
            <p><b>Category: </b>{van.type}</p>
            <p><b>Description: </b>{van.description}</p>
            <p><b>Visibility: </b>public</p>
        </div>
    )
}