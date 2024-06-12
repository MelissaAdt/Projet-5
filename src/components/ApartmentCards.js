import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


const ApartmentCards = ({ id, title, cover }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/logement/${id}`);
  };

  return (
    <div className="apartment-card" onClick={handleClick}>
      <img src={cover} alt={title} />
      <h2>{title}</h2>
    </div>
  );
};

ApartmentCards.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default ApartmentCards;