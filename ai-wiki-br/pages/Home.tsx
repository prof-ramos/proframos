import React, { useState, useMemo, useEffect, lazy, Suspense } from 'react';
import { Search, LayoutGrid, List as ListIcon, Menu, X, Github, Linkedin, Mail, Sparkles, Loader2, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROMPTS, CATEGORY_ICONS } from '../constants';
import { Category, FilterState, Prompt, ToastMessage } from '../types';

// Lazy loaded components
const PromptCard = lazy(() => import('../components/PromptCard'));
const PlaygroundModal = lazy(() => import('../components/PlaygroundModal'));

interface HomeProps {
  addToast: (message: string, type?: 'success' | 'error' | 'info') => void;
}

export default function Home({ addToast }: HomeProps) {
  // State
  const [filter, setFilter] = useState<FilterState>({
    search: '',
    category: Category.ALL,
    viewMode: 'grid',
  });
  const [playgroundOpen, setPlaygroundOpen] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  // Logic: Filtering
  const filteredPrompts = useMemo(() => {
    const normalizeString = (str: string) => 
      str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    const rawTerms = filter.search.trim() ? filter.search.split(/\s+/) : [];
    
    // Separate tag searches and general searches
    const tagSearches = rawTerms
      .filter(term => term.toLowerCase().startsWith('tag:'))
      .map(term => normalizeString(term.substring(4)));
      
    const generalSearches = rawTerms
      .filter(term => !term.toLowerCase().startsWith('tag:'))
      .map(normalizeString);

    return PROMPTS.filter((prompt) => {
      const normalizedTitle = normalizeString(prompt.title);
      const normalizedDescription = normalizeString(prompt.description);
      const normalizedTags = prompt.tags.map(normalizeString);

      // Must match all tag searches
      const matchesTags = tagSearches.every(tagQuery => 
        normalizedTags.some(tag => tag.includes(tagQuery))
      );

      // Must match all general searches
      const matchesGeneral = generalSearches.length === 0 || generalSearches.every(term => 
        normalizedTitle.includes(term) ||
        normalizedDescription.includes(term) ||
        normalizedTags.some(tag => tag.includes(term))
      );
      
      const matchesCategory = filter.category === Category.ALL || prompt.category === filter.category;

      return matchesTags && matchesGeneral && matchesCategory;
    });
  }, [filter.search, filter.category]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    const librarySection = document.getElementById('library');
    if (librarySection) {
      librarySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalPages = Math.ceil(filteredPrompts.length / ITEMS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter.search, filter.category]);

  const displayedPrompts = filteredPrompts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const categories = Object.values(Category);

  // Handlers
  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content);
    addToast('Prompt copiado para a área de transferência!');
  };

  const handleOpenPlayground = (prompt: Prompt) => {
    setSelectedPrompt(prompt);
    setPlaygroundOpen(true);
  };

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="bg-legal-900 text-white pt-16 pb-20 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-legal-800 border border-legal-700 mb-6">
            <Sparkles className="w-4 h-4 text-accent-light" />
            <span className="text-xs font-bold tracking-wider uppercase text-accent-light">
              Foco em Concursos Públicos
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
            Sua Aprovação Acelerada <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-white">
              pela Inteligência Artificial
            </span>
          </h1>
          <p className="text-lg md:text-xl text-legal-300 max-w-2xl mx-auto mb-10 font-light">
            A maior biblioteca de prompts para concurseiros: crie cronogramas, corrija discursivas e gere simulados em segundos. Ferramentas essenciais também para a prática jurídica.
          </p>
          
          {/* Search Bar - Hero */}
          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-gold rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative flex items-center bg-white rounded-xl shadow-2xl p-2">
              <Search className="w-6 h-6 text-legal-400 ml-3" />
              <input 
                type="text"
                placeholder="Busque por 'Discursiva', 'Cronograma', 'Direito Constitucional'..."
                className="w-full px-4 py-3 text-legal-900 placeholder-legal-400 bg-transparent border-none focus:ring-0 text-lg outline-none"
                value={filter.search}
                onChange={(e) => setFilter(prev => ({ ...prev, search: e.target.value }))}
              />
              <button className="hidden sm:block bg-legal-900 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-accent transition-colors">
                Buscar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <main id="library" className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        
        {/* Controls Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(prev => ({ ...prev, category: cat }))}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter.category === cat
                    ? 'bg-legal-900 text-white shadow-md'
                    : 'bg-white text-legal-600 border border-legal-200 hover:border-legal-400 hover:bg-legal-50'
                }`}
              >
                {CATEGORY_ICONS[cat]}
                {cat}
              </button>
            ))}
          </div>

          {/* View Toggle */}
          <div className="flex bg-white border border-legal-200 rounded-lg p-1 ml-auto md:ml-0 mt-4 md:mt-0">
            <button
              onClick={() => setFilter(prev => ({ ...prev, viewMode: 'grid' }))}
              className={`p-2 rounded ${filter.viewMode === 'grid' ? 'bg-legal-100 text-legal-900' : 'text-legal-400 hover:text-legal-600'}`}
              aria-label="Visualização em Grade"
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setFilter(prev => ({ ...prev, viewMode: 'list' }))}
              className={`p-2 rounded ${filter.viewMode === 'list' ? 'bg-legal-100 text-legal-900' : 'text-legal-400 hover:text-legal-600'}`}
              aria-label="Visualização em Lista"
            >
              <ListIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-serif font-bold text-legal-800">
            {filter.category === Category.ALL ? 'Prompts em Destaque' : filter.category}
          </h2>
          <span className="text-sm text-legal-500 font-medium">
            {filteredPrompts.length} resultados encontrados
          </span>
        </div>

        {/* Grid/List Display */}
        {filteredPrompts.length > 0 ? (
          <Suspense fallback={
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-accent/50" />
            </div>
          }>
            <div className={`grid ${filter.viewMode === 'list' ? 'gap-4' : 'gap-6'} ${
              filter.viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1 max-w-4xl mx-auto'
            }`}>
              {displayedPrompts.map((prompt) => (
                <PromptCard 
                  key={prompt.id} 
                  prompt={prompt} 
                  onCopy={handleCopy}
                  onOpenPlayground={handleOpenPlayground}
                  viewMode={filter.viewMode}
                />
              ))}
            </div>
            
            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center items-center gap-4">
                <button 
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="flex items-center gap-1 px-4 py-2 rounded-lg bg-white border border-legal-200 text-legal-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-legal-50 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Anterior
                </button>
                <div className="text-sm font-medium text-legal-600">
                  Página {currentPage} de {totalPages}
                </div>
                <button 
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-1 px-4 py-2 rounded-lg bg-white border border-legal-200 text-legal-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-legal-50 transition-colors"
                >
                  Próxima
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </Suspense>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-legal-300">
            <Search className="w-12 h-12 text-legal-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-legal-900">Nenhum prompt encontrado</h3>
            <p className="text-legal-500">Tente ajustar seus filtros ou termos de busca.</p>
            <button 
              onClick={() => setFilter({ search: '', category: Category.ALL, viewMode: 'grid' })}
              className="mt-4 text-accent hover:underline font-medium"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </main>

      <Suspense fallback={null}>
        <PlaygroundModal 
          isOpen={playgroundOpen} 
          onClose={() => setPlaygroundOpen(false)} 
          prompt={selectedPrompt}
          addToast={addToast}
        />
      </Suspense>
    </>
  );
}
