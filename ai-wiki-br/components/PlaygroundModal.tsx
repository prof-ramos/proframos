import React, { useState, useEffect } from 'react';
import { X, Sparkles, Loader2, Copy, Check } from 'lucide-react';
import { Prompt } from '../types';
import { generateCompletion } from '../services/geminiService';
import { supabase } from '../services/supabase';

interface PlaygroundModalProps {
  isOpen: boolean;
  onClose: () => void;
  prompt: Prompt | null;
  addToast: (msg: string, type: 'success' | 'error') => void;
}

const PlaygroundModal: React.FC<PlaygroundModalProps> = ({ isOpen, onClose, prompt, addToast }) => {
  const [inputContent, setInputContent] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasApiKey, setHasApiKey] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isOpen && prompt) {
      setInputContent(prompt.content);
      setResult('');
      supabase.functions
        .invoke('generate', { body: { model: 'gemini-2.0-flash', prompt: 'ping' } })
        .then(({ error }) => setHasApiKey(!error));
    }
  }, [isOpen, prompt]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  if (!isOpen || !prompt) return null;

  const handleGenerate = async () => {
    if (!inputContent.trim()) return;
    setIsLoading(true);
    try {
      const fullContext = `Tarefa: ${prompt.title}. \n\n${inputContent}`;
      const response = await generateCompletion('gemini-2.0-flash', fullContext);
      setResult(response);
    } catch {
      addToast('Erro ao gerar resposta. Verifique a configuração da API.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const copyResult = async () => {
    try {
      await navigator.clipboard.writeText(result);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = result;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    addToast('Resultado copiado!', 'success');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-legal-900/50 backdrop-blur-sm">
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-slide-up"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-legal-100 bg-legal-50">
          <div>
            <h2 id="modal-title" className="text-xl font-serif font-semibold text-legal-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent" />
              Playground IA
            </h2>
            <p className="text-sm text-legal-700">Testando: {prompt.title}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-legal-500 hover:text-legal-900 hover:bg-legal-100 rounded-full transition-colors"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="playground-prompt" className="block text-sm font-medium text-legal-700 mb-2">
                Edite o prompt (Preencha os [PLACEHOLDERS])
              </label>
              <textarea
                id="playground-prompt"
                value={inputContent}
                onChange={(e) => setInputContent(e.target.value)}
                className="w-full h-80 p-4 rounded-lg border border-legal-200 focus:ring-2 focus:ring-accent focus:border-transparent font-mono text-sm resize-none bg-legal-50"
                placeholder="Edite o prompt aqui..."
              />
            </div>
            <button
              onClick={handleGenerate}
              disabled={isLoading || !inputContent.trim()}
              className="w-full py-3 bg-accent hover:bg-accent-hover disabled:bg-legal-200 disabled:cursor-not-allowed text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98]"
            >
              {isLoading ? (
                <><Loader2 className="w-5 h-5 animate-spin" />Gerando com Gemini...</>
              ) : (
                <><Sparkles className="w-5 h-5" />Gerar Resultado</>
              )}
            </button>
            {!hasApiKey && (
              <p className="text-xs text-amber-600 mt-1">Nota: API Key necessária para funcionar.</p>
            )}
          </div>

          <div className="flex flex-col gap-4 h-full">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-legal-700">
                Resultado da IA
              </label>
              {result && (
                <button
                  onClick={copyResult}
                  disabled={isCopied}
                  className={`text-xs flex items-center gap-1.5 px-2 py-1 rounded transition-all duration-200 transform ${
                    isCopied
                      ? 'bg-green-100 text-green-700 scale-105'
                      : 'text-accent hover:bg-accent-light/10 hover:underline active:scale-95'
                  }`}
                >
                  {isCopied ? <><Check className="w-3 h-3" /> Copiado</> : <><Copy className="w-3 h-3" /> Copiar</>}
                </button>
              )}
            </div>

            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-legal-50 rounded-lg border border-legal-200 p-4 overflow-auto">
                {result ? (
                  <div className="prose prose-sm max-w-none text-legal-800 whitespace-pre-wrap">{result}</div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-legal-400">
                    <Sparkles className="w-10 h-10 mb-3 opacity-20" />
                    <p className="text-center text-sm">O resultado aparecerá aqui.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundModal;
