import React from "react";
import "../../styles/HomePage/FindProperty.scss";
import homeImg1 from "../../../images/homeImg1.jpeg";
import SearchBar from "../SearchBar/SearchBar.jsx";

export default function FindProperty(props) {
    const { setLocation } = props;

    // onclick change dot color to '#465316'
    return (
        <div className="find-property-carousel">
            <img className="findPropertyHome" src={homeImg1}/>
            <div className="bold-font">
                Find Lucrative
                <br/>
                Investments Here
            </div>

            <div className="search-div">
                <div className="search-nav">
                    <div className="nav-opt find-ppt">Find a Property</div>
                    <div className="highlight"></div>
                    {/* <div className="nav-opt sell-ppt">Sell My Property</div>
                    <div className="nav-opt see-ppt">See Property Estimate</div> */}
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
