import React from 'react';
import AppartmentList from './AppartmentList';



const PageAccueil = () => {
  return (
    <div className="page-accueil">
        <div className="banner-accueil">
            <div className="banner-text">
                <h1>Chez vous, <br className ="line-break" /> partout et ailleurs</h1>
            </div>
        </div>
        <div className="cards-container">
        <AppartmentList />
        </div>
    </div>
  );
};

export default PageAccueil;
