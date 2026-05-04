import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer id="about" className="bg-white border-t border-legal-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="mb-4 scale-75 origin-left">
              <Logo />
            </div>
            <p className="text-legal-500 text-sm leading-relaxed">
              Projeto educacional desenvolvido pelo Prof. Gabriel Ramos. Focado em preparar candidatos para concursos públicos e equipar profissionais do direito com as melhores ferramentas de IA.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-legal-900 mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-legal-600">
              <li><a href="#" className="hover:text-accent">Biblioteca</a></li>
              <li><a href="#" className="hover:text-accent">Sugerir um Prompt</a></li>
              <li><a href="#" className="hover:text-accent">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-accent">Política de Privacidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-legal-900 mb-4">Contato</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-legal-100 rounded-full hover:bg-legal-200 transition-colors text-legal-700">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-legal-100 rounded-full hover:bg-legal-200 transition-colors text-legal-700">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-legal-100 rounded-full hover:bg-legal-200 transition-colors text-legal-700">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="mt-4 text-xs text-legal-400">
              Este site é apenas para fins educacionais. Verifique sempre as respostas da IA.
            </p>
          </div>
        </div>
        
        <div className="border-t border-legal-100 pt-8 text-center text-sm text-legal-400">
          &copy; {new Date().getFullYear()} ai.wiki.br. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
