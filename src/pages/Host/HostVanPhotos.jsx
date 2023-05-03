import React from "react";
import { useOutletContext } from "react-router-dom";

export function HostVanPhotos(){
    const van = useOutletContext()
    return (
        <div>
            <img src={van.imageUrl} style={{width:"20%", margin:"20px 10px 10px 0"}}/>
        </div>
    )
}