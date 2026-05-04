import React, { useState } from 'react';
import { Copy, Check, Bookmark, Sparkles, Bot } from 'lucide-react';
import { Prompt, Category, Complexity } from '../types';
import { CATEGORY_ICONS } from '../constants';

interface PromptCardProps {
  prompt: Prompt;
  onCopy: (content: string) => void;
  onOpenPlayground: (prompt: Prompt) => void;
  addToast: (msg: string, type: 'success' | 'error' | 'info') => void;
  viewMode?: 'grid' | 'list';
}

const COMPLEXITY_COLORS: Record<Complexity, string> = {
  [Complexity.Iniciante]: 'bg-green-100 text-green-800',
  [Complexity.Intermediário]: 'bg-blue-100 text-blue-800',
  [Complexity.Avançado]: 'bg-amber-100 text-amber-800',
};

const PromptCard: React.FC<PromptCardProps> = ({
  prompt,
  onCopy,
  onOpenPlayground,
  addToast,
  viewMode = 'grid',
}) => {
  const storageKey = `prompt-saved-${prompt.id}`;
  const [isCopied, setIsCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isSaved, setIsSaved] = useState(() => localStorage.getItem(storageKey) === 'true');
  const [showSavedFeedback, setShowSavedFeedback] = useState(false);

  const isList = viewMode === 'list';

  const handleCopy = () => {
    onCopy(prompt.content);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleToggleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newState = !isSaved;
    setIsSaved(newState);
    localStorage.setItem(storageKey, String(newState));
    if (newState) {
      setShowSavedFeedback(true);
      setTimeout(() => setShowSavedFeedback(false), 2000);
    } else {
      setShowSavedFeedback(false);
    }
  };

  const handleChatGPT = (e: React.MouseEvent) => {
    e.stopPropagation();
    onCopy(prompt.content);
    const encodedPrompt = encodeURIComponent(prompt.content);
    if (encodedPrompt.length >= 2000) {
      addToast('Prompt muito longo para o ChatGPT. Use o Playground ou copie manualmente.', 'info');
      return;
    }
    const win = window.open(`https://chatgpt.com/?q=${encodedPrompt}`, '_blank');
    if (!win) {
      addToast('Popup bloqueado pelo navegador. Habilite popups para este site.', 'error');
    }
  };

  return (
    <article
      className={`group relative bg-white rounded-xl border border-legal-100 flex flex-col
      ${isList ? 'h-auto mb-6' : 'h-full'}
      shadow-sm hover:shadow-lg hover:border-accent
      transition-all duration-300 ease-in-out transform-gpu
      motion-safe:hover:scale-105 hover:z-10
      active:scale-[0.98]`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`${isList ? 'px-6 pt-6 pb-0 flex-row-reverse justify-end gap-4' : 'px-6 pt-6 justify-between'} flex items-start`}>
        <div className="flex gap-2 relative">
          <button
            onClick={handleToggleSave}
            className={`p-2 rounded-full transition-colors ${isSaved ? 'text-accent bg-accent-light' : 'text-legal-300 hover:bg-legal-50'}`}
            aria-label={isSaved ? 'Remover dos favoritos' : 'Salvar nos favoritos'}
          >
            <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
          </button>
          {showSavedFeedback && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 z-20 pointer-events-none">
              <div className="animate-slide-up">
                <span className="bg-legal-900 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap">
                  Salvo!
                </span>
              </div>
            </div>
          )}
        </div>

        <div className={`p-2 rounded-lg ${prompt.category === Category.EXAM_PREP ? 'bg-purple-100 text-purple-700' : 'bg-legal-100 text-legal-700'}`}>
          {CATEGORY_ICONS[prompt.category]}
        </div>
      </div>

      <div className={`${isList ? 'px-6 py-5' : 'px-6 py-4'} flex-1`}>
        <div className="flex items-center gap-2 mb-4">
          {prompt.isNew && (
            <span className="px-2 py-0.5 text-[10px] font-bold text-white bg-accent rounded-full uppercase tracking-wider">
              Novo
            </span>
          )}
          <span className={`px-2 py-0.5 text-[10px] font-medium rounded-full uppercase tracking-wide ${COMPLEXITY_COLORS[prompt.complexity]}`}>
            {prompt.complexity}
          </span>
        </div>

        <h3 className={`font-serif font-bold text-legal-900 group-hover:text-accent transition-colors ${
          isList ? 'text-xl md:text-2xl leading-snug mb-3' : 'text-lg leading-tight mb-2'
        }`}>
          {prompt.title}
        </h3>

        <p className={`text-legal-700 ${isList ? 'text-base leading-relaxed mb-5' : 'text-sm line-clamp-3 mb-3'}`}>
          {prompt.description}
        </p>

        <div className={`flex flex-wrap gap-2 ${isList ? 'mt-4' : 'mt-auto'}`}>
          {prompt.tags.map((tag) => (
            <span key={tag} className="text-xs text-legal-500 bg-legal-50 px-2.5 py-1 rounded border border-legal-100">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-transparent group-hover:border-legal-50 mt-2">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold text-legal-400 uppercase tracking-widest hidden sm:block">Testar</span>

          <div className="relative group/tooltip">
            <button
              onClick={() => onOpenPlayground(prompt)}
              className="p-2 rounded-lg bg-legal-50 hover:bg-blue-50 text-legal-500 hover:text-blue-600 transition-colors border border-transparent hover:border-blue-100 active:scale-95"
              aria-label="Testar no Gemini"
            >
              <Sparkles className="w-4 h-4" />
            </button>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[200px] text-center px-2 py-1 bg-legal-900 text-white text-[10px] rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none z-20">
              Abra o prompt no Playground para testar e personalizar
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-legal-900"></div>
            </div>
          </div>

          <div className="relative group/tooltip">
            <button
              onClick={handleChatGPT}
              className="p-2 rounded-lg bg-legal-50 hover:bg-green-50 text-legal-500 hover:text-green-600 transition-colors border border-transparent hover:border-green-100 active:scale-95"
              aria-label="Testar no ChatGPT"
            >
              <Bot className="w-4 h-4" />
            </button>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 bg-legal-900 text-white text-[10px] rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none z-20">
              ChatGPT (Tenta preencher)
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-legal-900"></div>
            </div>
          </div>
        </div>

        <button
          onClick={(e) => { e.stopPropagation(); handleCopy(); }}
          disabled={isCopied}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 transform ${
            isCopied
              ? 'bg-green-600 text-white shadow-md scale-105 ring-2 ring-green-200 ring-offset-1'
              : 'bg-legal-900 text-white hover:bg-accent active:scale-95'
          }`}
          aria-label={isCopied ? 'Copiado com sucesso' : 'Copiar prompt'}
        >
          {isCopied ? (
            <><Check className="w-4 h-4" /><span>Copiado</span></>
          ) : (
            <><Copy className="w-4 h-4" /><span className={isList ? 'hidden sm:inline' : ''}>Copiar</span></>
          )}
        </button>
      </div>
    </article>
  );
};

export default PromptCard;
