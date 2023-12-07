import React from "react";
import "../../styles/Homepage/Feed.scss";

export default function HomePage() {
    return (
        <div className="feed" id="feed">
            <div className="header-div">
                <div className="higlight"></div> 
                <div className="header">Our Feed</div>
            </div>
            {/* <div className="feed-selector">
                <div className="selected">New</div>
                <div className="feed-type">Recommended Properties</div>
                <div className="feed-type">Recently Viewed Properties</div>
                <div className="feed-type">Favorited Properties</div>
            </div> */}
        </div>
    );
}