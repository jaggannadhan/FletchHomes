import React, { useState, useEffect } from 'react';
import PropertyCard from '../PropertyList/PropertyCard.jsx';
import '../../styles/PropertyList/PropertiesList.scss';
import { v4 as uuidv4 } from 'uuid';

import { getPropertyList } from "../../Apis/apis.js";

export default function PropertiesList(props) {
    const { location } = props;
    const [isLoading, setIsLoading] = useState(false);
    const [properties, setProperties] = useState([{}]);

    useEffect(() => {
      if(!isLoading) {
        setIsLoading(true);
        getPropertyList(location).then((res) => { 
          setProperties(res?.data?.home_search?.results || res || [{}]);
          setIsLoading(false);
        });
      }
    }, [props.properties, location]);

    return (
      <div className="properties-list">
        {properties.map((property) => (
          <PropertyCard 
            key={uuidv4()}
            property_id={property.property_id}
            imageSrc={property.primary_photo?.href || ""}
            description={property.description}
            price={property.list_price}
            address={property.location?.address}
          />
        ))}
      </div>
    );
}
