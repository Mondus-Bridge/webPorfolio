// src/App.tsx
import * as React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home variant="qa" />} />
          <Route path="/qa/main" element={<Home variant="qa" />} />
          <Route path="/pm/main" element={<Home variant="pm" />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Layout>
    </Router>
  );
}