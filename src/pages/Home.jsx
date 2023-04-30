import React from "react";
import { Link } from "react-router-dom"

export default function Home(){
    return (
        <div>
            <nav>
                <h1>#VANLIFE</h1>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </div>
            </nav>
            <div className= "home">
                <div className="home-content">
                    <h1>You got the travel plans, we got the travel vans.</h1>
                    <p>
                        Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
                    </p>
                    <button>Find your van</button>
                </div>
            </div>
            <div className="home-footer">
                <p>Ⓒ 2022 #VANLIFE</p>
            </div>
        </div>
    )
}