import React from 'react';
import { Link } from 'react-router-dom';

const PageErreur = () => {
  return (
    <div className="erreur">
      <h1>404</h1>
      <h2>Oups! la page que <br className="line-break" /> vous demandez n'existe pas.</h2>
      <Link to="/">Retourner sur la page d'accueil</Link>
      
    </div>
  );
};

export default PageErreur;
