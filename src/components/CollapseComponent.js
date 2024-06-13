import React, { useState } from 'react';
import '../styles/CollapseComponent.scss';

const CollapseComponent = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse-component ${isOpen ? 'collapse-open' : ''}`}>
      <div className="collapse-header">
        <span>{title}</span>
        <div className="arrow-container" onClick={toggleCollapse}>
          <div className={`arrow ${isOpen ? 'open' : ''}`} />
        </div>
      </div>
      {isOpen && (
        <div className="collapse-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default CollapseComponent;
