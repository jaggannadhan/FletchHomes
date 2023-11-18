import React, { Component } from "react";
import "../../styles/HomePage/NavBar.scss";
import { FaHome, FaUserCircle } from 'react-icons/fa';

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

                <div className="nav-bar-end">
                    <div className="profile-name">Jaggu</div>
                    <FaUserCircle className="profile-avatar"/>
                </div>
                
            </div>
        );
    }
}

export default NavBar;