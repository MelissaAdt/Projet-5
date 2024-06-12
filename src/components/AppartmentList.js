import React from 'react';
import ApartmentCards from './ApartmentCards';
import data from '../data/data.json';


const AppartmentList = () => {
    
    
  
    return (
      <div className="apartment-list">
        {data.map((apartment) => (
          <ApartmentCards
            key={apartment.id}
            id={apartment.id}
            title={apartment.title}
            cover={apartment.cover}
          />
        ))}
      </div>
    );
  };
  
  export default AppartmentList;