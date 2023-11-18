import React, { Component } from "react";
import "../../styles/LandingPage/SearchOrSignup.scss";
import areYouReady from "../../../images/areYouReady.jpeg";

class SearchOrSignup extends Component {
    render() {
        return (
            <div className="search-signup">

                <img src={areYouReady} />
                    
                <div className="content">
                    Are You Ready To Buy Your Property?
                    <br/>
                    Let’s Start Search From Today
                </div>

                <div className="search-btn">
                    <div className="btn-inner">
                        Search House
                    </div>

                </div>

                <div className="signup-btn">
                    <div className="btn-inner signup-inner">
                        Sign Up
                    </div>

                </div>

            </div>
        );
    } 
}

export default SearchOrSignup;
