import React from "react";
import { Link } from "react-router-dom";

export default function About(){
    return (
        <div>
            <img src="/assets/person-sitting-on-van.png" className="about-img"></img>
            <div className="about-content">
                <h1 className="no-margin">Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>
                    Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)
                </p>    
                <p>
                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                </p>
                <div className="explore-container">
                    <h2 className="no-margin">Your destination is waiting.</h2>
                    <h2 className="no-margin">Your van is ready.</h2>
                    <Link to="/vans">Explore our vans</Link>
                </div>
            </div>
        </div>
    )
}