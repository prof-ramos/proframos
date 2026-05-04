import React, { useState, lazy, Suspense, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastMessage } from './types';
import Header from './components/Header';
import ErrorBoundary from './components/ErrorBoundary';

const Home = lazy(() => import('./pages/Home'));
const Footer = lazy(() => import('./components/Footer'));
const Toast = lazy(() => import('./components/Toast'));

const PageFallback = (
  <div className="flex-1 flex items-center justify-center min-h-[50vh]">
    <div className="animate-pulse flex flex-col items-center gap-4">
      <div className="w-12 h-12 bg-legal-200 rounded-full"></div>
      <div className="h-4 w-48 bg-legal-200 rounded"></div>
    </div>
  </div>
);

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = useCallback((message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, message, type }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans text-legal-900 bg-legal-50">
        <Header
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        <ErrorBoundary fallback={<div className="flex-1 p-8 text-center text-red-600">Erro ao carregar a página.</div>}>
          <Suspense fallback={PageFallback}>
            <Routes>
              <Route path="/" element={<Home addToast={addToast} />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary fallback={<div className="h-64 bg-white" />}>
          <Suspense fallback={<div className="h-64 bg-white" />}>
            <Footer />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary fallback={null}>
          <Suspense fallback={null}>
            <Toast toasts={toasts} removeToast={removeToast} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;
