import React from "react";
import "../../styles/Overview/CheckBackBanner.scss";
import banner from "../../../images/banner.jpeg"

export default function CheckBackBanner() {
    return (
        <div className="overview-banner"> 
            <img src={ banner }/>
        </div>
    );
}
