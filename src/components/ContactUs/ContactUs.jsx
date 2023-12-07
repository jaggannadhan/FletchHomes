import React, {useState, useEffect } from "react";
import "../../styles/LandingPage/ContactUs.scss";
import { BiSolidPhoneCall, BiSolidVideo } from "react-icons/bi";
import { BsFillChatDotsFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import contactImg from "../../../images/contactimg.jpeg";
import NavBar from "../NavBar/NavBar.jsx";
import Footer from '../Footer/Footer.jsx';
import { getCookie } from "../../Helper/helper.js";

export default function ContactUs(props) {
    const [ loggedInUser, setLoggedInUser ] = useState("");

    useEffect(() => {
        const user = getCookie("user");
        if(user) setLoggedInUser(user);
    }, [props]);

    return (
        <div>
            <NavBar loggedInUser={loggedInUser}/>
            <div className="contact-us" id="contact-us">
                <div className="header1">Contact Us</div>
                <div className="header2">Easy to contact us</div>
                <div className="content">
                    We are just a button away! Always at your service.
                </div>
                
                <div className="contact-div call-div">
                    <BiSolidPhoneCall className="svg call" />
                    <div className="header-div">Call</div>
                    <div className="value-div">+1(617) 287-3832</div>
                </div>
                
                <div className="contact-div chat-div">
                    <BsFillChatDotsFill className="svg chat" />
                    <div className="header-div">Chat</div>
                    <div className="value-div">https://discord.com/channels/keneth-fletcher</div>
                </div>
                
                <div className="contact-div video-div">
                    <BiSolidVideo className="svg video" />
                    <div className="header-div">Video Call</div>
                    <div className="value-div">fletch@khomes.ms</div>
                </div>
                
                <div className="contact-div email-div">
                    <MdEmail className="svg email" />
                    <div className="header-div">Email</div>
                    <div className="value-div">keneth.fletcher@umb.edu</div>
                </div>
                
                <div className="img-div">
                    <img className="img" src={contactImg} />
                </div>

            </div>
            <Footer aboutUs={true}/>
        </div>
    );
}