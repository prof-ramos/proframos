import React from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-legal-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-legal-600">
            <a href="/" className="hover:text-accent transition-colors">Home</a>
            <a href="/#library" className="text-legal-900">Biblioteca</a>
            <a href="/#about" className="hover:text-accent transition-colors">Sobre</a>
            <a href="https://aistudio.google.com/" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full bg-legal-100 hover:bg-legal-200 transition-colors">
              API Docs
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-legal-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-legal-100 bg-white px-4 py-4 space-y-4">
          <a href="/" className="block py-2 font-medium">Home</a>
          <a href="/#library" className="block py-2 font-medium">Biblioteca</a>
          <a href="/#about" className="block py-2 font-medium">Sobre</a>
        </div>
      )}
    </header>
  );
}
