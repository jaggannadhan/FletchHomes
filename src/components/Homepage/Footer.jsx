import React, {Component} from "react";
import "../../styles/HomePage/Footer.scss";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin, FaHome } from "react-icons/fa";

class Footer extends Component{
    render() {
        return (
            <div className="footer">

                <div className="navbar">
                    <div className="contactus-nav">
                        <div className="nav-elms" >Home</div>
                        <div className="nav-elms" >Product</div>
                        <div className="nav-elms" >About Us</div>
                        <div className="nav-elms" >Contact Us</div>
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
                    <div className="content1">Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. </div>
                    <div className="content2">Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. </div>
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
}

export default Footer;