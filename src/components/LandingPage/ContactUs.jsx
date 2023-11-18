import React, {Component} from "react";
import "../../styles/LandingPage/ContactUs.scss";
import { BiSolidPhoneCall, BiSolidVideo } from "react-icons/bi";
import { BsFillChatDotsFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import contactImg from "../../../images/contactimg.jpeg";

class ContactUs extends Component{
    render() {
        return (
            <div className="contact-us">
                
                <div className="header1">Contact Us</div>
                <div className="header2">Easy to contact us</div>
                <div className="content">
                    We are just a button away! Always at your service.
                </div>
                
                <div className="contact-div call-div">
                    <BiSolidPhoneCall className="svg call" />
                    <div className="header-div">Call</div>
                    <div className="value-div">01234567890</div>

                    <button className="contact-btn call-btn">Call Now</button>
                </div>
                
                <div className="contact-div chat-div">
                    <BsFillChatDotsFill className="svg chat" />
                    <div className="header-div">Chat</div>
                    <div className="value-div">01234567890</div>

                    <button className="contact-btn chat-btn">Chat Now</button>
                </div>
                
                <div className="contact-div video-div">
                    <BiSolidVideo className="svg video" />
                    <div className="header-div">Video Call</div>
                    <div className="value-div">fletch@khomes.ms</div>

                    <button className="contact-btn video-btn">Video Call Now</button>
                </div>
                
                <div className="contact-div email-div">
                    <MdEmail className="svg email" />
                    <div className="header-div">Email</div>
                    <div className="value-div">01234567890</div>

                    <button className="contact-btn email-btn">Message Now</button>
                </div>
                
                <div className="img-div">
                    <img className="img" src={contactImg} />
                </div>

            </div>
        );
    }
}

export default ContactUs;