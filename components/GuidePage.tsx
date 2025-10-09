import React from 'react';
import { Framework, LocalizedText } from '../types';
import { Language } from '../App';
import DecisionGuide from './DecisionGuide';

interface GuidePageProps {
    onSelectFramework: (framework: Framework) => void;
    language: Language;
    t: (text: LocalizedText) => string;
}

const GuidePage: React.FC<GuidePageProps> = ({ onSelectFramework, language, t }) => {
    const uiText = {
        guideHeading: { zh: '如何選擇合適的框架？', en: 'How to Choose the Right Framework?' },
        guideSubheading: { zh: '根據您的需求，從這裡開始探索：', en: 'Start exploring based on your needs:' },
    };

    return (
        <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">{uiText.guideHeading[language]}</h1>
            <p className="text-lg text-slate-400 mb-8">{uiText.guideSubheading[language]}</p>
            <DecisionGuide onSelectFramework={onSelectFramework} language={language} t={t} />
        </div>
    );
};

export default GuidePage;
