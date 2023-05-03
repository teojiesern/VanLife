import React from "react";
import { useOutletContext } from "react-router-dom";

export function HostVanPricing(){
    const van = useOutletContext()
    return (
        <div>
            <p>${van.price}/day</p>
        </div>
    )
}