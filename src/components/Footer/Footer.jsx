import React from "react";
import { Link } from "react-router-dom";

import "../../styles/Footer/Footer.scss";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin, FaHome } from "react-icons/fa";
import { getCookie } from "../../Helper/helper";

export default function Footer(props) {
    const { aboutUs, overView } = {...props};

    return (
        <div className="footer" style={aboutUs ? {top: "0vw"} : overView ? {top: "42vw"} : {}}>

            <div className="navbar">
                <div className="contactus-nav">
                    <Link className="nav-elms" to={{pathname: '../home'}}>
                        Home
                    </Link>
                    <Link className="nav-elms" to={{pathname: '../about-us'}}>About Us</Link>
                    <Link className="nav-elms" to={{pathname: '../contact-us'}}>Contact Us</Link>
                </div>
                
                <div className="nav-logo">
                    <div className="logo-cont">
                        <div className="logo-name">Fletch</div>
                        <FaHome style={{left: "20%", top: "10%", position: 'absolute', width: "1vw", height: "1vw"}}/>
                        <div className="logo-dots">
                            <div className="dots dot1" />
                            <div className="dots dot2" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-div">
                <div className="content1">Investments made easy, <br/>with just a click. </div>
                <div className="content2">Invest through us, <br/>Enjoy later. </div>
            </div>

            <div className="social-media">
                    <FaLinkedin className="svg"/>
                    <RiInstagramFill className="svg"/>
            </div>

            <div className="terms-conditns">
                <div className="elms">@2022 Fletch Homes. All rights reserved</div>
                <div className="elms">Terms & Agreements</div>
                <div className="elms">Privacy Policy</div>
            </div>
        </div>
    )
}
