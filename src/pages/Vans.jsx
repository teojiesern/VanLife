import React from "react";
import "../server"


// description: 
// "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!"
// id: "1"
// imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png"
// name: "Modest Explorer"
// price: 60
// type: "simple"

export default function Vans(){
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    },[])

    let vansElement = vans.map(van => {
        return ( 
            <div key={van.id}>
                <img src={van.imageUrl} className="van-img"/>
                <div className="van-info">
                    <h2 className="van-name">{van.name}</h2>
                    <div className="van-pricing">
                        <span className="van-price">${van.price}</span>
                        <span className="subtext">/day</span>
                    </div>
                </div>
                <p className={`van-type-button ${van.type}`}>{van.type}</p>
            </div>
        )
    })
    return (
        <div className="vans-container">
            {vansElement}
        </div>
    )
}