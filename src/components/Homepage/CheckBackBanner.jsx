import React from "react";
import "../../styles/Homepage/CheckBackBanner.scss";
import banner from "../../../images/banner.jpeg"

export default function CheckBackBanner() {
    return (
        <div className="banner"> 
            <img src={ banner }/>
        </div>
    );
}
