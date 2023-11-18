import React, { useState, useEffect } from "react";
import "../../styles/Overview/SimilarProperties.scss";

import { getSimilarHomes } from "../../Apis/apis.js";
import PropertyCard from "../PropertyList/PropertyCard.jsx";

import howItWorks1 from "../../../images/howItWorks1.jpeg";
import howItWorks2 from "../../../images/howItWorks2.jpeg";
import { PiBathtubBold } from "react-icons/pi";
import { GiHomeGarage } from "react-icons/gi";
import { TbGridDots } from "react-icons/tb";
import { BsHeart } from "react-icons/bs";

export default function SimilarProperties(props) {
    const { property_id } = props;
    const [ isLoading, setIsLoading ] = useState(false);
    const [ similarHomes, setSimilarHomes ] = useState([]);

    useEffect(() => {
        if(!isLoading) {
            setIsLoading(true);
            getSimilarHomes(property_id).then((res) => {
                setSimilarHomes(res.data || []);
                setIsLoading(false);
            });
        }
    }, [property_id]);


    return (
        <section className="similar-properties-section">
            <div className="header">Similar properties nearby - AI generated</div>
            <br/>
            {/* {similarHomes.map((property) => (
                <PropertyCard 
                    key={property.listing_id}
                    property_id={property.property_id}
                    imageSrc={property.primary_photo?.href || ""}
                    description={property.description}
                    price={property.list_price}
                    address={property.location?.address}
                />
            ))} */}

            <div className="preview-2-div" style={{position: "relative", top: "5vw", left: "-46vw"}}>
                <div className="preview-2-img-div">
                    <img className="howItWorks2" src="https://ap.rdcpix.com/a8aa03c7a278c88bc834006732ce8d21l-m3285507638od-w1024_h768_x2.jpg" />
                    <div className="preview-slider-cont2" />
                    <div className="preview-slider2-dots" style={{left: "7.2vw"}} />
                    <div className="preview-slider2-dots" style={{left: "7.6vw"}} />
                    <div className="preview-slider2-dots" style={{left: "8.0vw"}} />
                    <div className="preview-slider2-dots" style={{left: "8.4vw"}} />
                    <div className="preview-slider2-dots" style={{left: "8.8vw"}} />
                    <div className="preview-slider2-dots" style={{left: "9.2vw"}} />
                </div>
                <div className="preview-2-head">125 Lolita St #215, San Jose,<br/>WA 95466</div>
                <BsHeart className="fav-svg2"/>
                <div className="fav-label2">Add Favorite</div>
                <div className="prop-det2-div">
                    <PiBathtubBold className="bath-svg2"/>
                    <div className="bath-det2">2 bathroom</div>
                    
                    <GiHomeGarage className="garg-svg2"/>
                    <div className="garg-det2">1 garage</div>

                    <TbGridDots className="area-svg2" />
                    <div className="area-det2">1920 Sq. Ft</div>
                </div>
                <div className="price-det2">$450,000</div>
                
                <div className="view-det2-div" />
                <div className="view-det2-inner">View Details</div>
            
            </div>

            <div className="preview-2-div" style={{position: "relative", top: "5vw", left: "-33vw"}}>
                <div className="preview-2-img-div">
                    <img className="howItWorks2" src="https://ap.rdcpix.com/b652913200d9a72180ca67342b5c6fb3l-m4174425473od-w1024_h768_x2.jpg"/>
                    <div className="preview-slider-cont2" />
                    <div className="preview-slider2-dots" style={{left: "7.2vw"}} />
                    <div className="preview-slider2-dots" style={{left: "7.6vw"}} />
                    <div className="preview-slider2-dots" style={{left: "8.0vw"}} />
                    <div className="preview-slider2-dots" style={{left: "8.4vw"}} />
                    <div className="preview-slider2-dots" style={{left: "8.8vw"}} />
                    <div className="preview-slider2-dots" style={{left: "9.2vw"}} />
                </div>
                <div className="preview-2-head">885 Park St #215, Bronx,<br/>WA 95466</div>
                <BsHeart className="fav-svg2"/>
                <div className="fav-label2">Add Favorite</div>
                <div className="prop-det2-div">
                    <PiBathtubBold className="bath-svg2"/>
                    <div className="bath-det2">4 bathroom</div>
                    
                    <GiHomeGarage className="garg-svg2"/>
                    <div className="garg-det2">2 garage</div>

                    <TbGridDots className="area-svg2" />
                    <div className="area-det2">2500 Sq. Ft</div>
                </div>
                <div className="price-det2">$25,000</div>
                
                <div className="view-det2-div" />
                <div className="view-det2-inner">View Details</div>
            
            </div>

            <div className="preview-2-div" style={{position: "relative", top: "5vw", left: "-21vw"}}>
                <div className="preview-2-img-div">
                    <img className="howItWorks2" src="https://ap.rdcpix.com/1f50cf12aae7416dbd27c6706eb4c589l-m1386990736od-w1024_h768_x2.jpg" />
                    <div className="preview-slider-cont2" />
                    <div className="preview-slider2-dots" style={{left: "7.2vw"}} />
                    <div className="preview-slider2-dots" style={{left: "7.6vw"}} />
                    <div className="preview-slider2-dots" style={{left: "8.0vw"}} />
                    <div className="preview-slider2-dots" style={{left: "8.4vw"}} />
                    <div className="preview-slider2-dots" style={{left: "8.8vw"}} />
                    <div className="preview-slider2-dots" style={{left: "9.2vw"}} />
                </div>
                <div className="preview-2-head">1 South Point #417, Dorchester,<br/>MA 02125</div>
                <BsHeart className="fav-svg2"/>
                <div className="fav-label2">Add Favorite</div>
                <div className="prop-det2-div">
                    <PiBathtubBold className="bath-svg2"/>
                    <div className="bath-det2">2 bathroom</div>
                    
                    <GiHomeGarage className="garg-svg2"/>
                    <div className="garg-det2">2 garage</div>

                    <TbGridDots className="area-svg2" />
                    <div className="area-det2">2420 Sq. Ft</div>
                </div>
                <div className="price-det2">$125,000</div>
                
                <div className="view-det2-div" />
                <div className="view-det2-inner">View Details</div>
            
            </div>

            <div className="preview-2-div" style={{position: "relative", top: "5vw", left: "-9vw"}}>
                <div className="preview-2-img-div">
                    <img className="howItWorks2" src="https://ap.rdcpix.com/f13b0cae006419a9702ddbe1596d1951l-m3372566388od-w1024_h768_x2.jpg" />
                    <div className="preview-slider-cont2" />
                    <div className="preview-slider2-dots" style={{left: "7.2vw"}} />
                    <div className="preview-slider2-dots" style={{left: "7.6vw"}} />
                    <div className="preview-slider2-dots" style={{left: "8.0vw"}} />
                    <div className="preview-slider2-dots" style={{left: "8.4vw"}} />
                    <div className="preview-slider2-dots" style={{left: "8.8vw"}} />
                    <div className="preview-slider2-dots" style={{left: "9.2vw"}} />
                </div>
                <div className="preview-2-head">12 Bush St #15, Downtown,<br/>MA 95466</div>
                <BsHeart className="fav-svg2"/>
                <div className="fav-label2">Add Favorite</div>
                <div className="prop-det2-div">
                    <PiBathtubBold className="bath-svg2"/>
                    <div className="bath-det2">5 bathroom</div>
                    
                    <GiHomeGarage className="garg-svg2"/>
                    <div className="garg-det2">3 garage</div>

                    <TbGridDots className="area-svg2" />
                    <div className="area-det2">4500 Sq. Ft</div>
                </div>
                <div className="price-det2">$525,000</div>
                
                <div className="view-det2-div" />
                <div className="view-det2-inner">View Details</div>
            
            </div>
        </section>
    );
}