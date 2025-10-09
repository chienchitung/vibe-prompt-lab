
import React, { useMemo } from 'react';
import { Framework, LocalizedText } from '../types';
import { decisionGuideData } from '../constants/decisionGuide';
import { frameworksData } from '../constants/frameworks';
import { Language } from '../App';

interface DecisionGuideProps {
  onSelectFramework: (framework: Framework) => void;
  language: Language;
  t: (text: LocalizedText) => string;
}

const DecisionGuide: React.FC<DecisionGuideProps> = ({ onSelectFramework, language, t }) => {
  const frameworksMap = useMemo(() => {
    const map = new Map<string, Framework>();
    frameworksData.forEach(f => map.set(f.id, f));
    return map;
  }, []);

  return (
    <div className="space-y-6">
      {decisionGuideData.map((item, index) => (
        <div key={index} className="bg-slate-800/50 p-4 rounded-lg ring-1 ring-slate-700 text-left">
          <p className="font-semibold text-slate-300 mb-3">{t(item.useCase)}</p>
          <div className="flex flex-wrap gap-2">
            {item.frameworkIds.map(id => {
              const framework = frameworksMap.get(id);
              if (!framework) return null;
              return (
                <button
                  key={id}
                  onClick={() => onSelectFramework(framework)}
                  className="bg-slate-700 hover:bg-slate-600 text-teal-300 font-medium py-1 px-3 rounded-full text-sm transition-colors"
                >
                  {t(framework.name)}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DecisionGuide;
