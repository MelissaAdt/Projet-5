import React from 'react';
import Proptypes from 'prop-types'


const ApartmentCards = ({title, cover}) => ( 
  <div className="apartment-card">
    <img src={cover} alt={title} />
    <h2>{title}</h2>
  </div>
);

ApartmentCards.propTypes = {
  title: Proptypes.string.isRequired,
  cover: Proptypes.string.isRequired,
};

export default ApartmentCards;