import React from "react";
import { Link } from "react-router-dom";

export default function About(){
    return (
        <div>
            <nav>
                <h1>#VANLIFE</h1>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </div>
            </nav>
            about
        </div>
    )
}