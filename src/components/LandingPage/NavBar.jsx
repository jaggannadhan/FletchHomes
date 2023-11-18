import React, { Component } from "react";
import "../../styles/LandingPage/NavBar.scss";
import { FaHome } from 'react-icons/fa';

class NavBar extends Component {
    render () {
        return (
            <div className="nav-bar">

                <div className="nav-logo">
                    <div className="logo-cont">
                        <div className="logo-name">Fletch</div>
                        <FaHome style={{left: "20%", top: "2vw", position: 'absolute', width: "1vw", height: "1vw"}}/>
                        <div className="logo-dots">
                            <div className="dots dot1" />
                            <div className="dots dot2" />
                        </div>
                    </div>
                    
                </div>
                
                <div className="nav-bar-mid">
                    <div className="mid-elm">Home</div>
                    <div className="mid-elm">About Us</div>
                    <div className="mid-elm">Product</div>
                    <div className="mid-elm">Contact Us</div>
                </div>

                <div className="nav-bar-end-landing">
                    <div className="nav-box-landing login-box-landing">Login</div>
                    <div className="nav-box-landing signup-box-landing">Sign Up</div>
                </div>
                
            </div>
        );
    }
}

export default NavBar;