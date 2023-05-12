import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import "../../server"

export default function VanDetail(){
    const params = useParams()
    const location = useLocation()
    const [van, setVan] = React.useState({})

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans))
    },[params.id])

    let returnLocation = location.state.search === '?' ? "/vans" : `/vans${location.state.search}`
    return (
        <div className="van-detail">
            <Link 
                to={returnLocation} 
                className="backButton">
                    &larr;<span>Back to {location.state.type} vans</span>
            </Link>
            <img src={van.imageUrl} className="van-img"/>
            <p className={`van-type-button ${van.type}`}>{van.type}</p>
            <h1>{van.name}</h1>
            <h3>${van.price}<span className="subtext">/day</span></h3>
            <p>{van.description}</p>
            <Link className="linkbutton">Rent this van</Link>
        </div>
    )
}