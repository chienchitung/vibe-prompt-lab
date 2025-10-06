
import React from 'react';
import { Language } from '../App';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  language: Language;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, language }) => {
  const placeholderText = {
    zh: '搜尋框架...',
    en: 'Search frameworks...',
  }
  return (
    <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <svg
          className="w-5 h-5 text-slate-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </span>
      <input
        type="text"
        placeholder={placeholderText[language]}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 pl-10 pr-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow"
      />
    </div>
  );
};

export default SearchBar;
