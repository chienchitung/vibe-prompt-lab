
import { DecisionGuideItem } from '../types';

export const decisionGuideData: DecisionGuideItem[] = [
  {
    useCase: { zh: '需要創意點子或多種選項？', en: 'Need creative ideas or multiple options?' },
    frameworkIds: ['crispe', 'scamper', 'create'],
  },
  {
    useCase: { zh: '正在制定策略計劃或複雜專案？', en: 'Working on a strategic plan or complex project?' },
    frameworkIds: ['coast', 'pivo', 'swot', 'ooda'],
  },
  {
    useCase: { zh: '正在創作教育內容？', en: 'Creating educational content?' },
    frameworkIds: ['seed', 'blooms-taxonomy', 'orid'],
  },
  {
    useCase: { zh: '需要專家視角或角色扮演？', en: 'Need expert perspective or role-playing?' },
    frameworkIds: ['race', 'rtf', 'relic', 'crit'],
  },
  {
    useCase: { zh: '想要簡單、直接的結果？', en: 'Want simple, straightforward results?' },
    frameworkIds: ['tag', 'ape', 'ace', 'clear'],
  },
  {
    useCase: { zh: '正在創作有說服力的內容？', en: 'Creating persuasive content?' },
    frameworkIds: ['bab', 'aida', '4-u'],
  },
  {
    useCase: { zh: '需要有清晰步驟的結構化流程？', en: 'Need a structured process with clear steps?' },
    frameworkIds: ['rise', 'cot', 'prompt-chaining', 'rhodes'],
  },
  {
    useCase: { zh: '正在解決特定問題？', en: 'Trying to solve a specific problem?' },
    frameworkIds: ['5w1h', 'soar', 'tot'],
  },
];
