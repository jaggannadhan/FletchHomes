import React from "react";
import "../../styles/Overview/ImageGallery.scss"; 
import { IoMdClose } from "react-icons/io";

export default function ImageGallery(props) {
    const { setShowGallery } = props

    return(
        <div className="img-container">
            <div class="top">
                <a class="img" href="#img_13"><img class="img1" src="https://photos.zillowstatic.com/fp/54c01030dab32616036f09772ab85fa1-cc_ft_576.jpg"/></a>
                <a class="img" href="#img_14"><img class="img1" src="https://photos.zillowstatic.com/fp/9dda12313fe8f08936621eaf9c61745b-cc_ft_576.jpg"/></a>
                <a class="img" href="#img_15"><img class="img1" src="https://photos.zillowstatic.com/fp/7cd293061e5b4683a9624c08a4cbb411-cc_ft_576.jpg"/></a>
                <a class="img" href="#img_16"><img class="img1" src="https://photos.zillowstatic.com/fp/de874609342dbd3f0a040b0b422989d5-cc_ft_576.jpg"/></a>
                <a class="img" href="#img_16"><img class="img1" src="https://photos.zillowstatic.com/fp/61f74dbe8ee2602f2b36dbc50a9fbc3e-cc_ft_960.jpg"/></a>
                <a class="img" href="#img_16"><img class="img1" src="https://photos.zillowstatic.com/fp/f7ad6a4803a1142d01b17c5eabbcb510-cc_ft_576.jpg"/></a>
                <a class="img" href="#img_16"><img class="img1" src="https://photos.zillowstatic.com/fp/13708b304f3466951aa4ae93f785fbb1-cc_ft_576.jpg"/></a>
            </div>
            <IoMdClose className="close" onClick={() => setShowGallery(false)} />
        </div>
    );
}