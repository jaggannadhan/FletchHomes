import React, { useState, useEffect } from 'react';
import "../../styles/AboutUs/AboutUs.scss";
import NavBar from "../NavBar/NavBar.jsx";
import Footer from '../Footer/Footer.jsx';
import findPropertyHome from '../../../images/findPropertyHome.jpeg';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { getCookie } from "../../Helper/helper.js";

export default function AboutUs(props) {
  const [ loggedInUser, setLoggedInUser ] = useState("");

  useEffect(() => {
    const user = getCookie("user");
    if(user) setLoggedInUser(user);
}, [props]);

  return (
    <div className="about-container">
      <NavBar loggedInUser={loggedInUser}/>
      <section className="about">
        <div className="content">
          <h2>About Us</h2>
          <p>We seek to develop a personal real estate app that simplifies investing, making it easy for people to buy and sell their properties at the right time! Our goal is to help you maximize profit and achieve your financial goals through Fletch.</p>
        </div>
        <div className="image-container">
          <img src={findPropertyHome} alt="Property" />
        </div>
        <div className="services-container">
          <ServiceCard 
            title="Cash Flow"
            description="We suggest those investments that generate a positive cash flow, providing the investor with a surplus of funds."
            iconName="tax" // Replace with your actual icon
          />
          <ServiceCard 
            title="Precise Forecast"
            description="Our Machine Learning algorithms analyze patterns, trends and incorporate numerous variables to enhance forecasting accuracy."
            iconName="insurance" // Replace with your actual icon
          />
          <ServiceCard 
            title="24/7 Support"
            description="We are here to guide you in every step of your lucrative journey and beyond."
            iconName="support" // Replace with your actual icon
          />
          <ServiceCard 
            title="Return On Investment"
            description="We diligently factor variables like appreciation, financing, vacancy rates, maintenance along with fluctuations in the market."
            iconName="cost" // Replace with your actual icon
          />
        </div>
        <div className="quote-container">
          <p>"Owning a home is a keystone of wealth... both financial affluence and emotional security" - Suze Orman</p>
        </div>
        {/* <div className="social-media">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div> */}
        </section>
        <Footer aboutUs={true}/>
    </div>
  );
};

const ServiceCard = ({ title, description, iconName }) => {
  return (
    <div className="service-card">
      <i className={`icon ${iconName}`}></i> {/* Placeholder for the icon */}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};


