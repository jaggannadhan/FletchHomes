import React, { useState } from "react";

import NavBar from "./NavBar.jsx";
import FindProperty from "./FindProperty.jsx";
import Feed from "./Feed.jsx";
import PropertiesList from "../PropertyList/PropertiesList.jsx"
import CheckBackBanner from "./CheckBackBanner.jsx"
import Footer from "./Footer.jsx";

import "../../styles/Homepage/HomePage.scss";

export default function HomePage() {
    const [ location, setLocation ] = useState({city: "San Francisco", state_code: "CA"});

    return (
        <div className={"container"}>
            <NavBar></NavBar>
            <FindProperty
                setLocation={setLocation}
            />
            <Feed></Feed>
            <PropertiesList
                location={location}
            />
            <CheckBackBanner></CheckBackBanner>
            <Footer></Footer>  
        </div>

    );
}


