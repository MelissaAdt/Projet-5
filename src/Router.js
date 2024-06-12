import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageAccueil from './components/PageAccueil';
import APropos from './components/APropos';
import PageErreur from './components/PageErreur';
import Layout from './components/Layout';
import PageLogement from './components/PageLogement'

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<PageAccueil />} />
          <Route path="/apropos" element={<APropos />} />
          <Route path="/logement/:id" element={<PageLogement />} />
          <Route path="*" element={<PageErreur />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;

