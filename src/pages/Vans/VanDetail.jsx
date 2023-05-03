import React from "react";
import { Link, useParams } from "react-router-dom";
import "../../server"

export default function VanDetail(){
    const params = useParams()
    const [van, setVan] = React.useState({})

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans))
    },[params.id])

    return (
        <div className="van-detail">
            <Link to="/vans" className="backButton">&larr;<span> Back to all vans</span></Link>
            <img src={van.imageUrl} className="van-img"/>
            <p className={`van-type-button ${van.type}`}>{van.type}</p>
            <h1>{van.name}</h1>
            <h3>${van.price}<span className="subtext">/day</span></h3>
            <p>{van.description}</p>
            <Link className="linkbutton">Rent this van</Link>
        </div>
    )
}