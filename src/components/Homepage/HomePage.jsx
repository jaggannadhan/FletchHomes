import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../NavBar/NavBar.jsx";
import FindProperty from "./FindProperty.jsx";
import Feed from "./Feed.jsx";
import PropertiesList from "../PropertyList/PropertiesList.jsx"
import CheckBackBanner from "./CheckBackBanner.jsx"
import Footer from "../Footer/Footer.jsx";
import { getCookie } from "../../Helper/helper.js";
import "../../styles/Homepage/HomePage.scss";

export default function HomePage(props) {
    const [ loggedInUser, setLoggedInUser ] = useState("");
    const [ location, setLocation ] = useState({city: "San Francisco", state_code: "CA"});
    const urlProps = useLocation();
    

    useEffect(() => {
        const user = getCookie("user");
        if(user) setLoggedInUser(user);
        else window.location.href = '..';
        
        if(urlProps?.state?.scrollToFeed) 
            window.scrollBy(0,1000);

    }, [props]);

    return (
        <div className={"container"}>
            <NavBar loggedInUser={loggedInUser}></NavBar>
            <FindProperty
                setLocation={setLocation}
            />
            <Feed />
            <PropertiesList
                location={location}
            />
            <CheckBackBanner></CheckBackBanner>
            <Footer></Footer>  
        </div>

    );
}


