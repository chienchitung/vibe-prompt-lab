
import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Framework, GroupedFrameworks, LocalizedText, LocalizedTextArray } from './types';
import { frameworksData } from './constants/frameworks';
import Sidebar from './components/Sidebar';
import FrameworkDetail from './components/FrameworkDetail';
import Welcome from './components/Welcome';
import Tutorial from './components/Tutorial';
import GuidePage from './components/GuidePage';

export type Language = 'zh' | 'en';

const App: React.FC = () => {
  const [selectedFramework, setSelectedFramework] = useState<Framework | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isTutorialVisible, setIsTutorialVisible] = useState(false);
  const [mainView, setMainView] = useState<'welcome' | 'guide'>('welcome');
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem('vibe-prompt-lab-language') as Language) || 'zh';
  });
  
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const storedFavorites = localStorage.getItem('vibe-prompt-lab-favorites');
      return storedFavorites ? JSON.parse(storedFavorites) : [];
    } catch (error) {
      console.error("Failed to parse favorites from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('vibe-prompt-lab-favorites', JSON.stringify(favorites));
    } catch (error) {
      console.error("Failed to save favorites to localStorage", error);
    }
  }, [favorites]);
  
  useEffect(() => {
    const hasSeenTutorial = localStorage.getItem('vibe-prompt-lab-tutorial-seen');
    if (!hasSeenTutorial) {
      setIsTutorialVisible(true);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('vibe-prompt-lab-language', language);
  }, [language]);

  const t = useCallback((text: LocalizedText) => text[language], [language]);
  const ta = useCallback((textArray: LocalizedTextArray) => textArray[language], [language]);

  const handleGoHome = () => {
    setSelectedFramework(null);
    setMainView('welcome');
    setSearchTerm('');
  };

  const handleGoToGuide = () => {
    setSelectedFramework(null);
    setMainView('guide');
    setSearchTerm('');
  };

  const handleTutorialClose = () => {
    setIsTutorialVisible(false);
    localStorage.setItem('vibe-prompt-lab-tutorial-seen', 'true');
  };

  const handleTutorialStart = () => {
      setIsTutorialVisible(true);
  }

  const handleToggleFavorite = (frameworkId: string) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(frameworkId)) {
        return prevFavorites.filter(id => id !== frameworkId);
      } else {
        return [...prevFavorites, frameworkId];
      }
    });
  };

  const filteredFrameworks = useMemo(() => {
    if (!searchTerm.trim()) {
      return frameworksData;
    }
    const lowercasedTerm = searchTerm.toLowerCase();
    return frameworksData.filter(f =>
      t(f.name).toLowerCase().includes(lowercasedTerm) ||
      t(f.category).toLowerCase().includes(lowercasedTerm) ||
      t(f.description).toLowerCase().includes(lowercasedTerm) ||
      ta(f.components).some(c => c.toLowerCase().includes(lowercasedTerm))
    );
  }, [searchTerm, t, ta]);

  const groupedFrameworks = useMemo<GroupedFrameworks>(() => {
    return filteredFrameworks.reduce((acc, framework) => {
      const category = t(framework.category);
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(framework);
      return acc;
    }, {} as GroupedFrameworks);
  }, [filteredFrameworks, t]);
  
  const sortedCategories = useMemo(() => {
    const categoryOrder_zh = [
        '基礎結構框架',
        '進階推理框架',
        '商業應用框架',
        '創意思考框架',
        '教育培訓框架',
        '行銷傳播框架',
        '專業技術框架',
    ];
    const categoryOrder_en = [
        'Basic Structure Frameworks',
        'Advanced Reasoning Frameworks',
        'Business Application Frameworks',
        'Creative Thinking Frameworks',
        'Education & Training Frameworks',
        'Marketing & Communication Frameworks',
        'Professional & Technical Frameworks',
    ];
    const categoryOrder = language === 'zh' ? categoryOrder_zh : categoryOrder_en;

    return Object.keys(groupedFrameworks).sort((a, b) => {
        const indexA = categoryOrder.indexOf(a);
        const indexB = categoryOrder.indexOf(b);
        if (indexA === -1) return 1;
        if (indexB === -1) return -1;
        return indexA - indexB;
    });
  }, [groupedFrameworks, language]);
  
  const favoriteFrameworks = useMemo(() => {
    return frameworksData
      .filter(f => favorites.includes(f.id))
      .sort((a, b) => t(a.name).localeCompare(t(b.name)));
  }, [favorites, t]);


  return (
    <div className="flex h-screen">
       {isTutorialVisible && <Tutorial onClose={handleTutorialClose} language={language} />}
      <Sidebar
        groupedFrameworks={groupedFrameworks}
        sortedCategories={sortedCategories}
        selectedFramework={selectedFramework}
        onSelectFramework={setSelectedFramework}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        favorites={favorites}
        favoriteFrameworks={favoriteFrameworks}
        onGoHome={handleGoHome}
        onGoToGuide={handleGoToGuide}
        language={language}
        setLanguage={setLanguage}
        t={t}
      />
      <main className="flex-1 ml-96 p-6 sm:p-8 lg:p-12 overflow-y-auto">
        {selectedFramework ? (
          <FrameworkDetail 
            framework={selectedFramework} 
            key={selectedFramework.id}
            isFavorite={favorites.includes(selectedFramework.id)}
            onToggleFavorite={handleToggleFavorite}
            t={t}
            ta={ta}
          />
        ) : mainView === 'guide' ? (
          <GuidePage 
            onSelectFramework={setSelectedFramework}
            language={language}
            t={t}
          />
        ) : (
          <Welcome onSelectFramework={setSelectedFramework} onStartTutorial={handleTutorialStart} language={language} t={t} />
        )}
      </main>
    </div>
  );
};

export default App;