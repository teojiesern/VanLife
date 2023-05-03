import React from "react";
import "../../server"
import { Link } from "react-router-dom";

export default function Vans(){
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    },[])

    let vansElement = vans.map(van => {
        return ( 
            <div key={van.id} className="van-tile">
                <Link to={`/vans/${van.id}`}>
                    <img src={van.imageUrl} className="van-img"/>
                    <div className="van-info">
                        <h2 className="van-name">{van.name}</h2>
                        <div className="van-pricing">
                            <span className="van-price">${van.price}</span>
                            <span className="subtext block">/day</span>
                        </div>
                    </div>
                    <p className={`van-type-button ${van.type}`}>{van.type}</p>
                </Link>
            </div>
        )
    })
    return (
        <div className="vans-container">
            {vansElement}
        </div>
    )
}