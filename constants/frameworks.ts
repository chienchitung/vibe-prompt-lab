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
      zh: 'APE將「做什麼」與「為什麼做」聯繫起來，這會產生巨大的差異。當AI理解你潛在的目的時，結果會更符合你的實際需求。',
      en: 'APE connects the what with the why, and this makes a huge difference. When the AI understands your underlying purpose, the results align much better with what you actually need.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `行動: 生成五個部落格文章標題。
目的: 目的是為與「初學者可持續園藝」相關的關鍵詞吸引自然搜尋流量，並鼓勵我們的目標受眾（新手園丁）點擊。
期望: 標題應引人入勝、對SEO友好、長度在70個字符以下，並以編號列表形式呈現。它們應該能引發好奇心並承諾提供實用建議。`,
        en: `Action: Generate five blog post titles.
Purpose: The purpose is to attract organic search traffic for keywords related to 'sustainable gardening for beginners' and encourage clicks from our target audience of novice gardeners.
Expectation: The titles should be engaging, SEO-friendly, under 70 characters, and presented as a numbered list. They should spark curiosity and promise practical advice.`,
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
      zh: '當你趕時間時，TAG框架是你的首選。它非常簡單，但每次都能完成任務。沒有廢話，只有結果。',
      en: 'TAG is the framework to reach for when you’re in a hurry. It’s beautifully simple but gets the job done every time. No fluff, just results.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `任務: 總結提供的關於再生能源趨勢的文章。
行動: 專注於提取討論的關鍵技術進步及其潛在市場影響。
目標: 摘要應為忙碌的主管提供快速概覽，使其無需閱讀整篇文章即可了解最關鍵的要點，從而能夠就潛在投資做出明智的決定。`,
        en: `Task: Summarize the provided article on renewable energy trends.
Action: Focus on extracting the key technological advancements discussed and their potential market impact.
Goal: The summary should provide a quick overview for a busy executive to understand the most critical takeaways without reading the entire article, enabling them to make informed decisions about potential investments.`,
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
      zh: '當你需要需要特定專業知識的回應時，RACE是你的首選。它就像為AI分配一個角色——突然間，它不僅是一個AI，而是一位財務顧問、行銷專家，或任何你需要的專家。',
      en: 'RACE is a go-to when you need responses requiring specific expertise. It’s like casting the AI in a role — suddenly it’s not just an AI, but a financial advisor, marketing expert, or whatever specialist you need.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `角色: 你是一位經驗豐富的財務顧問，專為年輕專業人士提供退休規劃。
行動: 創建一份可行的步驟清單。
情境: 目標受眾是20多歲末和30多歲初的年輕人，他們剛開始職業生涯，希望了解儲蓄退休金的基礎知識。他們有學貸債務，不確定如何在償還債務和長期儲蓄之間取得平衡。
期望: 清單應包含5-7個清晰簡潔的步驟，並為每個步驟提供簡要解釋。語氣應鼓勵人心且易於理解，避免使用複雜的金融術語。輸出應為編號列表格式。`,
        en: `Role: You are an experienced financial advisor with expertise in retirement planning for young professionals.
Action: Create a list of actionable steps.
Context: The target audience is individuals in their late 20s and early 30s who have just started their careers and are looking to understand the basics of saving for retirement. They have student loan debt and are unsure how to balance debt repayment with long-term savings.
Expectation: The list should include 5-7 clear, concise steps, with a brief explanation for each. The tone should be encouraging and easy to understand, avoiding complex financial jargon. The output should be in a numbered list format.`,
      },
    },
  },
  {
    id: 'care',
    name: { zh: 'CARE 框架', en: 'CARE Framework' },
    category: { zh: '基礎結構框架', en: 'Basic Structure Frameworks' },
    components: {
      zh: ['Context (情境)', 'Action (行動)', 'Result (結果)', 'Example (範例)'],
      en: ['Context', 'Action', 'Result', 'Example'],
    },
    description: {
      zh: 'CARE將情境置於首位，這對於特定情況的請求非常完美。當背景對於理解你的需求至關重要時，它能發揮奇效。',
      en: 'CARE puts context front and center, which is perfect for situation-specific requests. It works wonders when the background is crucial for understanding what you need.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `情境: 我們公司正在推出一款新的語言學習手機應用程式。我們處於預發布階段，希望招募Beta測試者。
