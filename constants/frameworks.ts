import { Framework } from '../types';

export const frameworksData: Framework[] = [
  // 基礎結構框架 (Basic Structure Frameworks)
  {
    id: 'ape',
    name: { zh: 'APE 框架', en: 'APE Framework' },
    category: { zh: '基礎結構框架', en: 'Basic Structure Frameworks' },
    components: {
      zh: ['Action (行動)', 'Purpose (目的)', 'Expectation (期望)'],
      en: ['Action', 'Purpose', 'Expectation'],
    },
    description: {
      zh: '明確指定AI需要執行的具體動作、說明任務目的與背景脈絡，並定義預期的輸出格式、長度和品質標準。',
      en: 'Clearly specify the concrete action for the AI to perform, explain the purpose and context of the task, and define the expected output format, length, and quality standards.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Action: 撰寫一篇產品介紹文章
Purpose: 為新推出的智慧手錶建立品牌認知和購買興趣
Expectation: 500字，包含3個核心功能特色，語調專業且吸引人`,
        en: `Action: Write a product introduction article
Purpose: To build brand awareness and purchase interest for a newly launched smartwatch
Expectation: 500 words, including 3 core features, with a professional and engaging tone`,
      },
    },
  },
  {
    id: 'tag',
    name: { zh: 'TAG 框架', en: 'TAG Framework' },
    category: { zh: '基礎結構框架', en: 'Basic Structure Frameworks' },
    components: {
      zh: ['Task (任務)', 'Action (行動)', 'Goal (目標)'],
      en: ['Task', 'Action', 'Goal'],
    },
    description: {
      zh: '清楚定義要完成的工作、指定執行步驟或方法，並明確最終要達成的結果。',
      en: 'Clearly define the work to be completed, specify the steps or methods for execution, and state the final result to be achieved.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Task: 分析競爭對手的社群媒體策略
Action: 比較前三大競爭者的發文頻率、內容類型和互動率
Goal: 提供我們社群策略優化的具體建議`,
        en: `Task: Analyze competitors' social media strategies
Action: Compare the posting frequency, content types, and engagement rates of the top three competitors
Goal: Provide concrete recommendations for optimizing our social media strategy`,
      },
    },
  },
  {
    id: 'ace',
    name: { zh: 'ACE 框架', en: 'ACE Framework' },
    category: { zh: '基礎結構框架', en: 'Basic Structure Frameworks' },
    components: {
      zh: ['Audience (受眾)', 'Context (情境)', 'Execution (執行)'],
      en: ['Audience', 'Context', 'Execution'],
    },
    description: {
      zh: '定義目標對象的特徵和需求、提供品牌調性、目的、靈感來源，並要求AI結構化、精煉生成內容。',
      en: 'Define the characteristics and needs of the target audience, provide brand tone, purpose, and inspiration sources, and request the AI to generate structured and refined content.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Audience: 關注健康生活的30-45歲職業女性
Context: 推廣有機護膚品牌，強調天然成分和環保包裝
Execution: 創作3個Instagram貼文概念，包含圖片建議和hashtag`,
        en: `Audience: 30-45 year old professional women focused on healthy living
Context: Promoting an organic skincare brand, emphasizing natural ingredients and eco-friendly packaging
Execution: Create 3 Instagram post concepts, including image suggestions and hashtags`,
      },
    },
  },
  {
    id: 'aim',
    name: { zh: 'AIM 框架', en: 'AIM Framework' },
    category: { zh: '基礎結構框架', en: 'Basic Structure Frameworks' },
    components: {
      zh: ['Audience (受眾)', 'Input (輸入)', 'Method (方法)'],
      en: ['Audience', 'Input', 'Method'],
    },
    description: {
      zh: '定義目標受眾，提供AI需要處理的輸入資訊，並指定處理方法或期望的輸出形式。',
      en: 'Define the target audience, provide the input information for the AI to process, and specify the processing method or desired output format.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Audience: 初學者程式設計師
Input: 一段有 bug 的 Python 程式碼
Method: 找出程式碼中的錯誤，並提供修正後的版本及解釋`,
        en: `Audience: Beginner programmers
Input: A snippet of Python code with a bug
Method: Identify the error in the code and provide a corrected version with an explanation`,
      },
    },
  },
  {
    id: 'race',
    name: { zh: 'RACE 框架', en: 'RACE Framework' },
    category: { zh: '基礎結構框架', en: 'Basic Structure Frameworks' },
    components: {
      zh: ['Role (角色)', 'Action (行動)', 'Context (情境)', 'Expectation (期望)'],
      en: ['Role', 'Action', 'Context', 'Expectation'],
    },
    description: {
      zh: '指定AI扮演的專業角色、描述需要執行的具體任務、提供相關背景資訊和限制條件，並定義輸出的格式和品質要求。',
      en: 'Assign a professional role to the AI, describe the specific task to be performed, provide relevant background information and constraints, and define the output format and quality requirements.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Role: 資深數位行銷顧問
Action: 制定Q4季度的社群媒體行銷計畫
Context: 目標客群是25-40歲上班族，預算50萬台幣，主打環保理念
Expectation: 包含平台選擇、內容策略、預算分配的完整企劃書`,
        en: `Role: Senior Digital Marketing Consultant
Action: Develop a social media marketing plan for the Q4 quarter
Context: The target audience is 25-40 year old office workers, with a budget of 500,000 TWD, focusing on an eco-friendly concept
Expectation: A complete proposal including platform selection, content strategy, and budget allocation`,
      },
    },
  },
  {
    id: 'care',
    name: { zh: 'CARE 框架', en: 'CARE Framework' },
    category: { zh: '基礎結構框架', en: 'Basic Structure Frameworks' },
    components: {
      zh: ['Context (情境)', 'Audience (受眾)', 'Requirements (要求)', 'Expectations (期望)'],
      en: ['Context', 'Audience', 'Requirements', 'Expectations'],
    },
    description: {
      zh: '提供溝通的背景和重要性、明確溝通對象的特徵和需求、列出溝通的具體目標和期望，並定義成功溝通的標準。',
      en: 'Provide the background and importance of the communication, clarify the characteristics and needs of the audience, list the specific goals and expectations, and define the criteria for successful communication.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Context: 向投資人簡報新產品的市場潛力
Audience: 有豐富投資經驗但對技術了解有限的天使投資人
Requirements: 15分鐘簡報，需要展現市場機會和團隊能力
Expectations: 獲得種子輪投資意向，建立長期合作關係`,
        en: `Context: Presenting the market potential of a new product to investors
Audience: Angel investors with extensive investment experience but limited technical knowledge
Requirements: A 15-minute presentation that showcases the market opportunity and team capabilities
Expectations: Secure seed round investment interest and establish a long-term partnership`,
      },
    },
  },
  {
    id: 'guide',
    name: { zh: 'GUIDE 框架', en: 'GUIDE Framework' },
    category: { zh: '基礎結構框架', en: 'Basic Structure Frameworks' },
    components: {
      zh: ['Goal (目標)', 'User (用戶)', 'Information (資訊)', 'Delivery (傳遞)', 'Execution (執行)'],
      en: ['Goal', 'User', 'Information', 'Delivery', 'Execution'],
    },
    description: {
      zh: '設定對話或學習的最終目標、了解參與者的背景和需求、提供必要的背景知識、選擇最適合的溝通方式，並實施與調整溝通策略。',
      en: 'Set the final goal for the conversation or learning, understand the participants\' backgrounds and needs, provide necessary background knowledge, choose the most suitable communication method, and implement and adjust the communication strategy.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Goal: 教導新進員工使用公司的CRM系統
User: 剛畢業的行銷助理，對軟體操作較不熟悉
Information: CRM功能介紹、常用操作流程、注意事項
Delivery: 一對一實作教學配合圖文說明手冊
Execution: 分階段學習，每週檢核學習進度`,
        en: `Goal: Teach new employees how to use the company's CRM system
User: A recently graduated marketing assistant, unfamiliar with the software
Information: CRM feature introduction, common operating procedures, important notes
Delivery: One-on-one hands-on training combined with a graphic manual
Execution: Phased learning, with weekly progress checks`,
      },
    },
  },
  {
    id: 'idea',
    name: { zh: 'IDEA 框架', en: 'IDEA Framework' },
    category: { zh: '基礎結構框架', en: 'Basic Structure Frameworks' },
    components: {
      zh: ['Identify (識別)', 'Define (定義)', 'Explore (探索)', 'Action (行動)'],
      en: ['Identify', 'Define', 'Explore', 'Action'],
    },
    description: {
      zh: '明確指出需要改進或創造的問題、補充相關背景資訊和限制條件、請求多元化的創意解決方案，並選擇最佳方案制定實施計畫。',
      en: 'Clearly identify the problem needing improvement or creation, add relevant background information and constraints, request diverse creative solutions, and select the best option to create an implementation plan.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Identify: 員工工作效率低落，會議過多影響專注力
Define: 50人規模新創公司，每天平均3-4個會議，專案進度延遲
Explore: 提供減少會議、提升效率的創新管理方法
Act: 選出最適合的3個解決方案並提供實施時程`,
        en: `Identify: Low employee productivity, too many meetings affecting focus
Define: A 50-person startup with an average of 3-4 meetings per day, causing project delays
Explore: Provide innovative management methods to reduce meetings and increase efficiency
Act: Select the 3 most suitable solutions and provide an implementation timeline`,
      },
    },
  },
  {
    id: 'rise',
    name: { zh: 'RISE 框架', en: 'RISE Framework' },
    category: { zh: '基礎結構框架', en: 'Basic Structure Frameworks' },
    components: {
      zh: ['Request (請求)', 'Input (輸入)', 'Scenario (情境)', 'Expectations (期望)'],
      en: ['Request', 'Input', 'Scenario', 'Expectations'],
    },
    description: {
      zh: '提出明確請求，提供輸入資料，描述應用情境，並設定期望的輸出標準。',
      en: 'Make a clear request, provide input data, describe the application scenario, and set the desired output standards.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Request: 為我們的 app 寫一封新功能發布的電子郵件
Input: 新功能是「深色模式」和「離線存取」
Scenario: 郵件將發送給所有現有用戶
Expectations: 語氣興奮且資訊豐富，包含一個明確的行動呼籲`,
        en: `Request: Write a new feature announcement email for our app
Input: The new features are "Dark Mode" and "Offline Access"
Scenario: The email will be sent to all existing users
Expectations: An excited and informative tone, including a clear call to action`,
      },
    },
  },
  {
    id: 'coast',
    name: { zh: 'COAST 框架', en: 'COAST Framework' },
    category: { zh: '基礎結構框架', en: 'Basic Structure Frameworks' },
    components: {
      zh: ['Context (情境)', 'Objective (目標)', 'Audience (受眾)', 'Style (風格)', 'Tone (語調)'],
      en: ['Context', 'Objective', 'Audience', 'Style', 'Tone'],
    },
    description: {
      zh: '提供背景情境、明確目標、定義受眾，並指定寫作的風格與語調。',
      en: 'Provide background context, a clear objective, define the audience, and specify the writing style and tone.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Context: 一位長期客戶投訴了我們的服務
Objective: 撰寫一封道歉並提供解決方案的安撫郵件
Audience: 這位感到不滿的客戶
Style: 專業且有同理心
Tone: 誠懇、願意解決問題`,
        en: `Context: A long-term customer has complained about our service
Objective: Write an apology email that also offers a solution to pacify them
Audience: The dissatisfied customer
Style: Professional and empathetic
Tone: Sincere, willing to solve the problem`,
      },
    },
  },
  {
    id: 'focus',
    name: { zh: 'FOCUS 框架', en: 'FOCUS Framework' },
    category: { zh: '基礎結構框架', en: 'Basic Structure Frameworks' },
    components: {
      zh: ['Function (功能)', 'Outcome (結果)', 'Context (情境)', 'Usage (使用)', 'Specifications (規格)'],
      en: ['Function', 'Outcome', 'Context', 'Usage', 'Specifications'],
    },
    description: {
      zh: '描述所需功能、期望的產出結果、使用情境、具體用途和技術規格。',
      en: 'Describe the required function, the desired outcome, the context of use, specific usage, and technical specifications.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Function: 產生一個 Python 函數
Outcome: 該函數能計算兩個日期之間的天數
Context: 用於一個專案管理工具
Usage: 輸入兩個字串格式的日期
Specifications: 函數名為 'days_between'，能處理 'YYYY-MM-DD' 格式`,
        en: `Function: Generate a Python function
Outcome: The function should calculate the number of days between two dates
Context: For use in a project management tool
Usage: Takes two dates in string format as input
Specifications: The function name is 'days_between' and it must handle 'YYYY-MM-DD' format`,
      },
    },
  },
  {
    id: 'rice',
    name: { zh: 'RICE 框架', en: 'RICE Framework' },
    category: { zh: '基礎結構框架', en: 'Basic Structure Frameworks' },
    components: {
      zh: ['Role (角色)', 'Instructions (指令)', 'Context/Constraints (情境/限制)', 'Example (範例)'],
      en: ['Role', 'Instructions', 'Context/Constraints', 'Example'],
    },
    description: {
      zh: '設定角色、給予指令、提供情境與限制，並用範例來指導 AI。',
      en: 'Set a role, give instructions, provide context and constraints, and use an example to guide the AI.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Role: 社交媒體經理
Instructions: 為我們的環保水瓶寫一篇 IG 貼文
Context/Constraints: 字數不超過 150 字，必須包含 3 個相關 hashtag
Example: "保持水分，愛護地球！我們的全新水瓶採用 100% 回收材料製成..."`,
        en: `Role: Social Media Manager
Instructions: Write an IG post for our eco-friendly water bottle
Context/Constraints: Max 150 words, must include 3 relevant hashtags
Example: "Stay hydrated, love the planet! Our new bottle is made from 100% recycled materials..."`,
      },
    },
  },
  {
    id: 'clear-principles',
    name: { zh: 'C.L.E.A.R. 框架', en: 'C.L.E.A.R. Framework' },
    category: { zh: '基礎結構框架', en: 'Basic Structure Frameworks' },
    components: {
      zh: ['Concise (簡潔)', 'Logical (邏輯性)', 'Explicit (明確)', 'Adaptive (適應性)', 'Reflective (反思性)'],
      en: ['Concise', 'Logical', 'Explicit', 'Adaptive', 'Reflective'],
    },
    description: {
      zh: '一個用於製作有效AI提示詞的核心原則清單：簡潔、邏輯、明確、適應性強和可反思。這個框架有助於確保您的指令清晰、結構良好，並可以迭代改進。',
      en: 'A checklist of core principles for creating effective AI prompts: Concise, Logical, Explicit, Adaptive, and Reflective. This framework helps ensure your instructions are clear, well-structured, and can be iteratively improved.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `情境 (Context): 你是一位使用 Lovable 的專業全端開發者。
任務 (Task): 使用 Supabase（電子郵件/密碼驗證）在 React 中建立一個安全的登入頁面。
指南 (Guidelines): UI 應該是極簡風格，並遵循 Tailwind CSS 的慣例。為每個步驟提供清晰的程式碼註解。
限制 (Constraints): 僅修改 LoginPage 元件；不要變更其他頁面。確保最終輸出是 Lovable 編輯器中一個可運作的頁面。`,
        en: `Context: You are a professional full-stack developer using Lovable.
Task: Create a secure login page in React using Supabase (email/password authentication).
Guidelines: The UI should be minimalist and follow Tailwind CSS conventions. Provide clear code comments for each step.
Constraints: Only modify the LoginPage component; do not alter other pages. Ensure the final output is a functional page within the Lovable editor.`,
      },
    },
  },

  // 進階推理框架 (Advanced Reasoning Frameworks)
  {
    id: 'cot',
    name: { zh: 'Chain of Thought (CoT)', en: 'Chain of Thought (CoT)' },
    category: { zh: '進階推理框架', en: 'Advanced Reasoning Frameworks' },
    components: {
      zh: ['步驟化思考', '推理過程', '驗證機制'],
      en: ['Step-by-step Thinking', 'Reasoning Process', 'Verification Mechanism'],
    },
    description: {
      zh: '將複雜問題分解為邏輯步驟，要求AI展示每一步的思考過程，並檢查邏輯的合理性和一致性。',
      en: 'Decompose a complex problem into logical steps, requiring the AI to show its thinking process for each step, and check the logic for reasonableness and consistency.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `問題: 計算投資報酬率並建議最佳投資組合
步驟1: 列出所有投資選項的歷史報酬率
步驟2: 分析各項投資的風險係數
步驟3: 根據投資者風險承受度權衡配置
步驟4: 計算預期報酬率和最大損失
步驟5: 提供具體的投資建議和理由`,
        en: `Question: Calculate the return on investment and recommend the optimal investment portfolio
Step 1: List the historical returns for all investment options
Step 2: Analyze the risk factors for each investment
Step 3: Balance the allocation based on the investor's risk tolerance
Step 4: Calculate the expected rate of return and maximum potential loss
Step 5: Provide specific investment advice with reasoning`,
      },
    },
  },
  {
    id: 'tot',
    name: { zh: 'Tree of Thought (ToT)', en: 'Tree of Thought (ToT)' },
    category: { zh: '進階推理框架', en: 'Advanced Reasoning Frameworks' },
    components: {
      zh: ['問題核心', '多路徑展開', '優劣評估', '最終建議'],
      en: ['Problem Core', 'Multi-path Expansion', 'Pros and Cons Evaluation', 'Final Recommendation'],
    },
    description: {
      zh: '設定問題核心，引導AI展開多元路徑，分支或合併各種解法，並列出優劣，最終提出建議。',
      en: 'Set a core problem, guide the AI to explore multiple paths, branch or merge various solutions, list their pros and cons, and finally propose a recommendation.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `主題：制定品牌年度行銷策略
分支一：加強原有社群經營
分支二：主打數位廣告投放
分支三：建立KOL合作計畫
各分支詳細列出目標、預算、預期成效`,
        en: `Topic: Develop an annual brand marketing strategy
Branch 1: Strengthen existing social media management
Branch 2: Focus on digital advertising campaigns
Branch 3: Establish a KOL collaboration program
Detail the goals, budget, and expected outcomes for each branch`,
      },
    },
  },
  {
    id: 'react',
    name: { zh: 'ReAct 框架', en: 'ReAct Framework' },
    category: { zh: '進階推理框架', en: 'Advanced Reasoning Frameworks' },
    components: {
      zh: ['Reasoning (推理)', 'Acting (行動)'],
      en: ['Reasoning', 'Acting'],
    },
    description: {
      zh: '要求AI先敘述分析過程或邏輯思考，然後依分析結果決定執行步驟，並標示行動。適用於複雜任務或多回合互動。',
      en: 'Requires the AI to first describe its analysis process or logical thinking, then decide on execution steps based on the analysis, and label the actions. Suitable for complex tasks or multi-turn interactions.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Reasoning: 根據客戶反饋，假設退貨流程過長
Acting: 立即簡化申請表格、改善物流通知`,
        en: `Reasoning: Based on customer feedback, I hypothesize the return process is too long
Acting: Immediately simplify the application form, improve logistics notifications`,
      },
    },
  },
  {
    id: 'cod',
    name: { zh: 'Chain of Density (CoD)', en: 'Chain of Density (CoD)' },
    category: { zh: '進階推理框架', en: 'Advanced Reasoning Frameworks' },
    components: {
      zh: ['逐步強化', '增加細節', '提升密度'],
      en: ['Progressive Enhancement', 'Add Detail', 'Increase Density'],
    },
    description: {
      zh: '每次回覆要求AI增加細節、精確或豐富新元素，使資訊密度提升。',
      en: 'With each response, request the AI to add details, precision, or new elements to increase information density.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `第一輪: 請寫一份新品上市推廣概述
第二輪: 請在前述基礎上加入社群聲量分析與客群特徵
第三輪: 增加前兩輪回應的圖表和成功案例`,
        en: `Round 1: Please write an overview for a new product launch promotion
Round 2: Based on the above, add social media sentiment analysis and customer segment characteristics
Round 3: Add charts and success stories to the responses from the first two rounds`,
      },
    },
  },
  {
    id: 'risen',
    name: { zh: 'RISEN 框架', en: 'RISEN Framework' },
    category: { zh: '進階推理框架', en: 'Advanced Reasoning Frameworks' },
    components: {
      zh: ['Role (角色)', 'Input (輸入)', 'Steps (步驟)', 'Expectation (期望)', 'Narrowing (範圍縮小)'],
      en: ['Role', 'Input', 'Steps', 'Expectation', 'Narrowing'],
    },
    description: {
      zh: '設定角色、提供輸入、要求分步執行、定義期望，並逐步縮小範圍以獲得更精確的結果。',
      en: 'Set a role, provide input, require step-by-step execution, define expectations, and progressively narrow the scope to obtain a more precise result.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Role: 旅遊規劃師
Input: 我有 7 天時間，預算 5 萬台幣，想去日本
Steps: 請先建議三個城市，然後為我選擇的城市規劃每日行程
Expectation: 行程包含交通、住宿建議和景點
Narrowing: 我對歷史古蹟比購物更有興趣`,
        en: `Role: Travel Planner
Input: I have 7 days and a budget of 50,000 TWD, and I want to go to Japan
Steps: First, suggest three cities, then plan a daily itinerary for the city I choose
Expectation: The itinerary should include transportation, accommodation suggestions, and attractions
Narrowing: I'm more interested in historical sites than shopping`,
      },
    },
  },
  {
    id: 'self-consistency',
    name: { zh: 'Self-Consistency', en: 'Self-Consistency' },
    category: { zh: '進階推理框架', en: 'Advanced Reasoning Frameworks' },
    components: {
      zh: ['多次生成', '多樣化路徑', '多數決'],
      en: ['Multiple Generations', 'Diverse Paths', 'Majority Vote'],
    },
    description: {
      zh: '一種增強推理準確性的技術，通過多次生成不同的推理路徑，然後選擇最一致或最常出現的答案。',
      en: 'A technique to enhance reasoning accuracy by generating multiple different reasoning paths and then selecting the most consistent or frequently occurring answer.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `問題：如果 5 台機器 5 分鐘可以生產 5 個零件，那麼 100 台機器生產 100 個零件需要多少時間？
(AI 內部多次生成)
路徑1: 1台機器5分鐘1個零件 -> 100台機器5分鐘100個零件。答案：5分鐘
路徑2: 生產率是每台機器每分鐘 0.2 個零件 -> 100台機器生產100個零件需要 100 / (100 * 0.2) = 5 分鐘。答案：5分鐘
路徑3: 每台機器生產1個零件需要5分鐘 -> 100台機器同時生產100個零件需要5分鐘。答案：5分鐘
最終答案: 5 分鐘`,
        en: `Question: If 5 machines can make 5 widgets in 5 minutes, how long would it take 100 machines to make 100 widgets?
(AI generates multiple paths internally)
Path 1: 1 machine makes 1 widget in 5 minutes -> 100 machines make 100 widgets in 5 minutes. Answer: 5 minutes.
Path 2: The rate is 0.2 widgets per machine per minute -> To make 100 widgets with 100 machines, it takes 100 / (100 * 0.2) = 5 minutes. Answer: 5 minutes.
Path 3: Each machine takes 5 minutes to make 1 widget -> 100 machines making 100 widgets simultaneously takes 5 minutes. Answer: 5 minutes.
Final Answer: 5 minutes`,
      },
    },
  },

  // 商業應用框架 (Business Application Frameworks)
  {
    id: 'step',
    name: { zh: 'STEP 框架', en: 'STEP Framework' },
    category: { zh: '商業應用框架', en: 'Business Application Frameworks' },
    components: {
      zh: ['State (目標)', 'Tailor (定制)', 'Evaluate (評估)', 'Plan (計劃)'],
      en: ['State', 'Tailor', 'Evaluate', 'Plan'],
    },
    description: {
      zh: '明確要達成的商業目標、提供品牌聲音、風格等細節要求、分析當前趨勢、選項或競爭環境，並制定具體的下一步行動方案。',
      en: 'Clarify the business goals to be achieved, provide detailed requirements such as brand voice and style, analyze current trends, options, or competitive environments, and formulate a concrete plan for the next steps.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `State: 提升品牌在年輕族群中的知名度和好感度
Tailor: 品牌調性年輕活潑，重視創新和社會責任
Evaluate: 分析Z世代消費行為和偏好的社群平台
Plan: 提供6個月的品牌年輕化行銷roadmap`,
        en: `State: Increase brand awareness and favorability among the younger demographic
Tailor: The brand tone is youthful and lively, emphasizing innovation and social responsibility
Evaluate: Analyze Gen Z consumer behavior and preferred social media platforms
Plan: Provide a 6-month marketing roadmap for brand rejuvenation`,
      },
    },
  },
  {
    id: 'mark',
    name: { zh: 'MARK 框架', en: 'MARK Framework' },
    category: { zh: '商業應用框架', en: 'Business Application Frameworks' },
    components: {
      zh: ['Market (市場)', 'Audience (受眾)', 'Research (研究)', 'Key Actions (關鍵行動)'],
      en: ['Market', 'Audience', 'Research', 'Key Actions'],
    },
    description: {
      zh: '定義目標行業或市場範圍、指定目標客群及其痛點需求、請求相關趨勢與數據分析，並生成可執行的行銷步驟。',
      en: 'Define the target industry or market scope, specify the target audience and their pain points/needs, request analysis of relevant trends and data, and generate actionable marketing steps.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Market: 台灣電動機車市場
Audience: 25-35歲環保意識強的都市通勤族
Research: 分析電動機車普及率和政府補助政策影響
Key Actions: 提供進入市場的行銷策略和通路規劃`,
        en: `Market: The electric scooter market in Taiwan
Audience: 25-35 year old urban commuters with strong environmental awareness
Research: Analyze the penetration rate of electric scooters and the impact of government subsidy policies
Key Actions: Provide a go-to-market strategy and channel plan`,
      },
    },
  },
  {
    id: 'swot',
    name: { zh: 'SWOT 框架', en: 'SWOT Framework' },
    category: { zh: '商業應用框架', en: 'Business Application Frameworks' },
    components: {
      zh: ['Strengths (優勢)', 'Weaknesses (劣勢)', 'Opportunities (機會)', 'Threats (威脅)'],
      en: ['Strengths', 'Weaknesses', 'Opportunities', 'Threats'],
    },
    description: {
      zh: '用於策略分析，評估一個組織或專案的內部優劣勢和外部機會與威脅。',
      en: 'Used for strategic analysis to evaluate the internal strengths and weaknesses, and external opportunities and threats of an organization or project.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `分析主題: 傳統書店轉型線上書店的策略規劃
Strengths: 30年經營經驗、忠實客戶群、精選書籍品味
Weaknesses: 數位化能力不足、物流系統待建立
Opportunities: 疫情促進線上購書習慣、政府扶植文創產業
Threats: 大型電商平台競爭、實體店面租金壓力`,
        en: `Analysis Topic: Strategic planning for a traditional bookstore's transition to an online store
Strengths: 30 years of business experience, loyal customer base, curated book selection
Weaknesses: Lack of digital capabilities, logistics system needs to be established
Opportunities: The pandemic has boosted online book-buying habits, government support for cultural and creative industries
Threats: Competition from large e-commerce platforms, pressure from physical store rent`,
      },
    },
  },
  {
    id: '3cs',
    name: { zh: '3Cs 框架', en: '3Cs Framework' },
    category: { zh: '商業應用框架', en: 'Business Application Frameworks' },
    components: {
      zh: ['Company (公司自身)', 'Customer (客戶需求)', 'Competitor (競爭者)'],
      en: ['Company', 'Customer', 'Competitor'],
    },
    description: {
      zh: '用於快速分析競爭環境，從公司、客戶、競爭者三個維度進行評估。',
      en: 'Used for a quick analysis of the competitive environment, evaluating from the three dimensions of Company, Customer, and Competitor.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Company: 高品質訂製家具
Customer: 中高收入家庭
Competitor: 大型連鎖家具量販及地方工作室`,
        en: `Company: High-quality custom furniture
Customer: Middle to high-income families
Competitor: Large chain furniture retailers and local workshops`,
      },
    },
  },
  {
    id: '4s',
    name: { zh: '4S 框架', en: '4S Framework' },
    category: { zh: '商業應用框架', en: 'Business Application Frameworks' },
    components: {
      zh: ['Structure (結構)', 'Style (風格)', 'Substance (主題)', 'Speed (速度)'],
      en: ['Structure', 'Style', 'Substance', 'Speed'],
    },
    description: {
      zh: '用於內容創作的結構化框架，確保內容在結構、風格、主題和交付速度上都符合要求。',
      en: 'A structured framework for content creation, ensuring that the content meets requirements in terms of structure, style, substance, and speed of delivery.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Structure: 部落格長篇+精選短文
Style: 清新明亮、圖像導向
Substance: 提升閱讀的愉快感受
Speed: 每週發佈新內容`,
        en: `Structure: Long-form blog post + short-form excerpts
Style: Fresh, bright, and image-oriented
Substance: Enhance the pleasure of reading
Speed: Publish new content weekly`,
      },
    },
  },
  {
    id: 'canvas',
    name: { zh: 'CANVAS 框架', en: 'CANVAS Framework' },
    category: { zh: '商業應用框架', en: 'Business Application Frameworks' },
    components: {
      zh: ['Customer Segments', 'Value Proposition', 'Channels', 'Customer Relationships', 'Revenue Streams', 'Key Resources', 'Key Activities', 'Key Partnerships', 'Cost Structure'],
      en: ['Customer Segments', 'Value Proposition', 'Channels', 'Customer Relationships', 'Revenue Streams', 'Key Resources', 'Key Activities', 'Key Partnerships', 'Cost Structure'],
    },
    description: {
      zh: '用於商業模式設計的全面框架，幫助創業者和企業家系統性地思考和規劃其商業模式。',
      en: 'A comprehensive framework for business model design, helping entrepreneurs and business owners to systematically think about and plan their business model.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Customer Segments: 媽媽族群與學童家庭
Value Proposition: 健康不加糖飲品，養身又美味
Channels: 超市、網路商城、實體門市
Customer Relationships: 組LINE社群，每月新品推播
Revenue Streams: 線上訂閱制、單瓶銷售
Key Resources: 在地農產、專利製程
Key Activities: 供應鏈管理、健康推廣活動
Key Partnerships: 合作農場、物流專家
Cost Structure: 原料、行銷與運輸成本`,
        en: `Customer Segments: Mothers and families with school-aged children
Value Proposition: Healthy, no-sugar-added drinks that are both nutritious and delicious
Channels: Supermarkets, online stores, physical retail outlets
Customer Relationships: LINE community group with monthly new product pushes
Revenue Streams: Online subscription model, single bottle sales
Key Resources: Local agricultural products, patented production process
Key Activities: Supply chain management, health promotion events
Key Partnerships: Partner farms, logistics experts
Cost Structure: Raw materials, marketing, and transportation costs`,
      },
    },
  },
  {
    id: 'ooda',
    name: { zh: 'OODA 框架', en: 'OODA Framework' },
    category: { zh: '商業應用框架', en: 'Business Application Frameworks' },
    components: {
      zh: ['Observe (觀察)', 'Orient (判斷)', 'Decide (決策)', 'Act (行動)'],
      en: ['Observe', 'Orient', 'Decide', 'Act'],
    },
    description: {
      zh: '一個用於策略思考和快速決策的循環框架，特別適用於動態和競爭激烈的環境。',
      en: 'A cyclical framework for strategic thinking and rapid decision-making, especially suitable for dynamic and highly competitive environments.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Observe: 競爭者新產品上市且受好評
Orient: 我方產品技術較進階但品牌知名度弱
Decide: 優先投放KOL評測強化信任
Act: 本週啟動媒體公關配合促銷方案`,
        en: `Observe: A competitor has launched a new product that is well-received
Orient: Our product's technology is more advanced, but our brand awareness is weaker
Decide: Prioritize KOL reviews to build trust
Act: Launch a media PR campaign this week along with a promotional offer`,
      },
    },
  },
  {
    id: 'broke',
    name: { zh: 'BROKE 框架', en: 'BROKE Framework' },
    category: { zh: '商業應用框架', en: 'Business Application Frameworks' },
    components: {
      zh: ['Background (背景)', 'Role (角色)', 'Objectives (目標)', 'Key Results (關鍵結果)', 'Evolve (演化)'],
      en: ['Background', 'Role', 'Objectives', 'Key Results', 'Evolve'],
    },
    description: {
      zh: '描述當前情況和歷史脈絡、明確負責任務的角色和職責、設定清楚的短期和長期目標、定義可測量的成功指標，並建立持續改進和調整機制。',
      en: 'Describe the current situation and historical context, clarify the roles and responsibilities for the tasks, set clear short-term and long-term goals, define measurable success metrics, and establish a mechanism for continuous improvement and adjustment.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Background: 公司社群媒體互動率持續下滑3個月
Role: 社群媒體經理，負責內容策略和粉絲經營
Objectives: 6個月内互動率提升100%，粉絲數增加50%
Key Results: 每篇貼文平均按讚數500+，分享數100+
Evolve: 每月檢討數據，調整內容策略和發文時機`,
        en: `Background: The company's social media engagement rate has been declining for 3 consecutive months
Role: Social Media Manager, responsible for content strategy and community management
Objectives: Increase engagement rate by 100% and follower count by 50% within 6 months
Key Results: Average likes per post 500+, shares 100+
Evolve: Review data monthly, adjust content strategy and posting times`,
      },
    },
  },
  {
    id: 'scope',
    name: { zh: 'SCOPE 框架', en: 'SCOPE Framework' },
    category: { zh: '商業應用框架', en: 'Business Application Frameworks' },
    components: {
      zh: ['Situation (情況)', 'Constraints (限制)', 'Objectives (目標)', 'Perspectives (觀點)', 'Evaluation (評估)'],
      en: ['Situation', 'Constraints', 'Objectives', 'Perspectives', 'Evaluation'],
    },
    description: {
      zh: '描述當前狀況和問題背景、明確時間、預算、資源限制、設定明確的專案目標、考慮各方利害關係人的需求，並建立專案成功的評估標準。',
      en: 'Describe the current situation and problem background, clarify time, budget, and resource constraints, set clear project objectives, consider the needs of all stakeholders, and establish evaluation criteria for project success.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Situation: 公司官網轉換率偏低，需要重新設計
Constraints: 3個月完成，預算100萬，不能中斷營運
Objectives: 轉換率提升50%，使用者體驗分數達8分以上
Perspectives: 行銷團隊要求美觀、技術團隊重視效能、客戶要求易用
Evaluation: A/B測試比較、使用者訪談、數據分析`,
        en: `Situation: The company website has a low conversion rate and needs a redesign
Constraints: 3-month timeline, 1 million budget, must not interrupt operations
Objectives: Increase conversion rate by 50%, achieve a user experience score of 8 or higher
Perspectives: Marketing team requires aesthetics, engineering team values performance, customers demand ease of use
Evaluation: A/B testing comparison, user interviews, data analysis`,
      },
    },
  },
  {
    id: 'crit',
    name: { zh: 'CRIT 框架', en: 'CRIT Framework' },
    category: { zh: '商業應用框架', en: 'Business Application Frameworks' },
    components: {
      zh: ['Context (情境)', 'Role (角色)', 'Interview (訪談)', 'Task (任務)'],
      en: ['Context', 'Role', 'Interview', 'Task'],
    },
    description: {
      zh: '由暢銷書《The AI-Driven Leader》的作者 Geoff Woods 開發，旨在幫助高階主管從 AI 工具中獲得更多策略價值。CRIT 透過引導領導者完成四個步驟：提供深入的背景資訊（Context）、分配視角或專業知識（Role）、讓 AI 透過提問進行訪談（Interview），然後定義所需的輸出（Task），從而將 AI 轉變為真正的思考夥伴。',
      en: 'Developed by Geoff Woods, best-selling author of "The AI-Driven Leader," to help executives get more strategic value from AI tools. CRIT turns AI into a true thought partner by guiding leaders through four steps: providing deep background information (Context), assigning a perspective or expertise (Role), allowing the AI to interview them with clarifying questions (Interview), and then defining the desired output (Task).',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Context: 我們是一家SaaS新創公司，即將向董事會展示我們未來一年的產品路線圖。這份簡報長達60頁，涵蓋了市場分析、新功能開發和預算規劃。我們的目標是獲得董事會對此路線圖的批准。
Role: 請扮演一位經驗豐富、注重財務回報的董事會成員。
Interview: 在提供您的回饋之前，請向我提問，以確保您完全理解我們的策略和假設。您可以詢問有關競爭、市場風險或資源分配的問題。
Task: 在您完成提問並收到我的回答後，請根據您的角色，指出這份簡報中最可能引起爭議或質疑的三個部分，並解釋原因。`,
        en: `Context: We are a SaaS startup about to present our product roadmap for the next year to the board. The presentation is 60 pages long, covering market analysis, new feature development, and budget planning. Our goal is to get the board's approval for this roadmap.
Role: Act as an experienced board member who is focused on financial returns.
Interview: Before providing your feedback, ask me questions to ensure you fully understand our strategy and assumptions. You can ask about competition, market risks, or resource allocation.
Task: After you've finished asking questions and received my answers, based on your role, identify the three parts of this presentation that are most likely to cause controversy or be questioned, and explain why.`,
      },
    },
  },

  // 創意思考框架 (Creative Thinking Frameworks)
  {
    id: 'roses',
    name: { zh: 'ROSES 框架', en: 'ROSES Framework' },
    category: { zh: '創意思考框架', en: 'Creative Thinking Frameworks' },
    components: {
      zh: ['Role (角色)', 'Objective (目標)', 'Style (風格)', 'Example (範例)', 'Scenario (情境)'],
      en: ['Role', 'Objective', 'Style', 'Example', 'Scenario'],
    },
    description: {
      zh: '指定創作者的身份和專業背景、明確創作的目的和預期效果、定義語調、風格和表達方式、提供參考案例或期望的風格示範，並描述使用場景和應用環境。',
      en: 'Specify the creator\'s identity and professional background, clarify the purpose and expected effect of the creation, define the tone, style, and mode of expression, provide reference cases or desired style demonstrations, and describe the usage scenario and application environment.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Role: 創意文案總監
Objective: 為咖啡店開幕活動創作宣傳標語
Style: 溫馨、親切、帶有文青氣息
Example: 參考藍瓶咖啡的文案風格
Scenario: 用於店面招牌、傳單和社群媒體推廣`,
        en: `Role: Creative Copywriting Director
Objective: Create a promotional slogan for a coffee shop's grand opening
Style: Warm, friendly, with an artistic and cultured vibe
Example: Refer to the copy style of Blue Bottle Coffee
Scenario: To be used on storefront signs, flyers, and social media promotions`,
      },
    },
  },
  {
    id: 'crispe',
    name: { zh: 'CRISPE 框架', en: 'CRISPE Framework' },
    category: { zh: '創意思考框架', en: 'Creative Thinking Frameworks' },
    components: {
      zh: ['Capacity and Role (能力與角色)', 'Insight (洞察)', 'Statement (陳述)', 'Personality (個性)', 'Experiment (實驗)'],
      en: ['Capacity and Role', 'Insight', 'Statement', 'Personality', 'Experiment'],
    },
    description: {
      zh: '定義AI的專業身份和能力、提供相關的背景知識和見解、明確任務要求和目標、設定回應的語調和個性特徵，並鼓勵創新思維和多元解決方案。',
      en: 'Define the AI\'s professional identity and capabilities, provide relevant background knowledge and insights, clarify task requirements and objectives, set the tone and personality characteristics for the response, and encourage innovative thinking and diverse solutions.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Capacity: 經驗豐富的品牌策略師
Insight: 台灣手搖飲市場競爭激烈，消費者重視健康和創新
Statement: 為新茶飲品牌設計差異化定位策略
Personality: 專業但不失親和力，善於用生動比喻說明概念
Experiment: 提供3種不同的品牌定位方向供選擇`,
        en: `Capacity: Experienced Brand Strategist
Insight: The Taiwanese bubble tea market is highly competitive; consumers value health and innovation
Statement: Design a differentiation and positioning strategy for a new tea beverage brand
Personality: Professional yet approachable, adept at using vivid analogies to explain concepts
Experiment: Provide 3 different brand positioning directions to choose from`,
      },
    },
  },
  {
    id: 'scamper',
    name: { zh: 'SCAMPER 框架', en: 'SCAMPER Framework' },
    category: { zh: '創意思考框架', en: 'Creative Thinking Frameworks' },
    components: {
      zh: ['Substitute (替代)', 'Combine (結合)', 'Adapt (調整)', 'Modify (修改)', 'Put to other use (轉作他用)', 'Eliminate (消除)', 'Reverse (反轉)'],
      en: ['Substitute', 'Combine', 'Adapt', 'Modify', 'Put to other use', 'Eliminate', 'Reverse'],
    },
    description: {
      zh: '一個用於創新創意思考的框架，通過七個不同的角度來檢視現有產品或問題。',
      en: 'A framework for innovative and creative thinking, examining existing products or problems from seven different angles.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `問題: 優化現有外賣餐盒設計
Substitute: 將塑膠材質換成可分解環保材料
Combine: 餐盒內含可重複使用湯匙
Adapt: 符合兒童一手可抓握的設計
Modify: 色彩更鮮明提升辨識度
Put to other use: 空盒可當收納箱
Eliminate: 拿掉多餘包裝以減廢
Reverse: 從蓋子取餐設計改成底部開合`,
        en: `Problem: Optimize the design of existing takeout food containers
Substitute: Replace plastic material with biodegradable, eco-friendly material
Combine: Include a reusable spoon inside the container
Adapt: Design it to be easily held by a child with one hand
Modify: Use more vivid colors to enhance recognition
Put to other use: The empty container can be used as a storage box
Eliminate: Remove excess packaging to reduce waste
Reverse: Change the design from opening at the top to opening at the bottom`,
      },
    },
  },

  // 教育培訓框架 (Education & Training Frameworks)
  {
    id: 'blooms-taxonomy',
    name: { zh: "布魯姆分類學 (Bloom's Taxonomy)", en: "Bloom's Taxonomy" },
    category: { zh: '教育培訓框架', en: 'Education & Training Frameworks' },
    components: {
      zh: ['Remember (記憶)', 'Understand (理解)', 'Apply (應用)', 'Analyze (分析)', 'Evaluate (評估)', 'Create (創造)'],
      en: ['Remember', 'Understand', 'Apply', 'Analyze', 'Evaluate', 'Create'],
    },
    description: {
      zh: '一個教育領域的認知層次架構，用於設計學習目標和評估學生的認知水平。',
      en: 'A cognitive hierarchy framework in the field of education, used for designing learning objectives and assessing students\' cognitive levels.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `學習目標: 精通AI應用於教育
Remember: 記住主要AI術語
Understand: 解釋AI如何判斷學生需求
Apply: 在教學現場試用AI助教
Analyze: 比較不同AI教學工具效果
Evaluate: 評價AI與傳統教學差異
Create: 設計自己的AI互動教材範本`,
        en: `Learning Objective: Master the application of AI in education
Remember: Memorize key AI terminology
Understand: Explain how AI determines student needs
Apply: Trial an AI teaching assistant in a real classroom setting
Analyze: Compare the effectiveness of different AI teaching tools
Evaluate: Assess the differences between AI-assisted and traditional teaching
Create: Design a template for your own AI-interactive teaching material`,
      },
    },
  },
  {
    id: 'orid',
    name: { zh: 'ORID 框架', en: 'ORID Framework' },
    category: { zh: '教育培訓框架', en: 'Education & Training Frameworks' },
    components: {
      zh: ['Objective (客觀)', 'Reflective (反思)', 'Interpretive (分析解釋)', 'Decisional (決策)'],
      en: ['Objective', 'Reflective', 'Interpretive', 'Decisional'],
    },
    description: {
      zh: '一個用於教學、研討和深度對話的框架，引導參與者從客觀事實到做出決策。',
      en: 'A framework for teaching, seminars, and in-depth dialogue that guides participants from objective facts to decision-making.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Objective: 數位轉型成效量測
Reflective: 員工覺得新系統有操作困難
Interpretive: 使用者介面需優化、增加培訓
Decisional: 下月啟動流程再造與教育訓練`,
        en: `Objective: Measure the effectiveness of digital transformation
Reflective: Employees feel the new system is difficult to operate
Interpretive: The user interface needs optimization and more training is required
Decisional: Initiate process re-engineering and educational training next month`,
      },
    },
  },
  {
    id: '5w1h',
    name: { zh: '5W1H 框架', en: '5W1H Framework' },
    category: { zh: '教育培訓框架', en: 'Education & Training Frameworks' },
    components: {
      zh: ['Who (誰)', 'What (什麼事)', 'When (何時)', 'Where (何地)', 'Why (為何)', 'How (如何)'],
      en: ['Who', 'What', 'When', 'Where', 'Why', 'How'],
    },
    description: {
      zh: '一個用於全方位分析問題的經典框架，通過六個基本問題來全面了解情況。',
      en: 'A classic framework for comprehensive problem analysis, using six basic questions to fully understand a situation.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `分析主題: 員工流失問題
Who: 主要離職者為30歲以下
What: 流失率過高影響團隊穩定
When: Q1出現明顯高峰
Where: 台北總部
Why: 薪資福利與學習機會不足
How: 提高培訓預算並彈性福利`,
        en: `Analysis Topic: Employee turnover problem
Who: Primarily employees under 30
What: High turnover rate is affecting team stability
When: A significant peak occurred in Q1
Where: Taipei headquarters
Why: Inadequate salary, benefits, and learning opportunities
How: Increase training budget and offer flexible benefits`,
      },
    },
  },

  // 行銷傳播框架 (Marketing & Communication Frameworks)
  {
    id: '4-u',
    name: { zh: '4-U 框架', en: '4-U Framework' },
    category: { zh: '行銷傳播框架', en: 'Marketing & Communication Frameworks' },
    components: {
      zh: ['Urgent (緊迫性)', 'Unique (獨特性)', 'Useful (實用性)', 'Ultra-Specific (超具體)'],
      en: ['Urgent', 'Unique', 'Useful', 'Ultra-Specific'],
    },
    description: {
      zh: '營造立即行動的迫切需求、強調產品或理念的差異化優勢、清楚說明如何解決客戶問題，並提供明確且精準的價值提案。',
      en: 'Create an urgent need for immediate action, emphasize the differentiated advantages of the product or idea, clearly explain how it solves customer problems, and provide a clear and precise value proposition.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `產品: 線上英語學習課程
Urgent: 限時早鳥優惠，僅剩48小時
Unique: 獨家AI口音矯正技術，個人化學習路徑
Useful: 30天內提升商務英語口說信心，通過面試
Ultra-Specific: 每天15分鐘，4週掌握200個商務句型`,
        en: `Product: Online English learning course
Urgent: Limited-time early bird offer, only 48 hours left
Unique: Exclusive AI accent correction technology, personalized learning paths
Useful: Boost your business English speaking confidence in 30 days, pass your interviews
Ultra-Specific: 15 minutes a day, master 200 business phrases in 4 weeks`,
      },
    },
  },
  {
    id: 'aida',
    name: { zh: 'AIDA 框架', en: 'AIDA Framework' },
    category: { zh: '行銷傳播框架', en: 'Marketing & Communication Frameworks' },
    components: {
      zh: ['Attention (注意)', 'Interest (興趣)', 'Desire (慾望)', 'Action (行動)'],
      en: ['Attention', 'Interest', 'Desire', 'Action'],
    },
    description: {
      zh: '經典的行銷漏斗框架，用於引導消費者從注意到購買的整個過程。',
      en: 'A classic marketing funnel framework used to guide consumers through the entire process from awareness to purchase.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `產品: 智慧空氣清淨機
Attention: 你知道室內空氣污染比戶外嚴重5倍嗎？
Interest: 全新AI智慧偵測，即時顯示30種空氣品質指標
Desire: 讓家人呼吸最純淨的空氣，守護全家健康
Action: 立即預購享7折優惠，免費到府安裝`,
        en: `Product: Smart Air Purifier
Attention: Did you know indoor air pollution can be up to 5 times worse than outdoors?
Interest: Brand new AI smart detection, displaying 30 different air quality indicators in real-time
Desire: Let your family breathe the purest air and protect their health
Action: Pre-order now for a 30% discount and free in-home installation`,
      },
    },
  },
  {
    id: 'bab',
    name: { zh: 'BAB 框架', en: 'BAB Framework' },
    category: { zh: '行銷傳播框架', en: 'Marketing & Communication Frameworks' },
    components: {
      zh: ['Before (過去)', 'After (結果)', 'Bridge (橋樑)'],
      en: ['Before', 'After', 'Bridge'],
    },
    description: {
      zh: '一個用於說服與故事敘述的框架，通過對比前後狀況來突顯解決方案的價值。',
      en: 'A framework for persuasion and storytelling that highlights the value of a solution by contrasting the before and after situations.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Before: 以前加班常常只靠外賣導致營養不均
After: 使用營養外送，每天輕鬆吃到六大類營養
Bridge: 只要在我們APP下單，飲食健康一鍵解決`,
        en: `Before: Working overtime often led to unbalanced nutrition from relying on takeout.
After: Using our nutritious meal delivery service, I easily get all six major food groups every day.
Bridge: Just place an order on our app, and healthy eating is one click away.`,
      },
    },
  },
  {
    id: 'star',
    name: { zh: 'STAR 框架', en: 'STAR Framework' },
    category: { zh: '行銷傳播框架', en: 'Marketing & Communication Frameworks' },
    components: {
      zh: ['Situation (情境)', 'Task (任務)', 'Action (行動)', 'Result (結果)'],
      en: ['Situation', 'Task', 'Action', 'Result'],
    },
    description: {
      zh: '常用於行為面試問題，描述一個情境、你面臨的任務、你採取的行動以及最終的結果。',
      en: 'Commonly used for behavioral interview questions to describe a Situation, the Task you faced, the Action you took, and the final Result.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Situation: 上一季度的網站流量下降了 15%
Task: 我的任務是找出原因並提出改善方案
Action: 我分析了網站數據，發現主要流失來自移動端用戶，所以我領導了響應式設計的優化
Result: 經過一個月的努力，移動端跳出率降低了 30%，總流量回升了 20%`,
        en: `Situation: Website traffic dropped by 15% last quarter.
Task: My task was to identify the cause and propose a solution.
Action: I analyzed site data and found the main drop-off was from mobile users, so I led an initiative to optimize the responsive design.
Result: After one month of effort, the mobile bounce rate decreased by 30%, and overall traffic increased by 20%.`,
      },
    },
  },
  {
    id: 'soar',
    name: { zh: 'SOAR 框架', en: 'SOAR Framework' },
    category: { zh: '行銷傳播框架', en: 'Marketing & Communication Frameworks' },
    components: {
      zh: ['Situation (情境)', 'Obstacles (障礙)', 'Actions (行動)', 'Results (結果)'],
      en: ['Situation', 'Obstacles', 'Actions', 'Results'],
    },
    description: {
      zh: '與 STAR 類似，但更強調過程中遇到的障礙。',
      en: 'Similar to STAR, but with more emphasis on the obstacles encountered during the process.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Situation: 公司需要開發一個新的客戶管理系統
Obstacles: 我們的開發團隊人手不足，且預算有限
Actions: 我研究並導入了一套開源 CRM 框架，並對團隊進行了快速培訓
Results: 我們在 3 個月內成功上線了新系統，節省了 60% 的預算`,
        en: `Situation: The company needed to develop a new customer management system.
Obstacles: Our development team was understaffed, and the budget was limited.
Actions: I researched and implemented an open-source CRM framework and conducted rapid training for the team.
Results: We successfully launched the new system within 3 months, saving 60% of the budget.`,
      },
    },
  },
  {
    id: 'clear',
    name: { zh: 'CLEAR 框架', en: 'CLEAR Framework' },
    category: { zh: '行銷傳播框架', en: 'Marketing & Communication Frameworks' },
    components: {
      zh: ['Context (情境)', 'Language (語言)', 'Examples (範例)', 'Adaptable (適應性)', 'Results (結果)'],
      en: ['Context', 'Language', 'Examples', 'Adaptable', 'Results'],
    },
    description: {
      zh: '描述溝通的背景和環境、指定使用的語言風格和專業程度、提供參考案例或期望格式、要求能適應不同受眾的表達方式，並定義預期的溝通效果和行動。',
      en: 'Describe the context and environment of the communication, specify the language style and level of professionalism to be used, provide reference cases or desired formats, require adaptability in expression for different audiences, and define the expected communication effects and actions.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Context: 向董事會報告數位轉型計畫的進度
Language: 正式商業用語，避免過多技術術語
Examples: 參考McKinsey報告的簡報風格
Adaptable: 能針對財務和技術背景董事調整說明深度
Results: 獲得額外預算批准和人力資源支持`,
        en: `Context: Reporting the progress of the digital transformation plan to the board of directors
Language: Formal business language, avoiding excessive technical jargon
Examples: Refer to the presentation style of McKinsey reports
Adaptable: Able to adjust the depth of explanation for directors with financial and technical backgrounds
Results: Secure approval for additional budget and human resources support`,
      },
    },
  },
  {
    id: 'era',
    name: { zh: 'ERA 框架', en: 'ERA Framework' },
    category: { zh: '行銷傳播框架', en: 'Marketing & Communication Frameworks' },
    components: {
      zh: ['Execution (執行)', 'Results (結果)', 'Audience (受眾)'],
      en: ['Execution', 'Results', 'Audience'],
    },
    description: {
      zh: '明確執行任務，定義期望的結果，並考慮最終的受眾是誰。',
      en: 'Clearly execute the task, define the desired results, and consider who the final audience is.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Execution: 總結這篇關於氣候變遷的科學報告
Results: 產生一份包含三個關鍵發現的500字摘要
Audience: 對此議題不熟悉的普通大眾`,
        en: `Execution: Summarize this scientific report on climate change.
Results: Produce a 500-word summary containing three key findings.
Audience: The general public, who are unfamiliar with this topic.`,
      },
    },
  },

  // 專業技術框架 (Professional & Technical Frameworks)
  {
    id: 'trace',
    name: { zh: 'TRACE 框架', en: 'TRACE Framework' },
    category: { zh: '專業技術框架', en: 'Professional & Technical Frameworks' },
    components: {
      zh: ['Task (任務)', 'Requirements (要求)', 'Audience (受眾)', 'Context (情境)', 'Evaluation (評估)'],
      en: ['Task', 'Requirements', 'Audience', 'Context', 'Evaluation'],
    },
    description: {
      zh: '明確定義技術問題或開發需求、列出技術規格和限制條件、指定使用者類型和技術背景、提供系統環境和應用場景，並設定成功標準和測試方法。',
      en: 'Clearly define the technical problem or development requirement, list technical specifications and constraints, specify user types and technical backgrounds, provide the system environment and application scenario, and set success criteria and testing methods.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Task: 設計電商網站的購物車功能
Requirements: 支援多商品、優惠券計算、庫存檢查
Audience: 一般消費者，需要直覺易用的介面
Context: RWD響應式設計，整合現有會員系統
Evaluation: 購買轉換率提升20%，載入時間低於2秒`,
        en: `Task: Design the shopping cart feature for an e-commerce website
Requirements: Support multiple items, coupon calculation, inventory check
Audience: General consumers who need an intuitive and easy-to-use interface
Context: RWD responsive design, integrate with the existing member system
Evaluation: Increase purchase conversion rate by 20%, loading time under 2 seconds`,
      },
    },
  },
  {
    id: 'prime',
    name: { zh: 'PRIME 框架', en: 'PRIME Framework' },
    category: { zh: '專業技術框架', en: 'Professional & Technical Frameworks' },
    components: {
      zh: ['Purpose (目的)', 'Requirements (要求)', 'Instructions (指導)', 'Metrics (指標)', 'Examples (範例)'],
      en: ['Purpose', 'Requirements', 'Instructions', 'Metrics', 'Examples'],
    },
    description: {
      zh: '明確專案的核心目標和價值、列出具體的功能和品質需求、提供執行的方法和步驟、設定可測量的成功標準，並提供參考案例和期望格式。',
      en: 'Clarify the core objectives and value of the project, list specific functional and quality requirements, provide methods and steps for execution, set measurable success criteria, and provide reference cases and desired formats.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Purpose: 提升客戶服務滿意度和回應效率
Requirements: 24小時內回應率達95%，滿意度4.5分以上
Instructions: 建立客服SOP、導入聊天機器人、訓練客服團隊
Metrics: 回應時間、解決率、滿意度分數、重複諮詢率
Examples: 參考Zappos和亞馬遜的客服標準流程`,
        en: `Purpose: Improve customer service satisfaction and response efficiency
Requirements: Achieve a 95% response rate within 24 hours, satisfaction score of 4.5 or higher
Instructions: Establish customer service SOPs, implement a chatbot, train the customer service team
Metrics: Response time, resolution rate, satisfaction score, repeat inquiry rate
Examples: Refer to the customer service standard procedures of Zappos and Amazon`,
      },
    },
  },
  {
    id: 'icio',
    name: { zh: 'ICIO 框架', en: 'ICIO Framework' },
    category: { zh: '專業技術框架', en: 'Professional & Technical Frameworks' },
    components: {
      zh: ['Instruction (指令)', 'Context (情境)', 'Input (輸入)', 'Output (輸出)'],
      en: ['Instruction', 'Context', 'Input', 'Output'],
    },
    description: {
      zh: '明確分析任務和要求、提供分析的背景和相關資訊、準備分析所需的數據和資料，並定義期望的分析結果格式。',
      en: 'Clarify the analysis task and requirements, provide background and relevant information for the analysis, prepare the necessary data for analysis, and define the desired format for the analysis results.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Instruction: 分析競爭對手的定價策略並提供建議
Context: 手機配件市場，主要競爭者有5家公司
Input: 各品牌產品價格、銷售數據、客戶評價
Output: 競爭力分析報告、定價策略建議、市場定位圖`,
        en: `Instruction: Analyze competitors' pricing strategies and provide recommendations
Context: The mobile phone accessory market, with 5 main competitors
Input: Product prices, sales data, and customer reviews for each brand
Output: A competitive analysis report, pricing strategy recommendations, and a market positioning map`,
      },
    },
  },
  {
    id: 'rascef',
    name: { zh: 'RASCEF 框架', en: 'RASCEF Framework' },
    category: { zh: '專業技術框架', en: 'Professional & Technical Frameworks' },
    components: {
      zh: ['Role (角色)', 'Action (行動)', 'Script (腳本)', 'Content (內容)', 'Example (範例)', 'Format (格式)'],
      en: ['Role', 'Action', 'Script', 'Content', 'Example', 'Format'],
    },
    description: {
      zh: '此框架用於將決策步驟標準化，明確角色、行動、腳本、內容、範例和格式。',
      en: 'This framework is used to standardize decision-making steps, clarifying Role, Action, Script, Content, Example, and Format.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Role: 企業培訓講師
Action: 規劃一場職涯規劃講座
Script: 步驟提問→案例分析→分組討論
Content: 提供最新職涯趨勢報告簡報
Example: 過去案例成功轉職故事
Format: Google Slides簡報格式`,
        en: `Role: Corporate Trainer
Action: Plan a career planning workshop
Script: Step-by-step questions → Case study analysis → Group discussion
Content: Provide a presentation on the latest career trend report
Example: A success story of a past case of career change
Format: Google Slides presentation format`,
      },
    },
  },
  {
    id: 'peas',
    name: { zh: 'PEAS 框架', en: 'PEAS Framework' },
    category: { zh: '專業技術框架', en: 'Professional & Technical Frameworks' },
    components: {
      zh: ['Performance (效能)', 'Environment (環境)', 'Actuators (執行器)', 'Sensors (感測器)'],
      en: ['Performance', 'Environment', 'Actuators', 'Sensors'],
    },
    description: {
      zh: '用於系統設計和AI規劃的框架，定義一個智能代理的目標、環境和能力。',
      en: 'A framework for system design and AI planning that defines the goals, environment, and capabilities of an intelligent agent.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Performance: 客服回覆正確率95%以上
Environment: 線上商城及行動APP
Actuators: 自動回覆、推送通知
Sensors: 收集用戶評價、提問類型統計`,
        en: `Performance: Customer service response accuracy rate of 95% or higher
Environment: Online store and mobile app
Actuators: Automated replies, push notifications
Sensors: Collect user reviews, statistics on question types`,
      },
    },
  },
  {
    id: 'zero-shot',
    name: { zh: 'Zero-Shot Prompting', en: 'Zero-Shot Prompting' },
    category: { zh: '專業技術框架', en: 'Professional & Technical Frameworks' },
    components: {
      zh: ['直接指令', '無範例'],
      en: ['Direct Instruction', 'No Examples'],
    },
    description: {
      zh: '直接給予AI任務指令，不提供任何範例，依賴AI自身的預訓練知識和推理能力來完成任務。',
      en: 'Directly give the AI a task instruction without providing any examples, relying on the AI\'s own pre-trained knowledge and reasoning abilities to complete the task.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `請用新聞報導格式分析AI技術發展趨勢`,
        en: `Analyze the development trends of AI technology in the format of a news report.`,
      },
    },
  },
  {
    id: 'one-shot',
    name: { zh: 'One-Shot Prompting', en: 'One-Shot Prompting' },
    category: { zh: '專業技術框架', en: 'Professional & Technical Frameworks' },
    components: {
      zh: ['單一範例', '任務指令'],
      en: ['Single Example', 'Task Instruction'],
    },
    description: {
      zh: '提供一個範例給AI，讓它根據這個範例的格式或風格來完成指定的任務。',
      en: 'Provide one example to the AI to have it complete a specified task based on the format or style of that example.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `以指定範例生成新產品介紹文`,
        en: `Generate a new product introduction text based on the provided example.`,
      },
    },
  },
  {
    id: 'few-shot',
    name: { zh: 'Few-Shot Prompting', en: 'Few-Shot Prompting' },
    category: { zh: '專業技術框架', en: 'Professional & Technical Frameworks' },
    components: {
      zh: ['少量範例', '任務指令'],
      en: ['Few Examples', 'Task Instruction'],
    },
    description: {
      zh: '提供2-3個簡單範例，讓AI根據這些範例進行推論和學習，然後產出符合要求的結果。',
      en: 'Provide 2-3 simple examples for the AI to infer and learn from, and then produce a result that meets the requirements.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `請根據下列兩則顧客評價，生成類似新產品評論`,
        en: `Based on the following two customer reviews, generate a similar new product review.`,
      },
    },
  },
  {
    id: 'prompt-chaining',
    name: { zh: 'Prompt Chaining', en: 'Prompt Chaining' },
    category: { zh: '專業技術框架', en: 'Professional & Technical Frameworks' },
    components: {
      zh: ['分解任務', '逐步提示', '串聯輸出'],
      en: ['Decompose Task', 'Step-by-step Prompts', 'Chain Outputs'],
    },
    description: {
      zh: '將一個複雜的任務分解成多個更小的、連續的提示。前一個提示的輸出可以作為後一個提示的輸入。',
      en: 'Decompose a complex task into multiple smaller, sequential prompts. The output of one prompt can serve as the input for the next.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Prompt 1: 列出開發一個新網站的主要步驟。
AI Output 1: 1. 規劃與線框圖, 2. UI/UX 設計, 3. 前端開發...
Prompt 2: 根據 [AI Output 1]，詳細說明 "1. 規劃與線框圖" 這個步驟需要做什麼。
AI Output 2: ...詳細說明...
Prompt 3: 根據 [AI Output 2]，推薦三個用於製作線框圖的工具。`,
        en: `Prompt 1: List the main steps to develop a new website.
AI Output 1: 1. Planning & Wireframing, 2. UI/UX Design, 3. Frontend Development...
Prompt 2: Based on [AI Output 1], explain in detail what needs to be done in step "1. Planning & Wireframing".
AI Output 2: ...detailed explanation...
Prompt 3: Based on [AI Output 2], recommend three tools for creating wireframes.`,
      },
    },
  },
  {
    id: 'clever',
    name: { zh: 'CLEVER 框架', en: 'CLEVER Framework' },
    category: { zh: '基礎結構框架', en: 'Basic Structure Frameworks' },
    components: {
      zh: ['Clarity (清晰度)', 'Language (語言)', 'Efficiency (效率)', 'Value (價值)', 'Evaluate (評估)', 'Results (結果)'],
      en: ['Clarity', 'Language', 'Efficiency', 'Value', 'Evaluate', 'Results'],
    },
    description: {
      zh: '一個注重產出品質的框架，要求清晰度、語言風格、效率、價值、評估標準和最終結果。',
      en: 'A framework focused on output quality, requiring clarity, language style, efficiency, value, evaluation criteria, and final results.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Clarity: 清楚地解釋什麼是區塊鏈
Language: 使用非技術人員能理解的簡單比喻
Efficiency: 在 300 字以內完成
Value: 讓讀者了解其核心價值和潛在應用
Evaluate: 確保解釋的準確性
Results: 產出一篇易於分享的科普短文`,
        en: `Clarity: Clearly explain what blockchain is.
Language: Use simple analogies that non-technical people can understand.
Efficiency: Complete it within 300 words.
Value: Let readers understand its core value and potential applications.
Evaluate: Ensure the accuracy of the explanation.
Results: Produce a short, easy-to-share popular science article.`,
      },
    },
  },
  // Miscellaneous Frameworks (placed in best-fit categories)
  {
    id: 'pause',
    name: { zh: 'PAUSE 框架', en: 'PAUSE Framework' },
    category: { zh: '基礎結構框架', en: 'Basic Structure Frameworks' },
    components: {
      zh: ['Problem (問題)', 'Audience (受眾)', 'Urgency (急迫性)', 'Solution (解決方案)', 'Execution (執行)'],
      en: ['Problem', 'Audience', 'Urgency', 'Solution', 'Execution'],
    },
    description: {
      zh: '一個專為專案溝通設計的框架，確保溝通內容清晰、有重點，並能推動行動。',
      en: 'A framework designed specifically for project communication to ensure that the content is clear, focused, and drives action.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Problem: 客戶反映客服等待時間過長
Audience: 客服主管及團隊
Urgency: 假日訂單量增，需即時調整人力
Solution: 增加臨時客服支援、實施AI預判分流
Execution: 下週新系統上線，月底總結成效回報`,
        en: `Problem: Customers are reporting long wait times for customer service.
Audience: Customer Service Manager and team.
Urgency: Order volume increases on holidays, requiring immediate staffing adjustments.
Solution: Add temporary customer service support, implement AI-powered predictive routing.
Execution: The new system goes live next week, with a performance report due at the end of the month.`,
      },
    },
  },
  {
    id: 'costar',
    name: { zh: 'COSTAR 框架', en: 'COSTAR Framework' },
    category: { zh: '基礎結構框架', en: 'Basic Structure Frameworks' },
    components: {
      zh: ['Context (脈絡)', 'Objective (目標)', 'Style (風格)', 'Tone (語氣)', 'Audience (受眾)', 'Response (回應)'],
      en: ['Context', 'Objective', 'Style', 'Tone', 'Audience', 'Response'],
    },
    description: {
      zh: '一個用於內容設計的詳細框架，通過六個維度精確控制AI產出的內容風格和形式。',
      en: 'A detailed framework for content design that precisely controls the style and form of AI-generated content through six dimensions.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Context: 新品牌首次進軍美國市場
Objective: 製作新聞稿吸引科技媒體關注
Style: 簡潔有力但具專業色彩
Tone: 樂觀自信
Audience: 科技記者、行銷顧問
Response: 提供英文新聞稿格式兩種版本`,
        en: `Context: A new brand is entering the US market for the first time.
Objective: Create a press release to attract the attention of tech media.
Style: Concise and powerful, yet professional.
Tone: Optimistic and confident.
Audience: Tech journalists, marketing consultants.
Response: Provide two versions of the press release in English format.`,
      },
    },
  },
  {
    id: 'relic',
    name: { zh: 'RELIC 框架', en: 'RELIC Framework' },
    category: { zh: '基礎結構框架', en: 'Basic Structure Frameworks' },
    components: {
      zh: ['Role (角色)', 'Experience (經驗)', 'Language (語言)', 'Intent (目的)', 'Context (情境)'],
      en: ['Role', 'Experience', 'Language', 'Intent', 'Context'],
    },
    description: {
      zh: '一個用於產出多元內容的框架，通過設定AI的角色、經驗、語言、意圖和情境來生成更具深度和個性的內容。',
      en: 'A framework for generating diverse content by setting the AI\'s role, experience, language, intent, and context to produce more in-depth and personalized content.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Role: 旅遊部落客
Experience: 專精亞洲多國自助旅行
Language: 中文口語
Intent: 吸引台灣讀者自由行規劃
Context: 分享最新北海道賞楓秘境攻略`,
        en: `Role: Travel blogger
Experience: Specializes in solo travel across multiple Asian countries.
Language: Spoken Mandarin Chinese.
Intent: To attract Taiwanese readers for independent travel planning.
Context: Sharing a guide to the latest secret spots for autumn leaf viewing in Hokkaido.`,
      },
    },
  },
  {
    id: 'ptcft',
    name: { zh: 'PTCFT 框架', en: 'PTCFT Framework' },
    category: { zh: '基礎結構框架', en: 'Basic Structure Frameworks' },
    components: {
      zh: [
        'Persona (角色)',
        'Task (任務)',
        'Context (情境)',
        'Format (格式)',
        'Examples (範例)',
        'Tone (語調)',
      ],
      en: [
        'Persona',
        'Task',
        'Context',
        'Format',
        'Examples',
        'Tone',
      ],
    },
    description: {
      zh: '一個強大的AI提示詞公式，透過提供全面的指導來顯著改善AI的回應。Persona賦予AI特定的角色和專業視角，Task闡明您需要創建的內容，Context提供關鍵的背景資訊，Format確保輸出符合您的結構和風格要求。另外還可以選擇性地加入Examples(範例)和Tone(語調)以提供更精確的指導。',
      en: 'A powerful AI prompting formula that significantly improves AI responses by providing comprehensive guidance. Persona gives the AI a specific role and professional perspective, Task clarifies the content you need to create, Context provides key background information, and Format ensures the output meets your structural and stylistic requirements. Optionally, you can add Examples and Tone for more precise guidance.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Persona: 你是一名網路安全團隊的負責人。
Task: 草擬一封每月安全事件摘要的電子郵件給資訊長(CIO)。
Context: 根據[此安全日誌數據]。
Format: 將其格式化為一封電子郵件，包含一個按日期列出安全事件的表格。
Tone: 使用專業且尊重的語氣。`,
        en: `Persona: You are the head of a cybersecurity team.
Task: Draft a monthly security incident summary email to the CIO.
Context: Based on [this security log data].
Format: Format it as an email containing a table listing security incidents by date.
Tone: Use a professional and respectful tone.`
      },
    },
  },
];
