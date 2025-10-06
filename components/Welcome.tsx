
import React from 'react';
import { frameworksData } from '../constants/frameworks';
import { Framework, LocalizedText } from '../types';
import { Language } from '../App';

interface WelcomeProps {
    onSelectFramework: (framework: Framework) => void;
    onStartTutorial: () => void;
    language: Language;
    t: (text: LocalizedText) => string;
}

const quickLinks: { zh: string[], en: string[] } = {
    zh: ['APE 框架', 'RACE 框架', 'Chain of Thought (CoT)', 'AIDA 框架', 'SWOT 框架'],
    en: ['APE Framework', 'RACE Framework', 'Chain of Thought (CoT)', 'AIDA Framework', 'SWOT Framework'],
};

const Welcome: React.FC<WelcomeProps> = ({ onSelectFramework, onStartTutorial, language, t }) => {
    
    const handleQuickLinkClick = (name: string) => {
        const framework = frameworksData.find(f => t(f.name) === name);
        if (framework) {
            onSelectFramework(framework);
        }
    }

    const uiText = {
        mainHeading: { zh: '歡迎來到 Vibe Prompt Lab', en: 'Welcome to Vibe Prompt Lab' },
        subHeading: { zh: '您掌握 AI 提示工程的綜合指南。探索框架、搜尋技術並提升您與 AI 的互動。', en: 'Your comprehensive guide to mastering AI prompt engineering. Explore frameworks, search for techniques, and elevate your AI interactions.' },
        tutorialHeading: { zh: '提示工程新手？', en: 'New to Prompting?' },
        tutorialBody: { zh: '透過我們快速的互動式教學，了解提示工程的基礎知識以及如何使用此實驗室。', en: 'Learn the basics of prompt engineering and how to use this lab with our quick, interactive tutorial.' },
        startTutorialButton: { zh: '開始教學', en: 'Start Tutorial' },
        jumpInHeading: { zh: '或直接開始：', en: 'Or jump right in:' },
    };

  return (
    <div className="flex flex-col items-center justify-center h-full text-center max-w-2xl mx-auto">
      <div className="bg-gradient-to-tr from-teal-400 to-blue-500 p-4 rounded-full mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </div>
      <h1 className="text-4xl font-bold text-white mb-4">{uiText.mainHeading[language]}</h1>
      <p className="text-lg text-slate-400 mb-8">
        {uiText.subHeading[language]}
      </p>

      <div className="bg-slate-800/50 p-6 rounded-lg ring-1 ring-slate-700 w-full mb-8">
        <h3 className="text-lg font-semibold text-teal-400 mb-2">{uiText.tutorialHeading[language]}</h3>
        <p className="text-slate-400 mb-4">
            {uiText.tutorialBody[language]}
        </p>
        <button
            onClick={onStartTutorial}
            className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-6 rounded-lg transition-colors w-full sm:w-auto"
        >
            {uiText.startTutorialButton[language]}
        </button>
      </div>

       <div className="w-full">
            <h3 className="text-md font-semibold text-slate-300 mb-4">{uiText.jumpInHeading[language]}</h3>
            <div className="flex flex-wrap justify-center gap-3">
                {quickLinks[language].map(link => (
                    <button 
                        key={link}
                        onClick={() => handleQuickLinkClick(link)}
                        className="bg-slate-700 hover:bg-slate-600 text-slate-200 font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                        {link}
                    </button>
                ))}
            </div>
       </div>
    </div>
  );
};

export default Welcome;
