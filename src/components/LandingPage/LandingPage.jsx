import React, {Component} from "react";
import Footer from "../Footer/Footer.jsx";
import ContactUs from "./ContactUs.jsx";
import SearchOrSignup from "./SearchOrSignUp.jsx";
import Calculator from "./Calculator.jsx";
import HowItWorks from "./HowItWorks.jsx";
import AboutUs from "./AboutUs.jsx";
import FindProperty from "./FindProperty.jsx";
import NavBar from "./NavBar.jsx";
import { getCookie } from "../../Helper/helper.js";
import "../../styles/LandingPage/LandingPage.scss";

class LandingPage extends Component{

    render() {
        const user = getCookie("user");

        return (
            <div className={"container"}>
                <NavBar loggedInUser={user}></NavBar>
                <FindProperty></FindProperty>
                <AboutUs></AboutUs>
                <HowItWorks></HowItWorks>
                <Calculator></Calculator>
                <SearchOrSignup></SearchOrSignup>
                <ContactUs></ContactUs>
                <Footer></Footer>  
            </div>

        )
    }
}

export default LandingPage;

