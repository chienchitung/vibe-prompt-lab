
import React, { useState } from 'react';
import { Framework, GroupedFrameworks, LocalizedText } from '../types';
import Header from './Header';
import SearchBar from './SearchBar';
import { Language } from '../App';

interface SidebarProps {
  groupedFrameworks: GroupedFrameworks;
  sortedCategories: string[];
  selectedFramework: Framework | null;
  onSelectFramework: (framework: Framework) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  favorites: string[];
  favoriteFrameworks: Framework[];
  onGoHome: () => void;
  onGoToGuide: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (text: LocalizedText) => string;
}

const Sidebar: React.FC<SidebarProps> = ({
  groupedFrameworks,
  sortedCategories,
  selectedFramework,
  onSelectFramework,
  searchTerm,
  onSearchChange,
  favorites,
  favoriteFrameworks,
  onGoHome,
  onGoToGuide,
  language,
  setLanguage,
  t,
}) => {
  const [collapsedCategories, setCollapsedCategories] = useState<Set<string>>(new Set());

  const toggleCategory = (category: string) => {
    setCollapsedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };
  
  const uiText = {
    favorites: { zh: '我的最愛', en: 'Favorites' },
    noResults: { zh: '找不到框架。請嘗試不同的搜尋詞。', en: 'No frameworks found. Try a different search term.' },
    decisionGuide: { zh: '框架選擇指南', en: 'Framework Guide' }
  }

  return (
    <aside className="fixed top-0 left-0 h-screen w-96 bg-slate-800 flex flex-col shadow-lg">
      <Header onGoHome={onGoHome} language={language} setLanguage={setLanguage} />
      <div className="p-4 space-y-4">
        <SearchBar value={searchTerm} onChange={onSearchChange} language={language} />
        <button
          onClick={onGoToGuide}
          className="w-full bg-slate-700 hover:bg-slate-600 text-slate-200 font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2.5 text-sm"
          aria-label={uiText.decisionGuide[language]}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
          <span>{uiText.decisionGuide[language]}</span>
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto px-4 pb-4">
        {favoriteFrameworks.length > 0 && (
            <div className="mb-6">
                <h2 className="text-xs font-bold text-yellow-400 uppercase tracking-wider mb-2 px-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {uiText.favorites[language]}
                </h2>
                <ul>
                    {favoriteFrameworks.map((framework) => (
                        <li key={framework.id}>
                            <button
                                onClick={() => onSelectFramework(framework)}
                                className={`w-full text-left text-sm p-2 rounded-md transition-colors duration-150 ${
                                    selectedFramework?.id === framework.id
                                        ? 'bg-teal-500 text-white font-semibold'
                                        : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                                }`}
                            >
                                {t(framework.name)}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        )}
        {sortedCategories.length > 0 ? (
          sortedCategories.map((category) => {
            const isCollapsed = collapsedCategories.has(category);
            return (
              <div key={category} className="mb-2">
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full flex justify-between items-center text-left text-xs font-bold text-teal-400 uppercase tracking-wider mb-2 px-2 py-1 rounded-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  aria-expanded={!isCollapsed}
                >
                  <span>{category}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transform transition-transform duration-200 ${
                      isCollapsed ? '-rotate-90' : 'rotate-0'
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {!isCollapsed && (
                  <ul className="pl-2 border-l border-slate-700 ml-2 space-y-1">
                    {groupedFrameworks[category]
                      .filter(framework => !favorites.includes(framework.id))
                      .map((framework) => (
                      <li key={framework.id}>
                        <button
                          onClick={() => onSelectFramework(framework)}
                          className={`w-full text-left text-sm p-2 rounded-md transition-colors duration-150 ${
                            selectedFramework?.id === framework.id
                              ? 'bg-teal-500 text-white font-semibold'
                              : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                          }`}
                        >
                          {t(framework.name)}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })
        ) : (
            <p className="text-center text-slate-400 text-sm mt-4 px-2">{uiText.noResults[language]}</p>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;