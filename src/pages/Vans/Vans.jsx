import React from "react";
import "../../server"
import { Link, useSearchParams } from "react-router-dom";

export default function Vans(){
    const [vans, setVans] = React.useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    let typeFilter = searchParams.get("type")
    React.useEffect(() => {
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    },[])
    const displayedVans = typeFilter ? vans.filter(van => {
        return (
            van.type === typeFilter
        )
    }) : vans

    let vansElement = displayedVans.map(van => {
        return ( 
            <div key={van.id} className="van-tile">
                <Link 
                    to={van.id}
                    state={{search: `?${searchParams.toString()}`, type: typeFilter ? typeFilter : "all"}}>
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

    function handleFilter(key, value){
        setSearchParams(prevParams => {
            if(value){
                prevParams.set(key, value)
            }else{
                prevParams.delete(key)
            }
            return prevParams
        })
    }

    return (
        <div>
            <div className="filters">
                <button className="filter-btn" onClick={() => handleFilter("type","simple")}>Simple</button>
                <button className="filter-btn" onClick={() => handleFilter("type","luxury")}>Luxury</button>
                <button className="filter-btn" onClick={() => handleFilter("type","rugged")}>Rugged</button>
                {typeFilter ? <button className="clearFilter" onClick={() => handleFilter("type",null)}>Clear Filter</button> : null}
            </div>
            <div className="vans-container">
                {vansElement}
            </div>
        </div>
        
    )
}