import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../styles/Overview/Overview.scss";

import NavBar from "../NavBar/NavBar.jsx";
import Calculator from "./Calculator.jsx";
import CheckBackBanner from "./CheckBackBanner.jsx";
import Footer from "../Footer/Footer.jsx";
import SimilarProperties from "./SimilarProperties.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import ImageGallery from "./ImageGallery.jsx";
import { Link } from "react-router-dom";

import { BsHeart, BsHeartFill, BsShareFill } from "react-icons/bs";
import { AiFillPieChart } from "react-icons/ai";
import { getPropertyDetails, calculateMortgage } from "../../Apis/apis.js";
import { format_price, getBetterImages, getCookie } from "../../Helper/helper.js";
import PropertyAnalysis from "./PropertyAnalysis.jsx";

export default function Overview(props) {
    const { property_id } = useParams();
    const [ isDetailsLoading, setIsDetailsLoading ] = useState(false);
    const [ details, setDetails ] = useState({});
    const [ readMore, setReadMore ] = useState(false);
    const [ loggedInUser, setLoggedInUser ] = useState("");

    const [ calcDetails, setCalcDetails ] = useState({});
    const [ isCalcLoading, setIsCalcLoading ] = useState(false);
    
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
        const user = getCookie("user");
        if(user) setLoggedInUser(user);
        else window.location.href = '../';

        if(!isDetailsLoading) {
            setIsDetailsLoading(true);
            getPropertyDetails(property_id).then((res) => { 
                setDetails(res?.data?.home || {});
                setIsDetailsLoading(false);
            });
        }

        const getCaluclatorDetails = async (_id) => {
            if(!isCalcLoading) {
                setIsCalcLoading(true);
                calculateMortgage(_id).then((res) => { 
                    setCalcDetails(res || {});
                    setIsCalcLoading(false);
                });
            }
        }

        getCaluclatorDetails(property_id);
    }, [property_id]);

    function handleReadMore() {

        setReadMore(false);
    }

    const [ isFavourite, setIsFavourite ] = useState(false);

    return (
        <div className="overview">
            <NavBar loggedInUser={loggedInUser}/>
            {/* <div className="search-bar-pos"> <SearchBar/> </div> */}
            <div className="overview-header">Property Overview</div>

            <div className="overview-opts">

                <Link className="feed-opt ovrvw-opt-elms" to={{pathname: '../home'}} state={{scrollToFeed: true}}>Feed</Link>
                <div className="view-opt ovrvw-opt-elms selected">Overview</div>
                <a className="ppt-analysis-opt ovrvw-opt-elms" href="#property-analysis">
                        Property Analysis
                </a>

                <div className="fav-opt ovrvw-opt-elms" onClick={() => setIsFavourite(!isFavourite)}>
                    {
                        isFavourite ? 
                        <BsHeartFill className="fav-opt-svg" style={{color:"red"}} /> : 
                        <BsHeart className="fav-opt-svg"/>
                    }
                    <div className="opt-inner">Favorite</div>
                </div> 
                <a className="share-opt ovrvw-opt-elms" target="_blank"
                    href={`mailto:?subject=I wanted you to see this site&amp;body=Hey, check out this investment ${window.location.href}`}
                >
                    <BsShareFill className="share-opt-svg"/>
                    <div className="opt-inner">Share</div>
                </a>
            </div>

            <section className="overview-img-sec">
                <div className="overview-img-cont1">
                    <img className="overview-img"src={getBetterImages(photos?.[0]?.href)} />
                </div>
                
                <div className="overview-img-cont2">
                    <img className="overview-img" src={getBetterImages(photos?.[1]?.href)} />
                </div>
                
                <div className="overview-img-cont3">
                    <img className="overview-img" src={getBetterImages(photos?.[2]?.href)} />
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
                showGallery ? 
                <ImageGallery 
                    setShowGallery={setShowGallery} 
                    photos={photos}
                /> : ""
            }

            <div style={{display: 'inline-flex', justifyContent: 'space-between'}}>
                <div className="ppt-det-card">
                    <div className="ppt-name">{line}</div>
                    <div className="ppt-addr">{city}, {state_code} {postal_code}</div>

                    <div className="ppt-price">{format_price(list_price)}</div>
                    <div className="ppt-price-type">List Price</div>
                    <br/><br/>
                    <div className={!readMore ? "ppt-det-div" : "ppt-det-div read-expand"}>
                        <span className="ppt-addr2">{line}<br/>{city}, {state_code} {postal_code}<br/><br/></span>
                        <span className="ppt-det-dark">{text}</span>
                    </div>
                    {
                        !readMore ? 
                        <span className="read-more" onClick={() => setReadMore(true)}>Read more.</span> :
                        <span className="read-more" onClick={() => handleReadMore()}>Read Less.</span>

                    }
                    
                    {/* <div className="ppt-det-light">{text}</div> */}
                    
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

            

            <PropertyAnalysis 
                property_id={property_id}
                list_price={list_price}
                details={details} 
                mortgage={mortgage}
                calcDetails={calcDetails}
            />
            
            <Calculator 
                property_id={property_id}
                details={details} 
                calcDetails={calcDetails}
            /> 
            
            <SimilarProperties 
                property_id={property_id}
            />
            <CheckBackBanner />
            <Footer overView={true}/>
        </div>
    );
}
