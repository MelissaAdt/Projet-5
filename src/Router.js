import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageAccueil from './pages/PageAccueil';
import APropos from './pages/APropos';
import PageErreur from './pages/PageErreur';
import Layout from './components/Layout';
import PageLogement from './pages/PageLogement'

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

