import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";

export default function App(){
    return (
        <BrowserRouter>
            <nav>
                <Link to="/" className="nav-link vanlife">#VANLIFE</Link>
                <div>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/van" className="nav-link">Van</Link>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
            </Routes>
        </BrowserRouter>
    )
}