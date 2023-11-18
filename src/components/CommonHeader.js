import React from 'react';
import {FontAwesome} from 'react-web-vector-icons';

const Header = ({ onSearchPress, onMapPress, type }) => {
    const title = type === 'properties' ? 'Property List' : 'Properties';
    const showIcons = type === 'properties';
    const showBackButton = type !== 'properties';

  return (
    <div style={styles.header}>
      <div style={styles.left} />
      {showBackButton && (
        <Icon name="arrow-back" size={30} color="#000000" />
      )}
      <p style={styles.title}>{title}</p>
      {showIcons && (
        <div style={styles.iconContainer}>
          <FontAwesome name="map" size={30} color="#008000" />
          <FontAwesome name="search" size={30} color="#008000" />
        </div>
      )}
      </div>      
  );
};

const styles = {
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 60,
  },
  left: {
    width: 30, // Adjust this width to balance the search icon
  },
  backButton: {
    position: 'absolute',
    left: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute', // Add this line
    left: 0, // Add this line
    right: 0, // Add this line

    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 5, // Add margin here
  },
};

export default Header;