行動: 草擬一封給潛在Beta測試者的推廣郵件。
結果: 郵件應具說服力，清楚解釋成為Beta測試者的好處（早期體驗、影響產品開發），概述對他們的期望，並提供明確的註冊行動呼籲。長度約為200-250字。
範例: 我們希望的語氣片段： 「成為第一批體驗革命性西班牙語學習方式的人！作為LingoLeap的Beta測試者，您將獲得獨家訪問權...」`,
        en: `Context: Our company is launching a new mobile app for language learning. We are in the pre-launch phase and want to gather beta testers.
Action: Draft an outreach email to potential beta testers.
Result: The email should be persuasive, clearly explain the benefits of becoming a beta tester (early access, influence product development), outline what is expected from them, and provide a clear call to action to sign up. It should be approximately 200-250 words.
Example: Here's a snippet of the tone we're looking for: "Be among the first to experience a revolutionary way to learn Spanish! As a beta tester for LingoLeap, you'll get exclusive access..."`,
      },
    },
  },
  {
    id: 'guide',
    name: { zh: 'GUIDE 框架', en: 'GUIDE Framework' },
    category: { zh: '基礎結構框架', en: 'Basic Structure Frameworks' },
    components: {
      zh: ['Goal (目標)', 'Understanding (理解)', 'Information (資訊)', 'Direction (指導)', 'Evaluation (評估)'],
      en: ['Goal', 'Understanding', 'Information', 'Direction', 'Evaluation'],
    },
    description: {
      zh: '一個用於系統化、分步研究的框架，引導 AI 逐步拆解任務。',
      en: 'Use GUIDE when you need a step-by-step research breakdown.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Goal: 為初學者撰寫一篇關於「被動收入」的部落格文章。
Understanding: 我知道基本概念，但需要深入的策略和真實案例。
Information: 文章應包含被動收入的定義、至少五種不同策略（如股息、房地產、線上課程），以及每種策略的優缺點。
Direction: 請以平易近人且激勵人心的語氣撰寫，並為每個策略提供一個簡短的成功故事。
Evaluation: 一篇好的文章應該是內容豐富、易於理解，並能激發讀者開始他們的被動收入之旅。`,
        en: `Goal: Write a blog post about "passive income" for beginners.
Understanding: I know the basic concept but need in-depth strategies and real-world examples.
Information: The post should cover the definition of passive income, at least five different strategies (like dividends, real estate, online courses), and the pros and cons of each.
Direction: Please write in an approachable and motivating tone, and include a short success story for each strategy.
Evaluation: A good post will be informative, easy to understand, and inspire readers to start their passive income journey.`
      },
    },
  },
  {
    id: 'idea',
    name: { zh: 'IDEA 框架', en: 'IDEA Framework' },
    category: { zh: '基礎結構框架', en: 'Basic Structure Frameworks' },
    components: {
      zh: ['Intent (意圖)', 'Details (細節)', 'Examples (範例)', 'Adjustments (調整)'],
      en: ['Intent', 'Details', 'Examples', 'Adjustments'],
    },
    description: {
      zh: '一個用於需要迭代和優化研究的框架，允許根據初步回應進行調整。',
      en: 'Use IDEA when your research needs iteration and refinement.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Intent: 我想為我的咖啡店設計一個新的忠誠度計畫。
Details: 目標是提高客戶回訪率。我目前沒有任何計畫。
Examples: 我喜歡星巴克的星星獎勵系統，但希望我的計畫更簡單。
Adjustments: 如果初步想法太複雜，請提出更簡化的替代方案。`,
        en: `Intent: I want to design a new loyalty program for my coffee shop.
Details: The goal is to increase customer return rates. I currently have no program in place.
Examples: I like Starbucks' star reward system, but I want mine to be simpler.
Adjustments: If the initial ideas are too complex, propose a more streamlined alternative.`
      },
    },
  },
  {
    id: 'rise',
    name: { zh: 'RISE 框架', en: 'RISE Framework' },
    category: { zh: '基礎結構框架', en: 'Basic Structure Frameworks' },
    components: {
      zh: ['Role (角色)', 'Input (輸入)', 'Steps (步驟)', 'Expectation (期望)'],
      en: ['Role', 'Input', 'Steps', 'Expectation'],
    },
    description: {
      zh: 'RISE是處理需要特定工作流程的複雜任務時的首選。將過程分解為清晰的步驟對輸出品質有巨大影響。',
      en: 'RISE is the go-to for complex tasks requiring a specific workflow. Breaking down the process into clear steps makes a huge difference in the quality of the output.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `角色: 你是一位一絲不苟的校對員和編輯。
輸入: 以下部落格文章草稿：[在此貼上文章文本]。
步驟: 1. 首先，檢查並修正所有語法錯誤和拼寫錯誤。 2. 其次，找出並建議改進清晰度和流暢性的地方。 3. 第三，確保語氣與專業但引人入勝的風格一致。 4. 最後，提供所做主要更改的簡要摘要。
期望: 輸出應為部落格文章的編輯版本，帶有追蹤修訂（如果可能，或清楚標示的修正）以及一份獨立的簡短編輯和建議摘要。主要目標是使文章達到可發布的狀態。`,
        en: `Role: You are a meticulous proofreader and editor.
Input: The following blog post draft: [Paste blog post text here].
Steps: 1. First, check for and correct any grammatical errors and spelling mistakes. 2. Second, identify and suggest improvements for clarity and flow. 3. Third, ensure the tone is consistent with a professional yet engaging style. 4. Finally, provide a brief summary of the key changes made.
Expectation: The output should be the edited version of the blog post with tracked changes (if possible, or clearly indicated corrections) and a separate short summary of your edits and suggestions. The primary goal is to make the post publication-ready.`,
      },
    },
  },
  {
    id: 'rtf',
    name: { zh: 'RTF 框架', en: 'RTF Framework' },
    category: { zh: '基礎結構框架', en: 'Basic Structure Frameworks' },
    components: {
      zh: ['Role (角色)', 'Task (任務)', 'Format/Finish (格式/完成)'],
      en: ['Role', 'Task', 'Format/Finish'],
    },
    description: {
      zh: 'RTF將角色扮演與結構化輸出要求結合起來。當專業知識和呈現方式同等重要時，這個框架非常適用。',
      en: 'RTF combines role-playing with structured output requirements. This framework is great when both expertise and presentation matter equally.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `角色: 你是一位專門從事冒險旅遊的資深旅遊作家。
任務: 為為期7天的巴塔哥尼亞地區背包旅行創建一個引人入勝的行程，重點是具有挑戰性的徒步旅行和獨特的自然地標。
格式/完成: 將行程以每日計畫的表格形式呈現，欄位包括「天」、「地點」、「主要活動」和「預計徒步時間/難度」。整體語氣應鼓舞人心且充滿冒險精神。`,
        en: `Role: You are a seasoned travel writer specializing in adventure tourism.
Task: Create a compelling itinerary for a 7-day backpacking trip through the Patagonia region, focusing on challenging hikes and unique natural landmarks.
Format/Finish: Present the itinerary as a day-by-day plan in a table format with columns for 'Day,' 'Location,' 'Key Activities,' and 'Estimated Hiking Time/Difficulty.' The overall tone should be inspiring and adventurous.`,
      },
    },
  },
  {
    id: 'focus',
    name: { zh: 'FOCUS 框架', en: 'FOCUS Framework' },
    category: { zh: '基礎結構框架', en: 'Basic Structure Frameworks' },
    components: {
      zh: ['Function (功能)', 'Outcome (結果)', 'Criteria (標準)', 'Underlying Assumptions (潛在假設)', 'Strategy (策略)'],
      en: ['Function', 'Outcome', 'Criteria', 'Underlying Assumptions', 'Strategy'],
    },
    description: {
      zh: '一個用於精準、無冗贅研究的框架，幫助您過濾不必要的細節，直達問題核心。',
      en: 'Use FOCUS when you want to cut through unnecessary details and get straight to the point.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Function: 扮演一位財務分析師的角色。
Outcome: 提供特斯拉(TSLA)和福特(F)的投資潛力比較。
Criteria: 分析應基於過去五年的財務報表、市場份額和技術創新。
Underlying Assumptions: 假設電動車市場將持續增長。
Strategy: 首先比較兩家公司的核心財務指標，然後分析其在電動車領域的技術優勢和未來展望。`,
        en: `Function: Act as a financial analyst.
Outcome: Provide a comparison of the investment potential of Tesla (TSLA) and Ford (F).
Criteria: The analysis should be based on financial statements from the past five years, market share, and technological innovation.
Underlying Assumptions: Assume that the electric vehicle market will continue to grow.
Strategy: Start by comparing the core financial metrics of both companies, then analyze their technological advantages and future outlook in the EV space.`
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
    id: 'clear',
    name: { zh: 'CLEAR 框架', en: 'CLEAR Framework' },
    category: { zh: '基礎結構框架', en: 'Basic Structure Frameworks' },
    components: {
      zh: ['Context (情境)', 'Logic (邏輯)', 'Expectations (期望)', 'Action (行動)', 'Restrictions (限制)'],
      en: ['Context', 'Logic', 'Expectations', 'Action', 'Restrictions'],
    },
    description: {
      zh: '一個用於結構化、明確的研究查詢的框架，不留任何模糊空間。',
      en: 'Use CLEAR when you need a detailed and structured research query that leaves no room for ambiguity.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Context: 我正在為一份大學報告研究再生能源的經濟可行性。
Logic: 我需要比較太陽能和風能的成本效益，以確定哪個是更好的長期投資。
Expectations: 我需要一個包含數據、圖表和來源引用的詳細摘要。
Action: 總結太陽能和風能的初始投資成本、運營成本和投資回報率。
Restrictions: 資訊來源應僅限於過去三年的學術期刊和政府報告。`,
        en: `Context: I am researching the economic viability of renewable energy for a university paper.
Logic: I need to compare the cost-effectiveness of solar vs. wind power to determine which is a better long-term investment.
Expectations: I need a detailed summary with data, charts, and source citations.
Action: Summarize the initial investment costs, operational costs, and return on investment for both solar and wind energy.
Restrictions: Sources should be limited to academic journals and government reports from the last three years.`
      },
    },
  },
  {
    id: 'smart',
    name: { zh: 'SMART 框架', en: 'SMART Framework' },
    category: { zh: '基礎結構框架', en: 'Basic Structure Frameworks' },
    components: {
      zh: ['Specific (具體)', 'Measurable (可衡量)', 'Achievable (可實現)', 'Relevant (相關)', 'Time-bound (有時限)'],
      en: ['Specific', 'Measurable', 'Achievable', 'Relevant', 'Time-bound'],
    },
    description: {
      zh: '一個用於設定精確、目標導向研究的框架，以獲得專注且可衡量的結果。',
      en: 'Use SMART when you need focused, measurable research results.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Specific: 找出三種能有效降低小型企業碳足跡的策略。
Measurable: 每種策略應有潛在的碳減排百分比估算。
Achievable: 這些策略應是預算低於5000美元的小型企業可以實施的。
Relevant: 專注於能源消耗和廢物管理領域。
Time-bound: 找出在未來六個月內可以開始實施的策略。`,
        en: `Specific: Identify three effective strategies for a small business to reduce its carbon footprint.
Measurable: Each strategy should have a potential percentage reduction in carbon emissions.
Achievable: The strategies should be implementable by a small business with a budget under $5,000.
Relevant: Focus on the areas of energy consumption and waste management.
Time-bound: Find strategies that can be initiated within the next six months.`
      },
    },
  },
  {
    id: 'quest',
    name: { zh: 'QUEST 框架', en: 'QUEST Framework' },
    category: { zh: '基礎結構框架', en: 'Basic Structure Frameworks' },
    components: {
      zh: ['Question (問題)', 'Understanding (理解)', 'Expectation (期望)', 'Scope (範圍)', 'Time (時間)'],
      en: ['Question', 'Understanding', 'Expectation', 'Scope', 'Time'],
    },
    description: {
      zh: '一個用於將廣泛主題縮小範圍並提煉研究問題的框架。',
      en: 'Use QUEST when you have a broad topic and need to narrow it down.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Question: 人工智慧將如何影響專案管理？
Understanding: 我知道AI可以自動化任務，但不確定其對角色和職責的具體影響。
Expectation: 我希望得到一份要點清單，說明AI將改變專案經理工作的五個主要方式。
Scope: 專注於軟體開發行業。
Time: 考慮未來五年的變化。`,
        en: `Question: How will artificial intelligence impact project management?
Understanding: I know AI can automate tasks, but I'm unsure of the specific effects on roles and responsibilities.
Expectation: I want a bullet-point list of the top five ways AI will change a project manager's job.
Scope: Focus on the software development industry.
Time: Consider changes over the next five years.`
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
      zh: ['Requirement (需求)', 'Information (資訊)', 'Strategy (策略)', 'Evaluation (評估)', 'Negotiation (協商)'],
      en: ['Requirement', 'Information', 'Strategy', 'Evaluation', 'Negotiation'],
    },
    description: {
      zh: '一個用於需要策略性深度研究的框架，允許在回應中具有一定的靈活性。',
      en: 'Use RISEN when your research requires a strategic approach.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Requirement: 我需要一份關於遠距工作對員工心理健康影響的全面報告。
Information: 請包含正面和負面的影響，並引用2020年後的學術研究。
Strategy: 首先概述主要趨勢，然後深入探討具體問題，如孤立感和工作與生活平衡。
Evaluation: 報告的準確性將根據所引用研究的品質來判斷。
Negotiation: 如果找不到特定主題的數據，請指出知識差距並建議未來研究方向。`,
        en: `Requirement: I need a comprehensive report on the impact of remote work on employee mental health.
Information: Please include both positive and negative impacts, citing academic studies post-2020.
Strategy: Start with an overview of major trends, then delve into specific issues like isolation and work-life balance.
Evaluation: The accuracy of the report will be judged by the quality of the cited research.
Negotiation: If data on a specific sub-topic is unavailable, please highlight the knowledge gap and suggest areas for future research.`
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
  {
    id: 'rhodes',
    name: { zh: 'RHODES 框架', en: 'RHODES Framework' },
    category: { zh: '進階推理框架', en: 'Advanced Reasoning Frameworks' },
    components: {
      zh: ['Research (研究)', 'Hypothesis (假設)', 'Objectives (目標)', 'Development (發展)', 'Execution (執行)', 'Synthesis (綜合)'],
      en: ['Research', 'Hypothesis', 'Objectives', 'Development', 'Execution', 'Synthesis'],
    },
    description: {
      zh: '一個用於假設驅動研究的框架，遵循從問題識別到結論綜合的結構化路徑。',
      en: 'Use RHODES when your research follows a hypothesis-based approach.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Research: 研究四天工作制對科技公司員工生產力的影響。
Hypothesis: 實施四天工作制將在不降低產出的情況下提高員工滿意度和生產力。
Objectives: 衡量生產力指標（如程式碼提交、任務完成率）和員工滿意度調查的變化。
Development: 規劃一個研究方法，比較實施前後三個月的數據。
Execution: 分析提供的數據集，找出統計上顯著的差異。
Synthesis: 總結研究結果，並就四天工作制的可行性提出建議。`,
        en: `Research: Investigate the impact of a four-day work week on employee productivity in tech companies.
Hypothesis: Implementing a four-day work week increases employee satisfaction and productivity without decreasing output.
Objectives: Measure changes in productivity metrics (like code commits, task completion rates) and employee satisfaction surveys.
Development: Plan a research methodology comparing data from three months before and after implementation.
Execution: Analyze the provided dataset to identify statistically significant differences.
Synthesis: Summarize the findings and make a recommendation on the viability of a four-day work week.`
      },
    },
  },

  // 商業應用框架 (Business Application Frameworks)
  {
    id: 'coast',
    name: { zh: 'COAST 框架', en: 'COAST Framework' },
    category: { zh: '商業應用框架', en: 'Business Application Frameworks' },
    components: {
      zh: ['Context (情境)', 'Objective (目標)', 'Actions (行動)', 'Scenario (場景)', 'Task (任務)'],
      en: ['Context', 'Objective', 'Actions', 'Scenario', 'Task'],
    },
    description: {
      zh: 'COAST為複雜的規劃任務提供了全面的結構。對於需要將高層次目標與具體行動聯繫起來的專案非常有價值。',
      en: 'COAST provides comprehensive structure for complex planning tasks. It is invaluable for projects that need to connect high-level objectives with specific actions.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `情境: 我們正在為快速發展的科技公司開發一個新的員工入職計畫。
目標: 創造一個熱情且資訊豐富的第一週體驗，幫助新員工快速融入並為他們的角色做好準備。
行動: 規劃一個為期5天的時間表。為每一天建議關鍵活動、資訊會議和介紹性會議。考慮後勤方面、學習目標和社交融入。
場景: 想像一位新的軟體工程師加入公司。他們的第一週應該是什麼樣子才能為成功奠定基礎？
任務: 製作一份詳細的第一週入職時間表，以清晰的逐日列表格式呈現。每天的計畫應包括時間、活動描述和相關人員/部門。`,
        en: `Context: We are developing a new employee onboarding program for our rapidly growing tech company.
Objective: To create a welcoming and informative first-week experience that helps new hires integrate quickly and feel prepared for their roles.
Actions: Outline a 5-day schedule. For each day, suggest key activities, information sessions, and introductory meetings. Consider logistical aspects, learning objectives, and social integration.
Scenario: Imagine a new software engineer joining the company. What should their first week look like to set them up for success?
Task: Produce a detailed first-week onboarding schedule, presented in a clear, day-by-day list format. Each day's plan should include times, activity descriptions, and involved personnel/departments.`,
      },
    },
  },
  {
    id: 'pivo',
    name: { zh: 'P-I-V-O 框架', en: 'P-I-V-O Framework' },
    category: { zh: '商業應用框架', en: 'Business Application Frameworks' },
    components: {
      zh: ['Problem (問題)', 'Insights (洞察)', 'Voice (聲音)', 'Outcome (結果)'],
      en: ['Problem', 'Insights', 'Voice', 'Outcome'],
    },
    description: {
      zh: 'P-I-V-O以一種以解決方案為導向的方式來構建問題，這對於獲得策略性建議非常有效。「聲音」部分增加了一個特定的視角，豐富了回應。',
      en: 'P-I-V-O frames problems in a solution-oriented way that is incredibly effective for getting strategic advice. The “Voice” component adds a specific perspective that enriches the response.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `問題: 我們的SaaS新創公司已連續兩季未達到年度經常性收入(ARR)目標。
洞察: 漏斗分析顯示從演示到試用的轉換率很高，但從試用到付費的留存率很差。
聲音: 經驗豐富的新創公司教練，曾幫助類似公司克服增長瓶頸。
結果: 制定一個為期90天的重新定位計畫，其中包含改善留存率的具體策略和修訂後的收入預測。`,
        en: `Problem: Our SaaS startup has missed ARR targets for two consecutive quarters.
Insights: Funnel breakdown shows high demo-to-trial conversion but poor trial-to-paid retention.
Voice: Experienced startup coach who has helped similar companies overcome growth plateaus.
Outcome: Develop a 90-day repositioning plan with specific tactics to improve retention and a revised revenue forecast.`,
      },
    },
  },
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
    id: 'rain',
    name: { zh: 'R-A-I-N 框架', en: 'R-A-I-N Framework' },
    category: { zh: '創意思考框架', en: 'Creative Thinking Frameworks' },
    components: {
      zh: ['Role (角色)', 'Aim (目標)', 'Input (輸入)', 'Numeric Target (數字目標)'],
      en: ['Role', 'Aim', 'Input', 'Numeric Target'],
    },
    description: {
      zh: '當你需要有可衡量結果的創意工作時，R-A-I-N是你的首選框架。數字目標使創意基於實際結果。',
      en: 'R-A-I-N is the framework of choice when you need creative work with measurable outcomes. The numeric target keeps creativity grounded in practical results.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `角色: 你是一位資深產品設計師。
目標: 將用戶引導時間減少30%。
輸入: 使用附件中顯示當前流失點的漏斗指標。
數字目標: 交付一個行動裝置線框圖和顯示預期改進的KPI表格。`,
        en: `Role: You are a senior product designer.
Aim: Reduce user onboarding time by 30%.
Input: Use the attached funnel metrics showing current drop-off points.
Numeric Target: Deliver a mobile wireframe and KPI table showing expected improvements.`,
      },
    },
  },
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
      zh: ['Capacity/Role (能力/角色)', 'Insight (洞察)', 'Statement (陳述)', 'Personality (個性)', 'Experiment (實驗)'],
      en: ['Capacity/Role', 'Insight', 'Statement', 'Personality', 'Experiment'],
    },
    description: {
      zh: 'CRISPE是你的創意遊樂場。「實驗」部分鼓勵AI跳出思維定勢，探索多種可能性。',
      en: 'CRISPE is your creative playground. The “Experiment” component encourages the AI to think outside the box and explore multiple possibilities.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `能力/角色: 你是一位創新的行銷策略師。
洞察: 我們是一家小型手工咖啡店，在平日下午難以增加客流量。我們目前的社群媒體參與度很低。
陳述: 生成三個獨特且非傳統的行銷活動點子來提升我們的下午銷售額。
個性: 點子應具創意、預算友好，並帶有略帶俏皮和以社群為中心的語氣。
實驗: 為每個點子簡要概述核心概念、目標受眾和關鍵訊息。要大膽，跳出框架思考！`,
        en: `Capacity/Role: You are an innovative marketing strategist.
Insight: We are a small artisanal coffee shop struggling to increase foot traffic during weekday afternoons. Our current social media engagement is low.
Statement: Generate three distinct and unconventional marketing campaign ideas to boost our afternoon sales.
Personality: The ideas should be creative, budget-friendly, and have a slightly playful and community-focused tone.
Experiment: For each idea, briefly outline the core concept, target audience, and key message. Be bold and think outside the box!`,
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
  {
    id: 'create',
    name: { zh: 'CREATE 框架', en: 'CREATE Framework' },
    category: { zh: '創意思考框架', en: 'Creative Thinking Frameworks' },
    components: {
      zh: ['Conceptualize (概念化)', 'Research (研究)', 'Experiment (實驗)', 'Analyze (分析)', 'Transform (轉換)', 'Evaluate (評估)'],
      en: ['Conceptualize', 'Research', 'Experiment', 'Analyze', 'Transform', 'Evaluate'],
    },
    description: {
      zh: '一個用於引導創新和實驗性研究的框架，從概念化到最終評估。',
      en: 'Use CREATE when your research involves ideation and experimentation.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `Conceptualize: 我想為城市居民創建一個解決食物浪費問題的應用程式。
Research: 收集關於當前食物浪費統計數據和現有解決方案的資訊。
Experiment: 腦力激盪三種不同的應用功能，例如社區冰箱地圖、剩食交換平台或與餐廳合作。
Analyze: 評估每種功能的可行性、潛在影響和開發複雜性。
Transform: 將最佳功能發展成一個詳細的應用概念和使用者流程。
Evaluate: 根據潛在的用戶採用率和減少食物浪費的影響來衡量該概念的成功潛力。`,
        en: `Conceptualize: I want to create an app that solves the problem of food waste for urban dwellers.
Research: Gather information on current food waste statistics and existing solutions.
Experiment: Brainstorm three different app features, such as a community fridge map, a surplus food exchange, or a partnership with restaurants.
Analyze: Evaluate the feasibility, potential impact, and development complexity of each feature.
Transform: Refine the best feature into a detailed app concept and user flow.
Evaluate: Measure the potential success of the concept based on potential user adoption and impact on reducing food waste.`
      },
    },
  },

  // 教育培訓框架 (Education & Training Frameworks)
  {
    id: 'seed',
    name: { zh: 'S-E-E-D 框架', en: 'S-E-E-D Framework' },
    category: { zh: '教育培訓框架', en: 'Education & Training Frameworks' },
    components: {
      zh: ['Situation (情況)', 'End Goal (最終目標)', 'Examples (範例)', 'Deliverables (交付成果)'],
      en: ['Situation', 'End Goal', 'Examples', 'Deliverables'],
    },
    description: {
      zh: 'S-E-E-D能優美地建構教育內容。它能創造出既全面又實用的學習材料。',
      en: 'S-E-E-D structures educational content beautifully. It creates learning materials that are both comprehensive and practical.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `情況: 我們的開發團隊需要學習提示工程技能，以便更好地利用AI工具。
最終目標: 創建一個為期4週的精通課程，使開發人員能夠構建有效的AI提示。
範例: 包括每週展示漸進技能發展的迷你專案。
交付成果: 製作完整的教學大綱、評分標準和用於內部推廣的預告內容。`,
        en: `Situation: Our development team needs to learn prompt engineering skills to better utilize AI tools.
End Goal: Create a 4-week mastery course that enables developers to build effective AI prompts.
Examples: Include weekly mini-projects that demonstrate progressive skill development.
Deliverables: Produce a complete syllabus, assessment rubric, and teaser content for internal promotion.`,
      },
    },
  },
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
    id: 'flow',
    name: { zh: 'F-L-O-W 框架', en: 'F-L-O-W Framework' },
    category: { zh: '行銷傳播框架', en: 'Marketing & Communication Frameworks' },
    components: {
      zh: ['Function (功能)', 'Level (級別)', 'Output (輸出)', 'Win Metric (成功指標)'],
      en: ['Function', 'Level', 'Output', 'Win Metric'],
    },
    description: {
      zh: 'F-L-O-W是內容創作的秘密武器。通過清晰定義受眾的專業水平和成功指標，你能獲得真正能與讀者產生共鳴的內容。',
      en: 'F-L-O-W is a content creation secret weapon. By clearly defining the audience expertise level and success metrics, you get content that actually resonates with readers.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `功能: 專門從事亞洲目的地的旅遊文案撰寫員。
級別: 首次訪問日本的初學者。
輸出: 一篇700字的部落格文章，主題為「初次訪客必看的東京社區」。
成功指標: 目標詞組的關鍵詞密度達到1%，並包含一個引人注目的行動呼籲。`,
        en: `Function: Travel copywriter specializing in Asian destinations.
Level: Beginners visiting Japan for the first time.
Output: 700-word blog post on "Essential Tokyo Neighborhoods for First-Time Visitors."
Win Metric: 1% keyword density for target phrases and inclusion of a compelling call-to-action.`,
      },
    },
  },
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
      zh: ['Before (之前)', 'After (之後)', 'Bridge (橋樑)'],
      en: ['Before', 'After', 'Bridge'],
    },
    description: {
      zh: 'BAB創造了一個引人入勝的敘事弧線，對於有說服力的內容來說是不可抗拒的。它就像講一個有開頭、中間和結尾的迷你故事。',
      en: 'BAB creates a compelling narrative arc that is irresistible for persuasive content. It’s like telling a mini-story with a beginning, middle, and end.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `之前: 我們的團隊成員因會議過多而感到不堪重負，導致生產力下降和職業倦怠。他們很難找到專注的時間進行深度工作。
之後: 我們希望團隊環境中的會議高效且有目的，個人有大量的無干擾時間，從而提高生產力、提升士氣並改善工作與生活的平衡。
橋樑: 提供一份至少包含五種實用策略的綜合行動計畫，我們的團隊可以實施這些策略來減少不必要的會議並優化我們的會議文化，以達到這種「之後」的狀態。`,
        en: `Before: Our team members are feeling overwhelmed with too many meetings, leading to decreased productivity and burnout. They struggle to find focused time for deep work.
After: We want a team environment where meetings are efficient and purposeful, and individuals have significant blocks of uninterrupted time, leading to higher productivity, better morale, and improved work-life balance.
Bridge: Provide a comprehensive action plan with at least five practical strategies our team can implement to reduce unnecessary meetings and optimize our meeting culture to achieve this 'After' state.`,
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
    id: 'deep',
    name: { zh: 'D.E.E.P. 框架', en: 'D.E.E.P. Framework' },
    category: { zh: '專業技術框架', en: 'Professional & Technical Frameworks' },
    components: {
      zh: ['Direction (方向)', 'Existing Info (現有資訊)', 'Expertise (專業知識)', 'Preferred Tone (偏好語氣)'],
      en: ['Direction', 'Existing Info', 'Expertise', 'Preferred Tone'],
    },
    description: {
      zh: 'D.E.E.P.是處理複雜內容的首選。它能創造出專家級的材料，不僅提供資訊，更能以其深度和洞察力給讀者留下深刻印象。',
      en: 'D.E.E.P. is the go-to for sophisticated content. It creates expert-level material that doesn’t just inform but actually impresses readers with its depth and insight.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `方向: 為科技專業人士撰寫一篇關於個人品牌的詳細文章。
現有資訊: 我已附上一份涵蓋關鍵主題的大綱。
專業知識: 專注於為已有穩定職業生涯並希望轉型為思想領袖的專業人士提供高級技巧。
偏好語氣: 友好且略帶幽默，同時保持專業信譽。`,
        en: `Direction: Write a detailed post on personal branding for tech professionals.
Existing Info: I've attached an outline covering key topics to include.
Expertise: Focus on advanced tips for professionals with established careers looking to pivot to thought leadership.
Preferred Tone: Friendly and slightly humorous while maintaining professional credibility.`,
      },
    },
  },
  {
    id: 'trace',
    name: { zh: 'TRACE 框架', en: 'TRACE Framework' },
    category: { zh: '專業技術框架', en: 'Professional & Technical Frameworks' },
    components: {
      zh: ['Task (任務)', 'Request (請求)', 'Action (行動)', 'Context (情境)', 'Example (範例)'],
      en: ['Task', 'Request', 'Action', 'Context', 'Example'],
    },
    description: {
      zh: '當你腦中有清晰的畫面但難以解釋時，TRACE是你的秘密武器。範例部分就像給AI看一張你想要的東西的圖片，而不僅僅是描述它。',
      en: 'TRACE is a secret weapon when you have a clear vision but struggle to explain it. The example component is like showing the AI a picture of what you want instead of just describing it.',
    },
    example: {
      title: { zh: '使用範例：', en: 'Example:' },
      code: {
        zh: `任務: 為一系列新的環保水瓶生成創意產品描述。
請求: 我需要三個不同的產品描述。
行動: 為每個描述，突顯其獨特的銷售主張（例如，材料、設計、保溫性能），營造可持續發展的感覺，並包括一個行動呼籲。
情境: 目標受眾是具有環保意識的千禧一代。品牌聲音年輕、樂觀，略帶古靈精怪。
範例: 想要的描述風格：「用AquaPure水瓶可持續地飲水！由回收的海洋塑膠製成，其雙層壁保溫可讓您的飲料保持冰涼24小時。保持水分，拯救地球！立即購買。」`,
        en: `Task: Generate creative product descriptions for a new line of eco-friendly water bottles.
Request: I need three distinct product descriptions.
Action: For each description, highlight its unique selling proposition (e.g., material, design, insulation properties), evoke a sense of sustainability, and include a call to action.
Context: The target audience is environmentally conscious millennials. The brand voice is youthful, optimistic, and slightly quirky.
Example: Desired style for a description: "Sip sustainably with the AquaPure bottle! Made from recycled ocean plastic, its double-walled insulation keeps your drinks icy for 24 hours. Stay hydrated and save the planet! Shop now."`,
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
