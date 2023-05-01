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

    console.log(vans)
    let vansElement = vans.map(van => {
        return ( 
            <div key={van.id}>
                
            </div>
        )
    })
    return (
        <h1>hi</h1>
    )
}