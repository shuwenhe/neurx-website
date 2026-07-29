// 国际化翻译字典
const i18nDict = {
  // 品牌和导航
  'brand-subtitle': {
    en: 'S Language / NeurX Official',
    zh: 'S 语言 / NeurX 官网'
  },
  'nav-summary': {
    en: 'Summary',
    zh: '摘要'
  },
  'nav-market': {
    en: 'Market',
    zh: '市场'
  },
  'nav-product': {
    en: 'Product',
    zh: '产品'
  },
  'nav-strategy': {
    en: 'Strategy',
    zh: '战略'
  },
  'nav-founder': {
    en: 'Founder',
    zh: '创始人'
  },
  'nav-research': {
    en: 'Research',
    zh: '研发中心'
  },
  'nav-global': {
    en: 'Global',
    zh: '全球布局'
  },
  'nav-funding': {
    en: 'Funding',
    zh: '融资'
  },
  's-language': {
    en: 'S',
    zh: 'S 语言'
  },
  'lang-toggle': {
    en: '中文',
    zh: 'English'
  },

  // Hero 部分
  'hero-title': {
    en: 'NeurX: Next-Gen Physical AGI & Enterprise AI Productivity Engine',
    zh: 'NeurX: 下一代物理 AGI 与企业级 AI 生产力引擎'
  },
  'hero-lead': {
    en: 'Core aspects of the NeurX AI Large Model Plan: market opportunities, CodeAgent product system, dual-base strategy, World Model roadmap, team and financing solutions.',
    zh: '《NeurX人工智能大模型》的核心内容：市场机遇、CodeAgent 产品体系、双底座战略、World Model 路线、团队与融资方案。'
  },
  'btn-summary': {
    en: 'View Summary',
    zh: '查看摘要'
  },
  'btn-funding': {
    en: 'Funding Plan',
    zh: '融资方案'
  },
  's-github': {
    en: 'S Language GitHub',
    zh: 'S 语言 GitHub'
  },
  'neurx-github': {
    en: 'NeurX GitHub',
    zh: 'NeurX GitHub'
  },
  'metric-funding': {
    en: '$30M',
    zh: '3,000 万美金'
  },
  'metric-funding-desc': {
    en: 'Planned Funding for This Round',
    zh: '本轮计划融资金额'
  },
  'metric-cases': {
    en: 'Multiple Large Model Deployment Cases',
    zh: '多家大模型实战落地案例'
  },
  'metric-customers': {
    en: 'Leading Enterprise Customers',
    zh: '头部标杆客户应用'
  },
  'metric-margin': {
    en: '72% Margin',
    zh: '72% 毛利'
  },
  'metric-margin-desc': {
    en: 'CodeAgent Privatization Projects',
    zh: 'CodeAgent 私有化项目'
  },
  'plan-short': {
    en: 'Short-term: CodeAgent Commercial Closure',
    zh: '短期：CodeAgent 商业化闭环'
  },
  'plan-mid': {
    en: 'Mid-term: NeurX-model Enterprise Trusted LLM',
    zh: '中期：NeurX-model 企业可信大模型'
  },
  'plan-long': {
    en: 'Long-term: NeurX-robot / World Model',
    zh: '长期：NeurX-robot / World Model'
  },
  'quote': {
    en: '"Build a dual-base ecosystem of \'decision brain + execution trunk\', establish cash flow first, then raise technical barriers."',
    zh: '"构建\'决策大脑 + 执行躯干\'双底座生态，先跑通现金流，再拉高技术壁垒。"'
  },

  // 摘要部分
  'exec-title': {
    en: 'Short-term Commercial Closure, Long-term Physical AGI Barriers',
    zh: '短期商业化闭环，长期物理 AGI 壁垒'
  },
  'exec-judgment': {
    en: 'Core Judgment',
    zh: '核心判断'
  },
  'exec-vision': {
    en: 'NeurX positions itself as a "Code Agent + Trusted Large Model + Physical World Model" triple architecture, using CodeAgent to rapidly enter the market, establish positive cash flow first, then build long-term barriers with S language and underlying Runtime.',
    zh: 'NeurX 定位为"工程 Agent + 可信大模型 + 物理世界模型"三重架构，用 CodeAgent 快速切入市场，先形成正向现金流，再以 S 语言和底层 Runtime 构筑长期壁垒。'
  },
  'exec-point1': {
    en: 'Short-term entry into government and enterprise scenarios with CodeAgent and NeurX-model',
    zh: '短期以 CodeAgent 和 NeurX-model 进入政企与制造场景'
  },
  'exec-point2': {
    en: 'Mid-term unification of pre-training, fine-tuning, RAG, and Agent processes with S language',
    zh: '中期以 S 语言统一预训练、微调、RAG、Agent 流程'
  },
  'exec-point3': {
    en: 'Long-term positioning in World Model and embodied intelligence infrastructure',
    zh: '长期卡位 World Model 与具身智能基础设施'
  },
  'exec-anchor': {
    en: 'Funding Anchor',
    zh: '融资锚点'
  },
  'exec-anchor-desc': {
    en: '$30M financing, releasing 10% equity, corresponding to $300M post-investment valuation.',
    zh: '3,000 万美金融资，拟出让 10% 股权，对应 3 亿美金投后估值。'
  },
  'exec-verify': {
    en: 'Business Verification',
    zh: '商业验证'
  },
  'exec-verify-desc': {
    en: '5 leading customer deployments with privatization projects averaging $120K/year.',
    zh: '已落地 5 家头部标杆客户，私有化项目客单价约 12 万美金/年。'
  },
  'exec-model': {
    en: 'Monetization Model',
    zh: '盈利模型'
  },
  'exec-model-desc': {
    en: 'Three-tier revenue: personal cloud, SaaS, and privatization versions, balancing user scale and profitability.',
    zh: '个人版、SaaS 版、私有化版三层变现，兼顾流量、现金流与高利润。'
  },

  // 市场部分
  'market-title': {
    en: 'The Structural Window for Enterprise AI is Opening',
    zh: '企业级 AI 的结构性窗口正在打开'
  },
  'market-size': {
    en: '$214B',
    zh: '2140 亿元'
  },
  'market-size-desc': {
    en: 'Enterprise AI application market is massive, still in blue ocean expansion phase for 1-3 years.',
    zh: '企业级 AI 应用盘子规模巨大，短期 1-3 年仍处于千亿级蓝海扩张阶段。'
  },
  'market-coding': {
    en: '$80.7B by 2028',
    zh: '2028 年 807 亿'
  },
  'market-coding-desc': {
    en: 'AI coding tool market viewed as high-growth segment with 110% CAGR projection.',
    zh: 'AI 编程工具市场在计划书中被视为高增速切口，CAGR 预计达到 110%。'
  },
  'market-horizon': {
    en: '$1.2T Blue Ocean',
    zh: '1.2 万亿级蓝海'
  },
  'market-horizon-desc': {
    en: 'Long-term goal covers industrial, R&D and physical intelligence ecosystem base, not just a single tool.',
    zh: '长远目标不是单点工具，而是覆盖工业、研发与物理智能的产业生态底座。'
  },
  'market-compliance': {
    en: 'Compliant Privatization Rare',
    zh: '合规私有化稀缺'
  },
  'market-compliance-desc': {
    en: 'Few large industrial enterprises have deep compliance privatization deployment, clear market demand gap.',
    zh: '国内规模以上工业企业中，仅少部分完成深度合规私有化部署，需求空白明显。'
  },
  'market-hallucination': {
    en: 'Professional Hallucination Risk',
    zh: '专业幻觉风险'
  },
  'market-hallucination-desc': {
    en: 'General LLMs have high factual hallucination rates in industrial precision scenarios, hard to meet production decisions.',
    zh: '通用大模型在工业精密场景中的事实幻觉率高，难以满足生产与研发决策要求。'
  },
  'market-overseas': {
    en: 'Overseas Solutions Expensive',
    zh: '海外方案成本高'
  },
  'market-overseas-desc': {
    en: 'Traditional closed-source overseas solutions have high comprehensive costs, exceeding SME budget capacity.',
    zh: '传统海外闭源方案年综合使用及部署成本高，远超中小企业和机构预算承载力。'
  },

  // 产品部分
  'product-title': {
    en: 'Flagship: CodeAgent',
    zh: '首发标杆：CodeAgent'
  },
  'product-positioning': {
    en: 'Product Positioning',
    zh: '产品定位'
  },
  'product-vision': {
    en: 'CodeAgent is defined as China\'s first compliant, trust-controllable, fully localized programming tool enabling government and enterprise R&D processes, safety standards, and complex engineering tasks.',
    zh: 'CodeAgent 被定义为国内首款实现合规可控、信创全适配、全工程闭环的国产化编程工具，面向政企研发流程、安全规范和复杂工程任务。'
  },
  'product-feat1': {
    en: 'Full repository parsing and million-level code context understanding',
    zh: '全仓库解析与百万级代码上下文理解'
  },
  'product-feat2': {
    en: 'Autonomous terminal operation, automatic testing trigger, log capture and environment monitoring',
    zh: '自主终端操作、自动测试触发、日志抓取与环境监控'
  },
  'product-feat3': {
    en: 'Git workflow automation, conflict handling, PR generation and version rollback',
    zh: 'Git 流程自动化、冲突处理、PR 生成与版本回滚'
  },
  'product-feat4': {
    en: 'Automatic debug fixing and verification based on error logs',
    zh: '基于错误日志的自动调试修复和验证'
  },
  'product-localization': {
    en: 'Localization Adaptation',
    zh: '信创适配'
  },
  'product-localization-desc': {
    en: 'Deep compatibility with domestic OS, databases and chip architectures, full ecosystem support.',
    zh: '深度兼容国产操作系统、数据库与芯片架构，形成底层到应用的全生态支持。'
  },
  'product-security': {
    en: 'Security & Compliance',
    zh: '安全合规'
  },
  'product-security-desc': {
    en: 'Local storage, end-to-end desensitization, designed for compliance and sensitive system scenarios.',
    zh: '本地化存储、全程脱敏留痕，面向等保与涉密系统场景设计。'
  },
  'product-toolkit': {
    en: 'Enterprise Toolkit',
    zh: '政企工具箱'
  },
  'product-toolkit-desc': {
    en: 'Code migration assistance, automated auditing and risk scanning for complex R&D scenarios.',
    zh: '代码迁移辅助、自动化审计与风险扫描，适配复杂研发场景。'
  },

  // 融资部分
  'finance-title': {
    en: 'Financing Plan and Capital Allocation',
    zh: '融资方案与资金投向'
  },
  'finance-amount': {
    en: 'Financing Amount',
    zh: '融资金额'
  },
  'finance-amount-desc': {
    en: '$30M supporting large model and World Model R&D breakthrough.',
    zh: '3,000 万美金，支撑大模型和 World Model 的研发攻坚。'
  },
  'finance-equity': {
    en: 'Equity Release',
    zh: '出让股权'
  },
  'finance-equity-desc': {
    en: '10% shares, corresponding to $300M post-investment valuation in plan.',
    zh: '10% 股份，对应计划书中的投后估值 3 亿美金。'
  },
  'finance-valuation': {
    en: 'Valuation Projection',
    zh: '估值预期'
  },
  'finance-valuation-desc': {
    en: 'Plan projects 3-year revaluation to $1.2-1.5B, 5-year higher capital return space.',
    zh: '计划书预计 3 年可重估至 12-15 亿美金区间，5 年具备更高资本回报空间。'
  },

  // 创始人部分
  'founder-title': {
    en: 'Founder: He Shuwen',
    zh: '创始人：何书文'
  },
  'founder-edu': {
    en: 'Peking University Background',
    zh: '北京大学背景'
  },
  'founder-bio': {
    en: 'He Shuwen is founder of NeurX and S language. Inventor of AI-native programming language S, driving project landing with "commercial closure first, long-term barriers later" strategy.',
    zh: '何书文是 NeurX 与 S 语言的创始人。AI 原生编程语言 S 的发明人，并以"先商业化闭环、再长期壁垒"的路线推动项目落地。'
  },
  'founder-detail': {
    en: 'Detailed Introduction',
    zh: '详细介绍'
  },
  'founder-detail-p1': {
    en: 'He Shuwen integrates LLM, engineering Agent, World Model and language foundation into unified product roadmap, making NeurX not just training scripts but complete system from code execution to industry landing.',
    zh: '何书文负责将大模型、工程 Agent、World Model 与底层语言体系整合为统一产品路线，让 NeurX 不只是训练脚本，而是从代码执行、模型训练到行业落地的完整系统。'
  },
  'founder-detail-p2': {
    en: 'Founder & CEO, NeurX Founder, AI-native programming language S inventor, long-term focus on government/enterprise scenarios, engineering automation and underlying Runtime capability building.',
    zh: '创始人兼 CEO、NeurX 创始人、AI 原生编程语言 S 发明人，并长期聚焦政企场景、工程自动化与底层 Runtime 能力建设。'
  },

  // 研发中心部分
  'base-title': {
    en: 'Located in Zhongguancun Core, Aggregating Top Innovation Resources',
    zh: '坐落中关村核心，聚集顶尖创新资源'
  },
  'base-location': {
    en: 'Research Center Location',
    zh: '研发中心位置'
  },
  'base-location-desc': {
    en: 'Located in Zhongguancun core area, adjacent to Tsinghua and Peking University, providing excellent academic exchange and industrial resource opportunities.',
    zh: '研发中心坐落于北京中关村核心区域，毗邻清华大学、北京大学，汇聚国内顶尖创新资源。优越的地理位置为团队提供了充分的学术交流机会和产业链资源。'
  },
  'base-loc1': {
    en: 'Beijing Zhongguancun core area',
    zh: '北京中关村核心区域'
  },
  'base-loc2': {
    en: 'Adjacent to Tsinghua and Peking University',
    zh: '毗邻清华大学、北京大学'
  },
  'base-loc3': {
    en: 'Top innovation resources highly concentrated',
    zh: '顶尖创新资源高度聚集'
  },
  'base-team': {
    en: 'Core Team Background',
    zh: '核心团队背景'
  },
  'base-team-desc': {
    en: 'Core team graduated from Tsinghua and Peking University with rich R&D experience from ByteDance, Tencent, Alibaba, Baidu, JD.com and other leading tech companies.',
    zh: '核心团队毕业于清华大学、北京大学，并拥有来自字节跳动、腾讯、阿里巴巴、百度、京东等国内外领先科技企业的丰富研发经验。'
  },

  // 全球布局部分
  'global-title': {
    en: 'Global Development Strategy Covering China and Radiating Worldwide',
    zh: '全球化发展战略，覆盖全国、辐射全球'
  },
  'global-vision': {
    en: 'Global Vision',
    zh: '全球化愿景'
  },
  'global-vision-desc': {
    en: 'From day one, committed to global development strategy targeting world-leading AI technology company. Beijing as global R&D center, China-based, globally-focused.',
    zh: '自创业第一天起，我们便坚持全球化发展战略，以打造世界领先的人工智能技术企业为目标。公司以北京为全球研发中心，立足中国、面向全球。'
  },
  'global-plan': {
    en: 'Nationwide Expansion Plan',
    zh: '全国布局规划'
  },
  'global-plan-desc': {
    en: 'Continuous nationwide key city R&D and business layout, gradually establishing branches in provincial capitals, building nationwide R&D network radiating globally.',
    zh: '持续推进全国重点城市研发与业务布局，逐步在各省会城市设立分支机构，构建覆盖全国、辐射全球的研发与服务网络。'
  },

  // 页脚部分
  'footer-1': {
    en: 'NeurX Official Website · S Language · Business Plan Edition',
    zh: 'NeurX 官网 · S 语言 · 商业计划书版本'
  },
  'footer-2': {
    en: 'Founder: He Shuwen · Peking University',
    zh: '创始人：何书文 · 北京大学'
  },
  'footer-3': {
    en: 'Copyright © 2015-2026 NeurX 书文智能 All Rights Reserved',
    zh: '版权所有©2015-2026 NeurX 书文智能 保留所有权利'
  }
};

// 获取翻译文本
function t(key, lang = getCurrentLanguage()) {
  if (i18nDict[key] && i18nDict[key][lang]) {
    return i18nDict[key][lang];
  }
  // 如果翻译不存在，返回键名
  console.warn(`Translation key not found: ${key}`);
  return key;
}

// 获取当前语言
function getCurrentLanguage() {
  const lang = localStorage.getItem('language') || 'en';
  return lang;
}

// 设置语言
function setLanguage(lang) {
  localStorage.setItem('language', lang);
}
