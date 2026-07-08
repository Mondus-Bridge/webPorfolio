// src/App.tsx
import * as React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import ArticlesList from './pages/ArticlesList';
import ArticlePage from './pages/ArticlePage';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/article" element={<ArticlesList />} />
          <Route path="/article/:slug" element={<ArticlePage />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Layout>
    </Router>
  );
}