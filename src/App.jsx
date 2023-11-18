import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import HomePage from "./components/Homepage/HomePage.jsx";
import Overview from "./components/Overview/Overview.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/home/overview/:property_id" element={<Overview />} />
                <Route path="*" element={<LandingPage />} />
            </Routes>
        </BrowserRouter>
    );   
}