import React from 'react';
import { GooglePlacesAutocomplete } from 'react-google-places-autocomplete';
import Header from './CommonHeader'; // Adjust the path as needed

const SearchBar = () => {
  return (
    <><Header></Header>
    <div style={styles.container}></div>
    <GooglePlacesAutocomplete
          placeholder='Search place'
          onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
          } }
          query={{
              key: 'AIzaSyDMQAb1deBPeXsj6plOwzkvunW2RwygMdw',
              language: 'en',
              components: 'country:us', // restrict results to cities in the US
          }} />
          
          </>
          
  );
  
};

const styles = {
    container: {
      paddingTop: 10, // Adjust this value as needed
    },
  };

export default SearchBar;