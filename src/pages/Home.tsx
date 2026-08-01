// src/pages/Home.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { isDark } = useTheme();
  const { t } = useTranslation();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsVideoOpen(false);
    };
    if (isVideoOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isVideoOpen]);

  return (
    <div className="w-full space-y-16 py-12">
      {/* Hero Section */}
      <section className="w-full max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <div className="relative inline-block mb-6">
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight leading-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t('home.title')}
            </h1>
            {/* Signature pipeline underline */}
            <svg
              className="absolute -bottom-3 left-0 w-full h-2"
              viewBox="0 0 100 2"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="hero-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38b2ac" />
                  <stop offset="100%" stopColor="#16a34a" />
                </linearGradient>
              </defs>
              <line x1="0" y1="1" x2="100" y2="1" stroke="url(#hero-grad)" strokeWidth="2" />
            </svg>
          </div>
          
          <p className={`mx-auto max-w-2xl text-base sm:text-lg leading-relaxed mb-8 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {t('home.description')}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-md mx-auto text-sm font-medium">
            <Link
              to="/resume"
              className="px-5 py-2.5 bg-green-600 text-white rounded-xl hover:bg-green-700 active:scale-95 transition-all text-center"
            >
              {t('nav.resume')}
            </Link>
            <Link
              to="/projects"
              className={`px-5 py-2.5 border rounded-xl active:scale-95 transition-all text-center ${
                isDark 
                  ? 'border-gray-800 text-gray-300 hover:bg-gray-900 hover:text-white' 
                  : 'border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {t('nav.projects')}
            </Link>
            <Link
              to="/article"
              className={`px-5 py-2.5 border rounded-xl active:scale-95 transition-all text-center ${
                isDark 
                  ? 'border-gray-800 text-gray-300 hover:bg-gray-900 hover:text-white' 
                  : 'border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {t('nav.article')}
            </Link>
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="w-full max-w-3xl mx-auto px-4 sm:px-6">
        <div className={`p-6 sm:p-8 rounded-2xl border transition-all ${
          isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-50/70 border-gray-100'
        }`}>
          <h2 className={`text-xl font-bold tracking-tight mb-6 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
            {t('home.coreExpertise')}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {[
              'JavaScript & Playwright Architecture',
              'PostgreSQL & API Testing (Postman)',
              'CI/CD Pipelines (GitLab, GitHub Actions)',
              'Finance & Professional Accounting Insight',
              'Automated Schema Verification',
              'Prompt Engineering for QA Optimization',
            ].map((skill) => (
              <li key={skill} className="flex items-start gap-3">
                <span className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${
                  isDark ? 'bg-teal-400' : 'bg-green-600'
                }`} />
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Intro Video Section */}
      <section className="w-full max-w-3xl mx-auto px-4 sm:px-6">
        <div className={`p-6 sm:p-8 rounded-2xl border transition-all ${
          isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-50/70 border-gray-100'
        }`}>
          <div className="flex items-center justify-between mb-4">
            <div>
<span className="text-xs font-semibold tracking-wider uppercase text-green-500 mb-1 block">
  {t('home.video.overview')}
</span>
<h2 className={`text-xl font-bold tracking-tight ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
  {t('home.video.title')}
</h2>
            </div>
          </div>

          {/* Video Preview Card (Triggers Modal) */}
          <button
            onClick={() => setIsVideoOpen(true)}
            className="group relative w-full aspect-video rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-900 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-500 transition-transform active:scale-[0.99]"
            aria-label="Play video"
          >
            {/* High-Res YouTube Thumbnail */}
            <img
              src="https://img.youtube.com/vi/TGx5o8kqLP4/hqdefault.jpg"
              alt="Intro Video Thumbnail"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-90 group-hover:scale-105 transition-all duration-300"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center shadow-lg group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300">
                <svg className="w-7 h-7 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </section>

      {/* Video Modal Window */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
            onClick={(e) => e.stopPropagation()} // Prevent clicking video from closing modal
          >
            {/* Close Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* 16:9 Aspect Ratio Video Frame */}
            <div className="w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/TGx5o8kqLP4?autoplay=1"
                title="Intro Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}