import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";

export default function App(){
    return (
        <BrowserRouter>
            <nav>
                <Link to="/" className="nav-link vanlife">#VANLIFE</Link>
                <div>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/vans" className="nav-link">Van</Link>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/vans" element={<Vans />}/>
                <Route path="/vans/:id" element={<VanDetail />}/>
            </Routes>
            <div className="home-footer">
                <p>Ⓒ 2022 #VANLIFE</p>
            </div>
        </BrowserRouter>
    )
}