import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout"
import { Dashboard } from "./pages/Host/Dashboard";
import { Income } from "./pages/Host/Income";
import { Reviews } from "./pages/Host/Reviews";
import { HostVans } from "./pages/Host/HostVans";
import { HostVanInfo } from "./pages/Host/HostVanInfo";
import { HostVanDetail } from "./pages/Host/HostVanDetail";
import { HostVanPricing } from "./pages/Host/HostVanPricing";
import { HostVanPhotos } from "./pages/Host/HostVanPhotos";

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />}/>
                    <Route path="about" element={<About />}/>
                    <Route path="vans" element={<Vans />}/>
                    <Route path="vans/:id" element={<VanDetail />}/>

                    <Route path="host" element={<HostLayout />}>    
                        <Route index element={<Dashboard />}/>
                        <Route path="income" element={<Income />}/>
                        <Route path="vans" element={<HostVans />}/>
                        <Route path="vans/:id" element={<HostVanInfo />}>
                            <Route index element={<HostVanDetail />}/>
                            <Route path="pricing" element={<HostVanPricing />}/>
                            <Route path="photos" element={<HostVanPhotos />}/>
                        </Route>
                        <Route path="reviews" element={<Reviews />}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}