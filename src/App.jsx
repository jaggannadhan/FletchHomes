import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import HomePage from "./components/Homepage/HomePage.jsx";
import Overview from "./components/Overview/Overview.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import LoginPage from "./components/Login/LoginPage.jsx";
import SignUpPage from "./components/SignUp/SignupPage.jsx";
import MainPage from "./components/MapPage/MainPage.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/map" element={<MainPage />} />
                <Route path="/home/overview/:property_id" element={<Overview />} />
                <Route path="*" element={<LandingPage />} />
            </Routes>
        </BrowserRouter>
    );   
}