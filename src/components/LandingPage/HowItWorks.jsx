import React, { Component } from "react";
import "../../styles/LandingPage/HowItWorks.scss";
import howItWorks1 from "../../../images/howItWorks1.jpeg";
import howItWorks2 from "../../../images/howItWorks2.jpeg";
import { PiBathtubBold } from "react-icons/pi";
import { GiHomeGarage } from "react-icons/gi";
import { TbGridDots } from "react-icons/tb";
import { BsHeart } from "react-icons/bs";
import scheduleHouse from "../../../images/ScheduleHouse.png";

class HowItWorks extends Component {
    render () {
        return (
            <div className="how-it-works">
                <div className="hiw-div">
                    <div className="hiw-head">
                        How it works
                    </div>
                    <div className="hiw-content">
                        Our unique process gives you peace of mind from home rent to services.
                    </div>
                    
                </div>

                <div className="hiw-search-bar">
                    
                    <div className="toggle-opt opt-buy" />
                    <div className="toggle-opt opt-sell" />
                    <div className="opt-content buy">Buy</div>
                    <div className="opt-content sell">Rent</div>
                    
                    <div className="search-bar-landing" />
                    <div className="search-category place">City/Street</div>
                    <div className="search-category type">Property Type</div>
                    <div className="search-category price">Price Range</div>
                    
                    <div className="values place">
                        New York City
                    </div>
                    <div className="values type">
                        Duplex House
                    </div>
                    <div className="values price">
                        $18,000 - $30,000
                    </div>

                    <svg className="search-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
                        <path d="M35 35L27.5233 27.51L35 35ZM31.6667 17.5C31.6667 21.2573 30.1741 24.8606 27.5174 27.5174C24.8606 30.1742 21.2572 31.6667 17.5 31.6667C13.7428 31.6667 10.1394 30.1742 7.48266 27.5174C4.8259 24.8606 3.33334 21.2573 3.33334 17.5C3.33334 13.7428 4.8259 10.1395 7.48266 7.48269C10.1394 4.82593 13.7428 3.33337 17.5 3.33337C21.2572 3.33337 24.8606 4.82593 27.5174 7.48269C30.1741 10.1395 31.6667 13.7428 31.6667 17.5V17.5Z" stroke="black" stroke-width="2" stroke-linecap="round"/>
                    </svg>

                </div>

                <div className="search-demo">
                    <div className="search-icon-div" />
                    <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M35 35L27.5233 27.51L35 35ZM31.6666 17.5C31.6666 21.2573 30.1741 24.8606 27.5173 27.5174C24.8606 30.1742 21.2572 31.6667 17.5 31.6667C13.7427 31.6667 10.1394 30.1742 7.48263 27.5174C4.82587 24.8606 3.33331 21.2573 3.33331 17.5C3.33331 13.7428 4.82587 10.1395 7.48263 7.48269C10.1394 4.82593 13.7427 3.33337 17.5 3.33337C21.2572 3.33337 24.8606 4.82593 27.5173 7.48269C30.1741 10.1395 31.6666 13.7428 31.6666 17.5V17.5Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                        
                    <div className="search-head">
                        Search a Property
                    </div>
                    <div className="search-content">
                        Find a home or space from our search<br/>bar. Enter a specific location, property type and your price range. We will take it from there!
                    </div>
                    
                    <div className="preview-2-div">
                        <div className="preview-2-img-div">
                            <img className="howItWorks2" src={howItWorks2} />
                            <div className="preview-slider-cont2" />
                            <div className="preview-slider2-dots" style={{left: "7.2vw"}} />
                            <div className="preview-slider2-dots" style={{left: "7.6vw"}} />
                            <div className="preview-slider2-dots" style={{left: "8.0vw"}} />
                            <div className="preview-slider2-dots" style={{left: "8.4vw"}} />
                            <div className="preview-slider2-dots" style={{left: "8.8vw"}} />
                            <div className="preview-slider2-dots" style={{left: "9.2vw"}} />
                        </div>
                        <div className="preview-2-head">885 Park St #215, Bronx,<br/>WA 95466</div>
                        <BsHeart className="fav-svg2"/>
                        <div className="fav-label2">Add Favorite</div>
                        <div className="prop-det2-div">
                            <PiBathtubBold className="bath-svg2"/>
                            <div className="bath-det2">4 bathroom</div>
                            
                            <GiHomeGarage className="garg-svg2"/>
                            <div className="garg-det2">2 garage</div>

                            <TbGridDots className="area-svg2" />
                            <div className="area-det2">2500 Sq. Ft</div>
                        </div>
                        <div className="price-det2">$25,000</div>
                        
                        <div className="view-det2-div" />
                        <div className="view-det2-inner">View Details</div>
                    
                    </div>


                    <div className="preview-1-div">
                        <div className="preview-1-img-div">
                            <img className="howItWorks1" src={howItWorks1} />
                            <div className="preview-slider-cont1"/>
                            <div className="preview-slider1-dots" style={{left: "10.4vw"}} />
                            <div className="preview-slider1-dots" style={{left: "11.1vw"}} />
                            <div className="preview-slider1-dots" style={{left: "11.8vw"}} />
                            <div className="preview-slider1-dots" style={{left: "12.5vw"}} />
                            <div className="preview-slider1-dots" style={{left: "13.1vw"}} />
                            <div className="preview-slider1-dots" style={{left: "13.8vw"}} />
                        </div>

                        <div className="prop-det1-div">
                            
                            <div className="recom-fa" >Recommended for Family!</div>

                            <div className="preview-1-head" >885 Duck St #502, Seattle,<br/>WA 95466</div>
                            <BsHeart className="fav-svg1" />
                            <div className="fav-label1" >Add Favorite</div>
                            
                            <PiBathtubBold className="bath-svg1" />
                            <div className="bath-det1" >4 bathroom</div>
                            
                            <GiHomeGarage className="garg-svg1" />
                            <div className="garg-det1" >2 garage</div>
                            
                            <TbGridDots className="area-svg1" />
                            <div className="area-det1" >2500 Sq. Ft</div>
                            
                            <div className="price-det1" >$25,000</div>

                            <div className="view-det1-div" />
                            <div className="view-det1-inner">View Details</div>
                        </div>
                    </div>
                    
                </div>

                <div className="scheduler-section">
                    <div className="schedule-div">
                        <div className="scheduler-bar1">
                            <div className="schedule-tab1" />
                            <div className="schedule-tab1-cont">Schedule a tour</div>
                            <div className="request-tab1-cont">Request Info</div>
                        </div>

                        <div className="tour-type">
                            <div className="type-label">Tour Type</div>

                            <div className="type1-radio"/>
                            <div className="type1">In-Person</div>
                            
                            <div className="type2-radio"/>
                            <div className="type2">Virtual</div>
                        </div>
                        
                        <div className="date-time-div">
                            <div className="date-label">Date</div>
                            <div className="date-cont"/>
                            <div className="date-val">30/01/2022</div>
                            
                            <div className="time-label">Time</div>
                            <div className="time-cont"/>
                            <div className="time-val">12:00 PM</div>
                        </div>

                        <div className="user-det-div">
                            <div className="name-label1">Name</div>
                            <div className="name-cont1"/>
                            
                            <div className="phone-label">Phone</div>
                            <div className="phone-cont"/>
                            
                            <div className="email-label1">Email</div>
                            <div className="email-cont1"/>
                        </div>
                        
                        <div className="schedule-btn-cont"/>
                        <div className="schedule-btn-inner">Schedule a tour</div>
                    </div>
                    <div className="request-div">
                        <div className="scheduler-bar2">
                            <div className="schedule-tab2"/>
                            <div className="request-tab2-cont">Request Info</div>
                            <div className="schedule-tab2-cont">Schedule a tour</div>
                        </div>

                        <div className="user-input-div"> 
                            <div className="name-label2">Name</div>
                            <div className="name-cont2"/>
                            
                            <div className="email-label2">Email</div>
                            <div className="email-cont2"/>
                            
                            <div className="msg-label">Message</div>
                            <div className="msg-cont"/>
                        </div>

                        <div className="request-btn-cont" />
                        <div className="request-btn-inner">Request Info</div>
                    </div>

                    <img className="scheduleHouse" src={scheduleHouse} />
                    <div className="scheduler-head" >
                        Choose your perfect 
                        <br/>
                        property
                    </div>
                    <div className="scheduler-content">
                        Find a home or space from our search bar. 
                        <br/>
                        Enter a specific location, property type and your price range. We will take it from there!
                    </div>
                </div>
            </div>
        );
    }
}

export default HowItWorks;