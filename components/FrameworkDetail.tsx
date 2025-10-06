import React, { useState, useEffect } from 'react';
import { Framework, LocalizedText, LocalizedTextArray } from '../types';
import { GoogleGenAI } from "@google/genai";

interface FrameworkDetailProps {
  framework: Framework;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  t: (text: LocalizedText) => string;
  ta: (text: LocalizedTextArray) => string[];
}

const FrameworkDetail: React.FC<FrameworkDetailProps> = ({ framework, isFavorite, onToggleFavorite, t, ta }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isResponseCopied, setIsResponseCopied] = useState(false);
  const language = t(framework.name) === framework.name.zh ? 'zh' : 'en';
  
  const [promptInput, setPromptInput] = useState(t(framework.example.code));
  const [isLoading, setIsLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);

  // Initialize the Gemini API client
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });


  // Reset playground state when the framework changes
  useEffect(() => {
    setPromptInput(t(framework.example.code));
    setAiResponse(null);
    setIsLoading(false);
    setIsResponseCopied(false);
  }, [framework, t]);


  const uiText = {
    copy: { zh: '複製', en: 'Copy' },
    copied: { zh: '已複製!', en: 'Copied!' },
    addToFavorites: { zh: '加入最愛', en: 'Add to favorites' },
    removeFromFavorites: { zh: '從最愛中移除', en: 'Remove from favorites' },
    playgroundTitle: { zh: '提示詞遊樂場', en: 'Prompt Playground' },
    playgroundDescription: { zh: '在這裡測試範例或練習您自己的提示詞！', en: 'Test the example or practice your own prompts here!' },
    generate: { zh: '生成回應', en: 'Generate' },
    generating: { zh: '生成中...', en: 'Generating...' },
    apiError: { 
      zh: '糟糕！生成回應時發生錯誤。請檢查您的 API 金鑰並稍後再試。', 
      en: 'Oops! An error occurred while generating the response. Please check your API key and try again later.'
    },
  };

  const handleCopy = () => {
    if (isCopied) return;

    navigator.clipboard.writeText(t(framework.example.code))
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
      })
      .catch(err => {
        console.error('Failed to copy code: ', err);
      });
  };

  const handleCopyResponse = () => {
    if (isResponseCopied || !aiResponse) return;

    navigator.clipboard.writeText(aiResponse)
      .then(() => {
        setIsResponseCopied(true);
        setTimeout(() => setIsResponseCopied(false), 2000); // Reset after 2 seconds
      })
      .catch(err => {
        console.error('Failed to copy AI response: ', err);
      });
  };
  
  const handleGenerate = async () => {
      setIsLoading(true);
      setAiResponse(null);
      setIsResponseCopied(false);
      try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: promptInput,
        });
        setAiResponse(response.text);
      } catch (error) {
        console.error("Error generating AI response:", error);
        setAiResponse(uiText.apiError[language]);
      } finally {
        setIsLoading(false);
      }
    };

  const isError = aiResponse === uiText.apiError[language];

  return (
    <div className="bg-slate-800 rounded-lg p-6 md:p-8 shadow-2xl max-w-4xl mx-auto">
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight pr-4">
          {t(framework.name)}
        </h2>
        <button
          onClick={() => onToggleFavorite(framework.id)}
          className={`p-2 rounded-full transition-colors flex-shrink-0 ${
            isFavorite 
              ? 'text-yellow-400 hover:text-yellow-300' 
              : 'text-slate-500 hover:bg-slate-700 hover:text-yellow-400'
          }`}
          aria-label={isFavorite ? uiText.removeFromFavorites[language] : uiText.addToFavorites[language]}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </button>
      </div>
      
      <div className="flex flex-wrap gap-x-3 gap-y-1 mb-6">
        {ta(framework.components).map((comp, index) => (
            <span key={index} className="text-sm font-semibold text-teal-400">
                {comp}
            </span>
        ))}
      </div>
      
      <p className="text-slate-300 mb-8 leading-relaxed text-base">
        {t(framework.description)}
      </p>

      <div>
        <h3 className="text-xl font-bold text-white mb-4">
          {t(framework.example.title)}
        </h3>
        <div className="relative">
          <pre className="bg-slate-900 p-4 rounded-md text-slate-300 text-sm font-mono whitespace-pre-wrap overflow-x-auto ring-1 ring-slate-700">
            <code>{t(framework.example.code)}</code>
          </pre>
          <button
            onClick={handleCopy}
            className={`absolute top-3 right-3 text-xs font-semibold py-1 px-3 rounded-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-teal-500 ${
              isCopied
                ? 'bg-teal-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            {isCopied ? uiText.copied[language] : uiText.copy[language]}
          </button>
        </div>
      </div>
      
      {/* Prompt Playground */}
      <div className="mt-10 pt-8 border-t border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-2">
              {uiText.playgroundTitle[language]}
          </h3>
          <p className="text-slate-400 mb-4 text-sm">
              {uiText.playgroundDescription[language]}
          </p>
          
          <div className="flex flex-col gap-4">
              <textarea
                  value={promptInput}
                  onChange={(e) => setPromptInput(e.target.value)}
                  className="w-full bg-slate-900 p-4 rounded-md text-slate-300 text-sm font-mono whitespace-pre-wrap ring-1 ring-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow min-h-[150px] resize-y"
                  rows={6}
              />
              <button
                  onClick={handleGenerate}
                  disabled={isLoading || !promptInput.trim()}
                  className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-5 rounded-lg transition-colors disabled:bg-slate-600 disabled:cursor-not-allowed self-start flex items-center gap-2"
              >
              {isLoading ? (
                  <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {uiText.generating[language]}
                  </>
              ) : (
                  uiText.generate[language]
              )}
              </button>
          </div>

          {aiResponse && !isLoading && (
              <div className={`relative mt-4 p-4 rounded-md animate-fade-in ${isError ? 'bg-red-900/50 ring-1 ring-red-500/30' : 'bg-slate-900/50 ring-1 ring-slate-700'}`}>
                  <pre className={`pr-12 text-sm whitespace-pre-wrap font-sans leading-relaxed ${isError ? 'text-red-300' : 'text-slate-300'}`}>
                      {aiResponse}
                  </pre>
                  {!isError && (
                      <button
                        onClick={handleCopyResponse}
                        className={`absolute top-3 right-3 text-xs font-semibold py-1 px-3 rounded-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-teal-500 ${
                          isResponseCopied
                            ? 'bg-teal-600 text-white'
                            : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                        }`}
                      >
                        {isResponseCopied ? uiText.copied[language] : uiText.copy[language]}
                      </button>
                  )}
              </div>
          )}
      </div>
    </div>
  );
};

export default FrameworkDetail;