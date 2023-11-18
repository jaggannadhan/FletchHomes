import React, { Component } from "react";
import "../../styles/LandingPage/FindProperty.scss";
import LandingPage1 from "../../../images/LandingPage1.jpeg";
import { BrowserRouter, Link } from "react-router-dom";

class FindProperty extends Component {
    // onclick change dot color to '#465316'
    render () {
        return (
            <div className="find-property-carousel-landing">
                <img className="landingpage1" src={LandingPage1}/>
                <div className="bold-font">
                    Find Your Best 
                    <br/>
                    Smart Real Estate
                </div>
                <div className="norm-font">
                    Find a home or space from our search<br/>bar. Enter a specific location, property type
                    <br/>
                    and your price range. We will take care!
                </div>
                
                <Link to={{pathname: 'home/'}} 
                >
                    <div className="find-box">
                        <div id="find-property-box"/>
                        <div id="find-property-content">Find your property</div>
                    </div>
                </Link>
                
                <div className="carousel-slider">
                    <div className="carousel-dots" />
                    <div className="carousel-dots" />
                    <div className="carousel-dots" />
                    <div className="carousel-dots" />
                </div>
            </div>
        );
    }
}

export default FindProperty;