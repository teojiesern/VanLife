import React from "react";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";

export function loader(){
    return getVans();
}

export default function Vans(){
    const [searchParams, setSearchParams] = useSearchParams()
    const vans = useLoaderData()
    let typeFilter = searchParams.get("type")
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
                <button className={`filter-btn ${typeFilter === "simple" ? "selected" : ""}`} onClick={() => handleFilter("type","simple")}>Simple</button>
                <button className={`filter-btn ${typeFilter === "luxury" ? "selected" : ""}`} onClick={() => handleFilter("type","luxury")}>Luxury</button>
                <button className={`filter-btn ${typeFilter === "rugged" ? "selected" : ""}`} onClick={() => handleFilter("type","rugged")}>Rugged</button>
                {typeFilter ? <button className="clearFilter" onClick={() => handleFilter("type",null)}>Clear Filter</button> : null}
            </div>
            <div className="vans-container">
                {vansElement}
            </div>
        </div>
        
    )
}