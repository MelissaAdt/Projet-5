import React from 'react';
import ApartmentCards from './ApartmentCards';
import data from '../data/data.json';


const AppartmentList = () => {
    
    const selectedApartments = data.slice(0, 6);
  
    return (
      <div className="apartment-list">
        {selectedApartments.map((apartment) => (
          <ApartmentCards
            key={apartment.id}
            title={apartment.title}
            cover={apartment.cover}
          />
        ))}
      </div>
    );
  };
  
  export default AppartmentList;