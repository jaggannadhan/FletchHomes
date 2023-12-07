import React from 'react';
import Footer from '../../LandingPage/Footer.jsx';
import ContactUs from '../../HomePage/ContactUs.jsx';
import NavBar from '../../NavBar/NavBar.jsx';
import ContactForm from './ContactForm.jsx';

const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            <ContactUs />
            <ContactForm />
            <Footer />
        </>
    );
}

export default Layout;