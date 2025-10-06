
import React, { useState } from 'react';
import { Language } from '../App';

interface TutorialProps {
  onClose: () => void;
  language: Language;
}

const Tutorial: React.FC<TutorialProps> = ({ onClose, language }) => {
  const [step, setStep] = useState(1);
  const [userInput, setUserInput] = useState({
    action: '',
    purpose: '',
    expectation: '',
  });
  const [showGeneratedPrompt, setShowGeneratedPrompt] = useState(false);
  const [showExampleResponse, setShowExampleResponse] = useState(false);

  const totalSteps = 5;

  const nextStep = () => setStep(s => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserInput(prev => ({ ...prev, [name]: value }));
  };
  
  const handleGeneratePrompt = () => {
    setShowGeneratedPrompt(true);
    setShowExampleResponse(false);
  };
  
  const uiText = {
      // Step 1
      step1Title: { zh: '歡迎來到 Vibe Prompt Lab！', en: 'Welcome to the Vibe Prompt Lab!' },
      step1Desc1: { zh: '這個快速教學將引導您了解提示工程的核心概念，並向您展示如何充分利用這個實驗室。', en: 'This quick tutorial will guide you through the core concepts of prompt engineering and show you how to get the most out of this lab.' },
      step1Desc2: { zh: '讓我們學習如何更有效地與 AI 溝通。', en: 'Let\'s learn how to communicate with AI more effectively.' },
      
      // Step 2
      step2Title: { zh: '提示的藝術', en: 'The Art of the Prompt' },
      step2Desc1: { zh: '「提示」就是您給 AI 的指令。AI 回應的品質在很大程度上取決於您提示的品質。', en: 'A "prompt" is simply an instruction you give to an AI. The quality of the AI\'s response depends heavily on the quality of your prompt.' },
      vaguePromptTitle: { zh: '模糊的提示 😕', en: 'Vague Prompt 😕' },
      vaguePromptExample: { zh: '「跟我說說狗。」', en: '"Tell me about dogs."' },
      vaguePromptDesc: { zh: '這太籠統了。AI 不知道您想要什麼：事實、故事還是品種？', en: 'This is too broad. The AI doesn\'t know what you want: facts, a story, breeds?' },
      specificPromptTitle: { zh: '具體的提示 🙂', en: 'Specific Prompt 🙂' },
      specificPromptExample: { zh: '「用條列式列出 5 個關於黃金獵犬的獨特事實。」', en: '"List 5 unique facts about Golden Retrievers in bullet points."' },
      specificPromptDesc: { zh: '這清晰具體，能帶來更好、更有用的回應。', en: 'This is clear and specific, leading to a much better, more useful response.' },
      
      // Step 3
      step3Title: { zh: '用框架給出更清晰的指令', en: 'Giving Clearer Instructions with Frameworks' },
      step3Desc1: { zh: '框架為您的提示提供了結構。它們就像是從 AI 獲得出色結果的食譜。讓我們來看一個簡單的例子：', en: 'Frameworks provide a structure for your prompts. They are like recipes for getting great results from an AI. Let\'s look at a simple one: ' },
      apeA: { zh: '行動：AI 應該做什麼？（例如：撰寫、摘要、列出）', en: 'Action: What should the AI do? (e.g., write, summarize, list)' },
      apeP: { zh: '目的：你為什麼要問？背景是什麼？', en: 'Purpose: Why are you asking? What\'s the context?' },
      apeE: { zh: '期望：最終的輸出應該是什麼樣子？（例如：格式、語氣、長度）', en: 'Expectation: What should the final output look like? (e.g., format, tone, length)' },

      // Step 4
      step4Title: { zh: '輪到你來提示了！', en: 'Your Turn to Prompt!' },
      step4Desc1: { zh: '填寫下面的 APE 框架，創建您自己的結構化提示。', en: 'Fill in the APE framework below to create your own structured prompt.' },
      actionPlaceholder: { zh: '例如：為一封電子郵件寫三個主旨', en: 'e.g., Write three subject lines for an email' },
      purposePlaceholder: { zh: '例如：為了宣布我們網站上的夏日特賣活動', en: 'e.g., To announce a summer sale on our website' },
      expectationPlaceholder: { zh: '例如：語氣應該是令人興奮和急迫的', en: 'e.g., The tone should be exciting and urgent' },
      generateButton: { zh: '生成提示', en: 'Generate Prompt' },
      yourPrompt: { zh: '你的結構化提示：', en: 'Your Structured Prompt:' },
      seeExample: { zh: '查看 AI 回應範例 →', en: 'See Example AI Response →' },
      aiResponseTitle: { zh: 'AI 回應：', en: 'AI RESPONSE:' },
      aiResponseContent: { zh: '太棒了！像這樣結構化的提示給了我所有需要的資訊。根據您的指示，這裡有三個令人興奮、營造緊迫感並為夏日特賣量身打造的主旨...', en: '"Excellent! A structured prompt like this gives me all the information I need. Based on your instructions, here are three subject lines that are exciting, create a sense of urgency, and are tailored for a summer sale..."' },
      
      // Step 5
      step5Title: { zh: '你準備好探索了！', en: 'You\'re Ready to Explore!' },
      step5Desc1: { zh: '恭喜！您已經學會了有效提示的基礎知識。', en: 'Congratulations! You\'ve learned the basics of effective prompting.' },
      step5Desc2: { zh: '這個實驗室包含超過 50 種其他框架。使用側邊欄按類別瀏覽、搜尋特定技術並儲存您的最愛。提示愉快！', en: 'The lab contains over 50 other frameworks. Use the sidebar to browse by category, search for specific techniques, and save your favorites. Happy prompting!' },

      // Controls
      stepCounter: { zh: `步驟 {step} / {totalSteps}`, en: `Step {step} of {totalSteps}` },
      previous: { zh: '上一步', en: 'Previous' },
      next: { zh: '下一步', en: 'Next' },
      finish: { zh: '完成教學', en: 'Finish Tutorial' },
  };

  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2 className="text-2xl font-bold text-white mb-4">{uiText.step1Title[language]}</h2>
            <p className="text-slate-300">{uiText.step1Desc1[language]}</p>
            <p className="text-slate-300 mt-4">{uiText.step1Desc2[language]}</p>
          </>
        );
      case 2:
        return (
          <>
            <h2 className="text-2xl font-bold text-white mb-4">{uiText.step2Title[language]}</h2>
            <p className="text-slate-300 mb-4">{uiText.step2Desc1[language]}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="bg-slate-900 p-4 rounded-md ring-1 ring-red-500/50">
                    <h3 className="font-semibold text-red-400 mb-2">{uiText.vaguePromptTitle[language]}</h3>
                    <code className="text-sm text-slate-300">{uiText.vaguePromptExample[language]}</code>
                    <p className="text-xs text-slate-400 mt-2">{uiText.vaguePromptDesc[language]}</p>
                </div>
                <div className="bg-slate-900 p-4 rounded-md ring-1 ring-green-500/50">
                    <h3 className="font-semibold text-green-400 mb-2">{uiText.specificPromptTitle[language]}</h3>
                    <code className="text-sm text-slate-300">{uiText.specificPromptExample[language]}</code>
                    <p className="text-xs text-slate-400 mt-2">{uiText.specificPromptDesc[language]}</p>
                </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h2 className="text-2xl font-bold text-white mb-4">{uiText.step3Title[language]}</h2>
            <p className="text-slate-300 mb-4">
              {uiText.step3Desc1[language]} <span className="font-bold text-teal-400">APE</span>.
            </p>
            <div className="space-y-3 text-left bg-slate-900 p-4 rounded-md">
                <p><strong className="text-teal-400">A</strong>ction: {uiText.apeA[language]}</p>
                <p><strong className="text-teal-400">P</strong>urpose: {uiText.apeP[language]}</p>
                <p><strong className="text-teal-400">E</strong>xpectation: {uiText.apeE[language]}</p>
            </div>
          </>
        );
      case 4:
        const generatedPrompt = `Action: ${userInput.action || '...'}\nPurpose: ${userInput.purpose || '...'}\nExpectation: ${userInput.expectation || '...'}`;
        return (
          <>
            <h2 className="text-2xl font-bold text-white mb-4">{uiText.step4Title[language]}</h2>
            <p className="text-slate-300 mb-4">{uiText.step4Desc1[language]}</p>
            <div className="space-y-4 text-left">
                <div>
                    <label className="font-semibold text-teal-400 text-sm">Action</label>
                    <input type="text" name="action" value={userInput.action} onChange={handleInputChange} placeholder={uiText.actionPlaceholder[language]} className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 mt-1 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"/>
                </div>
                 <div>
                    <label className="font-semibold text-teal-400 text-sm">Purpose</label>
                    <input type="text" name="purpose" value={userInput.purpose} onChange={handleInputChange} placeholder={uiText.purposePlaceholder[language]} className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 mt-1 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"/>
                </div>
                 <div>
                    <label className="font-semibold text-teal-400 text-sm">Expectation</label>
                    <input type="text" name="expectation" value={userInput.expectation} onChange={handleInputChange} placeholder={uiText.expectationPlaceholder[language]} className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 mt-1 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"/>
                </div>
                <button onClick={handleGeneratePrompt} className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded-lg transition-colors w-full">
                    {uiText.generateButton[language]}
                </button>
                {showGeneratedPrompt && (
                    <div className="bg-slate-900 p-4 rounded-md mt-4 animate-fade-in">
                        <h3 className="font-semibold text-white mb-2">{uiText.yourPrompt[language]}</h3>
                        <pre className="text-slate-300 text-sm whitespace-pre-wrap font-mono"><code>{generatedPrompt}</code></pre>
                        <button onClick={() => setShowExampleResponse(true)} className="text-sm text-teal-400 hover:text-teal-300 mt-3 font-semibold">
                            {uiText.seeExample[language]}
                        </button>
                        {showExampleResponse && (
                            <div className="mt-3 border-t border-slate-700 pt-3 animate-fade-in">
                                <p className="text-xs text-slate-400 font-semibold mb-1">{uiText.aiResponseTitle[language]}</p>
                                <p className="text-sm text-slate-300">{uiText.aiResponseContent[language]}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
          </>
        );
      case 5:
        return (
          <>
            <h2 className="text-2xl font-bold text-white mb-4">{uiText.step5Title[language]}</h2>
            <p className="text-slate-300 mb-4">{uiText.step5Desc1[language]}</p>
            <p className="text-slate-300">{uiText.step5Desc2[language]}</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 rounded-lg shadow-2xl p-8 max-w-2xl w-full ring-1 ring-slate-700 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
          aria-label="Close tutorial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="min-h-[300px] md:min-h-[350px]">
         {renderContent()}
        </div>

        <div className="flex justify-between items-center mt-6">
          <span className="text-sm text-slate-400">{uiText.stepCounter[language].replace('{step}', step.toString()).replace('{totalSteps}', totalSteps.toString())}</span>
          <div className="flex gap-3">
            {step > 1 && (
              <button onClick={prevStep} className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                {uiText.previous[language]}
              </button>
            )}
            {step < totalSteps && (
              <button onClick={nextStep} className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                {uiText.next[language]}
              </button>
            )}
             {step === totalSteps && (
              <button onClick={onClose} className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                {uiText.finish[language]}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
