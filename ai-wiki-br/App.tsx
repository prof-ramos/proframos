import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastMessage } from './types';
import Header from './components/Header';

// Lazy loaded components and pages
const Home = lazy(() => import('./pages/Home'));
const Footer = lazy(() => import('./components/Footer'));
const Toast = lazy(() => import('./components/Toast'));

function App() {
  // Global states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Toast Handler
  const addToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans text-legal-900 bg-legal-50">
        <Header 
          mobileMenuOpen={mobileMenuOpen} 
          setMobileMenuOpen={setMobileMenuOpen} 
        />

        <Suspense fallback={
          <div className="flex-1 flex items-center justify-center min-h-[50vh]">
            <div className="animate-pulse flex flex-col items-center gap-4">
              <div className="w-12 h-12 bg-legal-200 rounded-full"></div>
              <div className="h-4 w-48 bg-legal-200 rounded"></div>
            </div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home addToast={addToast} />} />
          </Routes>
        </Suspense>

        <Suspense fallback={<div className="h-64 bg-white" />}>
          <Footer />
        </Suspense>

        {/* Global Components */}
        <Suspense fallback={null}>
          <Toast toasts={toasts} removeToast={removeToast} />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
