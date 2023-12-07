import React from "react";
import "../../styles/SearchBar/SearchBar.scss";
import Autocomplete from "react-google-autocomplete";
import { BsSearch } from "react-icons/bs";

export default function SearchBar(props) {
    const { setLocation } = props;
    return(
        <div className="search-bar">
            {/* <input className="placeholder" placeholder="Location, City, Adress, State" /> */}
            <Autocomplete
                className="placeholder" placeholder="Location, City, Adress, State"
                apiKey={"AIzaSyD2iSR4agIM27BeD0q_mvr_zwCi-OpnkFE"}
                onPlaceSelected={(place) => {
                    const { formatted_address, name } = place;
                    if(formatted_address) {
                        let split = formatted_address.split(",");
                        setLocation({city: split[0], state_code: split[1].trim()});
                    }
                        
                    console.log(place);
                }}
            />
            <div className="svg">
                <BsSearch className="search-icon"/>
            </div>    
        </div>
    );
}