import React, { useState, useEffect } from "react";
import "../../styles/Overview/SimilarProperties.scss";
import { v4 as uuidv4 } from 'uuid';
import { getSimilarHomes } from "../../Apis/apis.js";
import PropertyCard from "../PropertyList/PropertyCard.jsx";

export default function SimilarProperties(props) {
    const { property_id } = props;
    const [ isLoading, setIsLoading ] = useState(false);
    const [ similarHomes, setSimilarHomes ] = useState([]);

    useEffect(() => {
        if(!isLoading) {
            setIsLoading(true);
            getSimilarHomes(property_id).then((res) => {
                setSimilarHomes(res?.data?.home?.related_homes?.results || []);
                setIsLoading(false);
            });
        }
    }, [property_id]);


    return (
        <section className="similar-properties-section">
            <div className="header">Similar properties nearby - AI Generated</div>
            <br/>

            <div className="similar-carousel">
                {
                    similarHomes.length ? similarHomes.map((property) => (
                        <PropertyCard 
                            key={uuidv4()}
                            property_id={property.property_id}
                            imageSrc={property.primary_photo?.href || ""}
                            description={property.description}
                            price={property.list_price}
                            address={property.location?.address}
                            similarProp={true}
                        />
                    )) :
                    <div>Oops, No similar properties found!</div>
                }
            </div>
        </section>
    );
}