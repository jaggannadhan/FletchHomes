import React from "react";
import "../../styles/Overview/ImageGallery.scss"; 
import { IoMdClose } from "react-icons/io";
import { getBetterImages } from "../../Helper/helper.js";

export default function ImageGallery(props) {
    const { setShowGallery, photos } = props
    console.log(photos);

    return(
        <div className="img-container">
            <div style={{cursor: "pointer"}} onClick={() => setShowGallery(false)}>Close Gallery</div>
            <IoMdClose className="close" onClick={() => setShowGallery(false)} />
            <div className="top">
                {
                    photos.map(photo => {
                        return (
                            <div className="img"><img className="img1" src={getBetterImages(photo?.href)}/></div>
                        );
                    })
                }
            </div>
        </div>
    );
}