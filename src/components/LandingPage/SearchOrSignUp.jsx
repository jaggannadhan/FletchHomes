import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../styles/LandingPage/SearchOrSignup.scss";
import banner1 from "../../../images/banner1.jpeg";

class SearchOrSignup extends Component {
    render() {
        return (
            <div className="search-signup">

                <img src={banner1} />
                    
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
                    <Link className="btn-inner signup-inner" to={{pathname: 'signup/'}}> 
                        <div >Sign Up</div>
                    </Link>
                </div>

            </div>
        );
    } 
}

export default SearchOrSignup;
