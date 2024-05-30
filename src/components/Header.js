// Header.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header>
      
       
       <div className="logo">
        {/* Remplacer le lien par une image */}
        <img src="path/to/logo.png" alt="Logo Kasa" />
      </div>
      
      
      <nav>
        <ul>
          <li>
            {location.pathname === '/' ? (
              <span className="active">Accueil</span>
            ) : (
              <Link to="/">Accueil</Link>
            )}
          </li>
          <li>
            {location.pathname === '/apropos' ? (
              <span className="active">À Propos</span>
            ) : (
              <Link to="/apropos">À Propos</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
