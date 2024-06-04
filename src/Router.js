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
      <Routes>
        <Route path="/" element={<Layout><PageAccueil /></Layout>} />
        <Route path="/apropos" element={<Layout><APropos /></Layout>} />
        <Route path="*" element={<Layout><PageErreur /></Layout>} />
        <Route path="/pagelogement" element={<Layout><PageLogement /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
