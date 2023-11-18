import React, { useState } from 'react';
import '../../styles/PropertyList/PropertyCard.scss';
import { BrowserRouter, Link } from "react-router-dom";

import { PiBathtubBold } from "react-icons/pi";
import { GiHomeGarage, GiBed } from "react-icons/gi";
import { TbGridDots } from "react-icons/tb";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import imageNotAvailable from "../../../images/imageNotAvailable.png";

const PropertyCard = ({ imageSrc, description, price, address, property_id }) => {
  const { line, city, state_code, postal_code } = {...address};
  const { baths, beds, sqft } = {...description};

  const [ isFav, setIsFav ] = useState(false);

  return (
        <div className="preview-div">
          <div className="preview-img-div">
              <img src={imageSrc || imageNotAvailable} />
              <div className="preview-slider-cont"/>
              <div className="preview-slider-dots" style={{left: "10.4vw"}} />
              <div className="preview-slider-dots" style={{left: "11.1vw"}} />
              <div className="preview-slider-dots" style={{left: "11.8vw"}} />
              <div className="preview-slider-dots" style={{left: "12.5vw"}} />
              <div className="preview-slider-dots" style={{left: "13.1vw"}} />
              <div className="preview-slider-dots" style={{left: "13.8vw"}} />
          </div>

          <div className="prop-det-div">
              
              {/* <div className="recom-fa" >Recommended for Family!</div> */}

              <div className="preview-header" >{line},<br/>{state_code} {postal_code}</div>
              
              {
                isFav ? 
                <BsHeartFill className="fav-svg" onClick={() => setIsFav(false)} /> : 
                <BsHeart className="fav-svg" onClick={() => setIsFav(true)} />
              }

              <div className="fav-label" >Add Favorite</div>
              
              <PiBathtubBold className="bath-svg" />
              <div className="bath-det" >{baths} bathroom</div>
              
              <GiBed className="bed-svg" />
              <div className="bed-det" >{beds} beds</div>
              
              <TbGridDots className="area-svg" />
              <div className="area-det" >{sqft} Sq. Ft</div>
              
              <div className="price-det" >{format_price(price)}</div>
              {/* <div style={{position: "relative", top: "11.3vw", color: "blue"}}>Cash flow: 308 / month</div> */}

              <Link to={{pathname: 'overview/' + property_id, 
                        state: {property_id: property_id}}} 
              >
                <div className="view-det-div" />
                <div className="view-det-inner">View Details</div>
              </Link>
          </div>
        </div>
  );
};


function format_price(price) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return formatter.format(price).split(".")[0];
}


export default PropertyCard;