import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../styles/Overview/Overview.scss";

import NavBar from "./NavBar.jsx";
import Calculator from "./Calculator.jsx";
import CheckBackBanner from "./CheckBackBanner.jsx";
import Footer from "./Footer.jsx";
import SimilarProperties from "./SimilarProperties.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import PurchaseAnalysis from "./PurchaseAnalysis.jsx";
import ImageGallery from "./ImageGallery.jsx";

import { BsHeart, BsHeartFill, BsShareFill } from "react-icons/bs";
import { AiFillPieChart } from "react-icons/ai";
import { getPropertyDetails } from "../../Apis/apis.js";
import { format_price } from "../../Helper/helper.js";

export default function Overview(props) {
    const { property_id } = useParams();
    const [ isLoading, setIsLoading ] = useState(false);
    const [ details, setDetails ] = useState({});
    const [ showGallery, setShowGallery ] = useState(false);
    const { 
        list_price, 
        photos, 
        photo_count, 
        price_per_sqft, 
        location, 
        days_on_market, 
        owner_occupied, 
        mls_id,
        mortgage,
    } = details;
    const { line, city, state_code, postal_code } = {...location?.address || {}};
    const { text, lot_sqft, year_built, type } = { ...details?.description || {}};

    useEffect(() => {
        if(!isLoading) {
            setIsLoading(true);
            getPropertyDetails(property_id).then((res) => { 
                setDetails(res?.data?.home || res?.listing || {});
                setIsLoading(false);
            });
        }
    }, [property_id]);

    const [ isFavourite, setIsFavourite ] = useState(false);

    return (
        <div className="overview">
            <NavBar />
            <div className="search-bar-pos"> <SearchBar/> </div>
            <div className="overview-header">Property Overview</div>

            <div className="overview-opts">
                <div className="feed-opt">Feed</div>
                <div className="view-opt selected">Overview</div>
                <div className="ppt-analysis-opt">Property Analysis</div>
                <div className="buy-hold-opt">Buy & Hold Projections</div>

                <div className="fav-opt">
                    {
                        isFavourite ? 
                        <BsHeartFill className="fav-opt-svg" style={{color:"red"}} onClick={() => setIsFavourite(false)}/> : 
                        <BsHeart className="fav-opt-svg" onClick={() => setIsFavourite(true)}/>
                    }
                    <div>Favorite</div>
                </div> 
                <div className="share-opt">
                    <BsShareFill className="share-opt-svg"/>
                    <div>Share</div>
                </div>
            </div>

            <section className="overview-img-sec">
                <div className="overview-img-cont1">
                    <img className="overview-img"src={photos?.[0]?.href} />
                </div>
                
                <div className="overview-img-cont2">
                    <img className="overview-img" src={photos?.[1]?.href} />
                </div>
                
                <div className="overview-img-cont3">
                    <img className="overview-img" src={photos?.[2]?.href} />
                </div>
                
                <div className="browse-pics-btn" onClick={() => 
                    {
                        document.body.scrollTop = document.documentElement.scrollTop = 0;
                        setShowGallery(true);
                    }
                }>
                    Browse all {photo_count} photos
                </div>
            </section>

            {
                showGallery ? <ImageGallery setShowGallery={setShowGallery} /> : ""
            }

            <div style={{display: 'inline-flex', justifyContent: 'space-between'}}>
                <div className="ppt-det-card">
                    <div className="ppt-name">{line}</div>
                    <div className="ppt-addr">{city}, {state_code} {postal_code}</div>

                    <div className="ppt-price">{format_price(list_price)}</div>
                    <div className="ppt-price-type">List Price</div>
                    <br/><br/>
                    <div className="ppt-det-div">
                        <span className="ppt-addr2">{line}<br/>{city}, {state_code} {postal_code}<br/><br/></span>
                        <span className="ppt-det-dark">{text}</span>
                    </div>
                    <span className="read-more">Read more.</span>
                    <div className="ppt-det-light">{text}</div>
                    
                    <div className="ppt-status-btn">ACTIVE</div>
                </div>

                <div className="ppt-char-card">
                    <div style={{color: 'black', fontSize: 31, fontFamily: 'Overpass', fontWeight: '700', wordWrap: 'break-word', textAlign: "center"}}>Property Characteristics</div>
                    <div style={{color: 'black', fontSize: 19, fontFamily: 'Overpass', fontWeight: '300', wordWrap: 'break-word', textAlign: "center"}}>FACTS & FEATURES</div> 
                    <br/>
                    <br/>

                    <div className="ppt-char-items">
                        <div style={{color: 'black', fontSize: 19, fontFamily: 'Overpass', fontWeight: '300', wordWrap: 'break-word'}}>Property Type</div>
                        <div style={{color: 'rgba(0, 0, 0, 0.42)', fontSize: 19, fontFamily: 'Overpass', fontWeight: '400', wordWrap: 'break-word'}}>{type}</div>
                    </div>

                    <div className="ppt-char-items">
                        <div style={{color: 'black', fontSize: 19, fontFamily: 'Overpass', fontWeight: '300', wordWrap: 'break-word'}}>Days on Market</div>
                        <div style={{color: 'rgba(0, 0, 0, 0.42)', fontSize: 19, fontFamily: 'Overpass', fontWeight: '400', wordWrap: 'break-word'}}>{days_on_market || "--"}</div>
                    </div>

                    <div className="ppt-char-items">
                        <div style={{color: 'black', fontSize: 19, fontFamily: 'Overpass', fontWeight: '300', wordWrap: 'break-word'}}>Year Built</div>
                        <div style={{color: 'rgba(0, 0, 0, 0.42)', fontSize: 19, fontFamily: 'Overpass', fontWeight: '400', wordWrap: 'break-word'}}>{year_built}</div>
                    </div>
                    
                    <div className="ppt-char-items">
                        <div style={{color: 'black', fontSize: 19, fontFamily: 'Overpass', fontWeight: '300', wordWrap: 'break-word'}}>Lot Size</div>
                        <div style={{color: 'rgba(0, 0, 0, 0.42)', fontSize: 19, fontFamily: 'Overpass', fontWeight: '400', wordWrap: 'break-word'}}>{lot_sqft} Sq.Ft</div>
                    </div>

                    <div className="ppt-char-items">
                        <div style={{color: 'black', fontSize: 19, fontFamily: 'Overpass', fontWeight: '300', wordWrap: 'break-word'}}>Price/sqft</div>
                        <div style={{color: 'rgba(0, 0, 0, 0.42)', fontSize: 19, fontFamily: 'Overpass', fontWeight: '400', wordWrap: 'break-word'}}>{format_price(price_per_sqft)}</div>
                    </div>

                    <div className="ppt-char-items">
                        <div style={{color: 'black', fontSize: 19, fontFamily: 'Overpass', fontWeight: '300', wordWrap: 'break-word'}}>Owner Occupied</div>
                        <div style={{color: 'rgba(0, 0, 0, 0.42)', fontSize: 19, fontFamily: 'Overpass', fontWeight: '400', wordWrap: 'break-word'}}>{owner_occupied || "--"}</div>
                    </div>

                    <div className="ppt-char-items">
                        <div style={{color: 'black', fontSize: 19, fontFamily: 'Overpass', fontWeight: '300', wordWrap: 'break-word'}}>MLS ID</div>
                        <div style={{color: 'rgba(0, 0, 0, 0.42)', fontSize: 19, fontFamily: 'Overpass', fontWeight: '400', wordWrap: 'break-word'}}>{mls_id || "--"}</div>
                    </div>
                    
                </div>
            </div>

            <section className="overview-quote-sec">
                <div className="overview-quote">
                    “Owning a home is a keystone of wealth… <br/>both financial affluence and emotional security”
                </div>
                <div className="quote-by">-- Suze Orman</div>
            </section>

            <div style={{position: "relative", top: "22vw", left: "7vw"}}>
                <div style={{color: 'black', fontSize: 25, fontFamily: 'Overpass', fontWeight: '400', wordWrap: 'break-word'}}>Property Analysis <AiFillPieChart style={{color: "green"}}/></div> <br/>
                <div style={{color: 'black', fontSize: 20, fontFamily: 'Overpass', fontWeight: '400', wordWrap: 'break-word'}}>This page shows the purchase breakdown, cash flow and investment returns for this property.</div>
            </div>

            <div style={{display: "inline-flex", width: "80%", position: "relative",  top:"25vw", left: "7vw", justifyContent: "space-between"}}>
                <div style={{width: '14vw', height: '4vw', textAlign: "center", lineHeight: "2vw", background: 'white', border: '0.50px #127E00 solid'}}>
                    <div style={{opacity: 0.64, color: 'black', fontSize: 20, fontFamily: 'neueRadial-C-Regular', fontWeight: '400', wordWrap: 'break-word'}}>CASH NEEDED</div>
                    <div style={{color: '#127E00', fontSize: 25, fontFamily: 'neueRadial-C-Bold', fontWeight: '700', wordWrap: 'break-word'}}>$20,000</div>
                </div>

                <div style={{width: '14vw', height: '4vw', textAlign: "center", lineHeight: "2vw", background: 'white', border: '0.50px #127E00 solid'}}>
                    <div style={{opacity: 0.64, color: 'black', fontSize: 20, fontFamily: 'neueRadial-C-Regular', fontWeight: '400', wordWrap: 'break-word'}}>CASH Flow</div>
                    <div style={{color: '#127E00', fontSize: 25, fontFamily: 'neueRadial-C-Bold', fontWeight: '700', wordWrap: 'break-word'}}>$209/mo</div>
                </div>

                <div style={{width: '14vw', height: '4vw', textAlign: "center", lineHeight: "2vw", background: 'white', border: '0.50px #127E00 solid'}}>
                    <div style={{opacity: 0.64, color: 'black', fontSize: 20, fontFamily: 'neueRadial-C-Regular', fontWeight: '400', wordWrap: 'break-word'}}>CAP RATE</div>
                    <div style={{color: '#127E00', fontSize: 25, fontFamily: 'neueRadial-C-Bold', fontWeight: '700', wordWrap: 'break-word'}}>7.2%</div>
                </div>

                <div style={{width: '14vw', height: '4vw', textAlign: "center", lineHeight: "2vw", background: 'white', border: '0.50px #127E00 solid'}}>
                    <div style={{opacity: 0.64, color: 'black', fontSize: 20, fontFamily: 'neueRadial-C-Regular', fontWeight: '400', wordWrap: 'break-word'}}>COC</div>
                    <div style={{color: '#127E00', fontSize: 25, fontFamily: 'neueRadial-C-Bold', fontWeight: '700', wordWrap: 'break-word'}}>8.6%</div>
                </div>
            </div>

            <PurchaseAnalysis 
                list_price={list_price}
                mortgage={mortgage}
            />
            
            <Calculator 
                property_id={property_id}
                details={details} 
            /> 
            
            <SimilarProperties 
                property_id={property_id}
            />
            <CheckBackBanner />
            <Footer />
        </div>
    );
}
