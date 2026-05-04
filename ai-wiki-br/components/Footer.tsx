import { Github, Linkedin, Mail } from 'lucide-react';
import Logo from './Logo';

const PlaceholderLink = ({ children }: { children: React.ReactNode }) => (
  <span className="hover:text-accent cursor-default text-legal-600">{children}</span>
);

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
            <ul className="space-y-2 text-sm">
              <li><PlaceholderLink>Biblioteca</PlaceholderLink></li>
              <li><PlaceholderLink>Sugerir um Prompt</PlaceholderLink></li>
              <li><PlaceholderLink>Termos de Uso</PlaceholderLink></li>
              <li><PlaceholderLink>Política de Privacidade</PlaceholderLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-legal-900 mb-4">Contato</h4>
            <div className="flex gap-4">
              <span className="p-2 bg-legal-100 rounded-full text-legal-700 cursor-default">
                <Github className="w-5 h-5" />
              </span>
              <span className="p-2 bg-legal-100 rounded-full text-legal-700 cursor-default">
                <Linkedin className="w-5 h-5" />
              </span>
              <span className="p-2 bg-legal-100 rounded-full text-legal-700 cursor-default">
                <Mail className="w-5 h-5" />
              </span>
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
