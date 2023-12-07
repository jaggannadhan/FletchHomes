import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/NavBar/NavBar.scss";
import { FaHome, FaUserCircle } from 'react-icons/fa';
import { MdOutlineLogout } from "react-icons/md";
import { deleteCookie } from "../../Helper/helper.js";


export default function NavBar(props) {
    const { loggedInUser } = {...props};
    const [ showLogout, setShowLogout ] = useState(false);

    function handleLogout() {
        deleteCookie("user");
        location.reload();
    }
    return (
        <div className="nav-bar">

            <div className="nav-logo">
                <Link className="mid-elm" to={{pathname: '../home'}}>
                    <div className="logo-cont">
                        <div className="logo-name">Fletch</div>
                        <FaHome style={{left: "20%", top: "2vw", position: 'absolute', width: "1vw", height: "1vw"}}/>
                        <div className="logo-dots">
                            <div className="dots dot1" />
                            <div className="dots dot2" />
                        </div>
                    </div>
                </Link>
            </div>
            
            <div className="nav-bar-mid">
                <Link className="mid-elm" to={{pathname: '../home'}}>
                    <div className="mid-elm">Home</div>
                </Link>
                <Link className="mid-elm" to={{pathname: '../about-us'}}>
                    <div >About Us</div>
                </Link>
                <Link className="mid-elm" to={{pathname: '../contact-us'}}>
                    <div>Contact Us</div>
                </Link>
            </div>

            <div className="nav-bar-end" onClick={() => setShowLogout(!showLogout)}>
                <div className="profile-name">{loggedInUser}</div>
                <FaUserCircle className="profile-avatar"/>
            </div>

            <div className={showLogout ? "profile-opts" : "close"} onClick={() => handleLogout()}>
                Logout <MdOutlineLogout/> 
            </div>
            
        </div>
    );
}


