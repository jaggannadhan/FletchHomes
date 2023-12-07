import React from "react";
import "../../styles/Overview/ImageGallery.scss"; 
import { IoMdClose } from "react-icons/io";
import { getBetterImages } from "../../Helper/helper.js";

export default function ImageGallery(props) {
    const { setShowGallery, photos } = props
    console.log(photos);

    return(
        <div className="img-container">
            <div class="top">
                {
                    photos.map(photo => {
                        return (
                            <div class="img"><img class="img1" src={getBetterImages(photo?.href)}/></div>
                        );
                    })
                }
            </div>
            <IoMdClose className="close" onClick={() => setShowGallery(false)} />
        </div>
    );
}