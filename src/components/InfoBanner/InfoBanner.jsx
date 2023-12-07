import React, { useState, useEffect } from "react";
import "../../styles/InfoBanner/InfoBanner.scss"; 
import { IoClose } from "react-icons/io5";

export default function InfoBanner(props) {
    const { open, message, success } = {...props};
    const [ isOpen, setIsOpen ] = useState(false);

    useEffect(() => {
        setIsOpen(open);
    }, [props]);

    return (
        <div className={isOpen ? success ? "info-banner" : "info-banner error" : "close"}>
            <div className="message">{message}</div>
            <IoClose className="close-banner-icon" onClick={() => setIsOpen(false)}/>
        </div>
    );
}