
import React from 'react';
import { Language } from '../App';

interface HeaderProps {
  onGoHome: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ onGoHome, language, setLanguage }) => {
  const subtitle = {
    zh: 'AI Prompt Engineering Frameworks',
    en: 'AI Prompt Engineering Frameworks',
  };

  const handleToggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <header className="p-4 border-b border-slate-700 bg-slate-800 sticky top-0 z-10">
      <div className="flex justify-between items-center">
        <button
          onClick={onGoHome}
          className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-teal-500 rounded-lg p-1 -m-1"
          aria-label="Go to homepage"
        >
          <div className="bg-gradient-to-tr from-teal-400 to-blue-500 p-2 rounded-lg transition-transform duration-200 group-hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 S11 21 11 19v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight">Vibe Prompt Lab</h1>
            <p className="text-xs text-slate-400 mt-0.5 text-left">{subtitle[language]}</p>
          </div>
        </button>
        <button
            onClick={handleToggleLanguage}
            className="text-sm font-medium text-slate-300 hover:text-white bg-slate-700 hover:bg-slate-600 px-3 py-1.5 rounded-md transition-colors flex-shrink-0"
            aria-label="Toggle language"
        >
            {language === 'zh' ? 'EN' : '繁中'}
        </button>
      </div>
    </header>
  );
};

export default Header;
