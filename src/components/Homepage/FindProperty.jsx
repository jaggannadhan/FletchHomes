import React from "react";
import "../../styles/HomePage/FindProperty.scss";
import findPropertyHome from "../../../images/findPropertyHome.jpeg";
import SearchBar from "../SearchBar/SearchBar.jsx";

export default function FindProperty(props) {
    const { setLocation } = props;

    // onclick change dot color to '#465316'
    return (
        <div className="find-property-carousel">
            <img className="findPropertyHome" src={findPropertyHome}/>
            <div className="bold-font">
                Find Your Dream 
                <br/>
                Property Here
            </div>

            <div className="search-div">
                <div className="search-nav">
                    <div className="nav-opt find-ppt">Find a Property</div>
                    <div className="highlight"></div>
                    <div className="nav-opt sell-ppt">Sell My Property</div>
                    <div className="nav-opt see-ppt">See Property Estimate</div>
                </div>

                <div className="search-bar-pos"> 
                    <SearchBar
                        setLocation={setLocation}
                    /> 
                </div>
                
            </div>
        </div>
    );
}
