// src/App.jsx
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Layout from './components/Layout'; 
import Home from './pages/Home';
import Cast from './pages/Cast';
import Gallery from './pages/Gallery';
import Timeline from './pages/Timeline';
import Teasers from './pages/Teasers';
import MysteryBox from './pages/MysteryBox';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cast" element={<Cast />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/teasers" element={<Teasers />} />
          <Route path="/mystery-box" element={<MysteryBox />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
