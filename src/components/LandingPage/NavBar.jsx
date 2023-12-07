import React, { Component } from "react";
import { Link } from "react-router-dom";
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
                    <Link className="mid-elm" to={{pathname: 'about-us/'}}>
                        <div>About Us</div>
                    </Link>
                    <a href="#contact-us" className="mid-elm">Contact Us</a>
                </div>

                <div className="nav-bar-end-landing">
                    <Link to={{pathname: 'login/'}}>
                        <div className="nav-box-landing login-box-landing">Login</div>
                    </Link>
                    <Link to={{pathname: 'signup/'}}>
                        <div className="nav-box-landing signup-box-landing">Sign Up</div>
                    </Link>
                </div>
                
            </div>
        );
    }
}

export default NavBar;