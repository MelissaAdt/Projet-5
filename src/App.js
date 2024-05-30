// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PageAccueil from './components/PageAccueil';
import APropos from './components/APropos';
import PageErreur from './components/PageErreur';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<PageAccueil />} />
          <Route path="/apropos" element={<APropos />} />
          <Route path="*" element={<PageErreur />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
