export interface Role {
  title: string;
  period: string;
  location: string;
  highlights: string[];
  stack?: string;
}

export interface ExperienceEntry {
  company: string;
  totalDuration?: string;
  roles: Role[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Language {
  name: string;
  level: string;
}

export interface Achievement {
  metric: string;
  label: string;
}

export interface Project {
  name: string;
  url: string;
  description: string;
}

export const resumeData = {
  name: 'Rinat Fihtengolts',
  title: 'Senior Fullstack Engineer | TypeScript End-to-End · React Trading UIs · Node/Bun Services | WebSockets, REST/OpenAPI, PostgreSQL, Redis, Kafka | Web3: EVM/Solana/Cosmos, viem/ethers · Rust',
  location: 'Dubai, UAE',

  contact: {
    telegram: 'https://t.me/rfihtengolts',
    email: 'rinatficht@gmail.com',
    linkedin: 'https://www.linkedin.com/in/rfihtengolts',
    github: 'https://github.com/GarageInc',
  },

  summary: [
    'Senior Fullstack Engineer with 11+ years of experience, deeply specialized in TypeScript across both frontend and backend, building real-time trading and fintech products end-to-end.',
    'Own features from React trading UIs fed by live WebSocket order books and price feeds, through the REST/WebSocket API contracts, event-driven ingestion pipelines, and PostgreSQL/Redis data layers behind them.',
    'Comfortable in small, fully remote teams with high ambiguity — rapid prototyping, rigorous testing and CI quality gates, and a bias for shipping. Web3-native: on-chain indexing, smart-contract ↔ off-chain bridging, and client-side wallet integration.',
  ],

  highlights: [
    'Built React trading interfaces driven by live WebSocket streams — order books, price feeds, execution status — optimized for lag-free rendering under heavy market data load',
    'Designed and shipped TypeScript backend services (Node/NestJS): REST + WebSocket APIs, background workers, and event-driven pipelines ingesting pricing and account data',
    'Built EVM/Solana transaction indexers and parsers bridging on-chain events into off-chain services, backed by PostgreSQL, Redis caching/pub-sub, and ClickHouse analytics',
    'Scaled @ShogunSwapBot / @ShogunTradingBot to 50k+ users with 3x faster execution by replacing third-party APIs with direct RPC calls and a quotes-management layer',
    'Delivered trading terminals, DEX aggregators, white-label CEX/DEX systems, and cross-chain dApps across 8+ chains — from scratch to production, with unit/integration/E2E coverage',
  ],

  achievements: [
    { metric: '11+', label: 'Years Fullstack Engineering' },
    { metric: '50k+', label: 'Users — Shogun Trading Bot' },
    { metric: '$6M+', label: 'Cross-chain Swap Volume' },
    { metric: '8+', label: 'Chains in Production' },
  ] as Achievement[],

  projects: [
    {
      name: 'app.silentswap.com',
      url: 'https://app.silentswap.com',
      description: 'Private cross-chain swap aggregator — React app over real-time quote streams, $6M+ volume across 8+ chains.',
    },
    {
      name: 'haqq.network',
      url: 'https://haqq.network',
      description: 'Cosmos + EVM ecosystem: staking/validator dashboards, DAO governance modules, and shariah-compliant DeFi front ends.',
    },
    {
      name: 'ctrl.xyz',
      url: 'https://ctrl.xyz',
      description: 'Multichain browser-extension wallet (formerly XDEFI) — in-wallet swap aggregator, MV2→MV3 migration, wallet-connector library.',
    },
    {
      name: 'ankrscan.io',
      url: 'https://ankrscan.io',
      description: 'Multi-chain blockchain explorer — indexed event data and optimized fetch paths for real-time tracking across 10+ networks.',
    },
    {
      name: 'app.santiment.net',
      url: 'https://app.santiment.net',
      description: '"Bloomberg for crypto traders" — custom charting/UI library, hundreds of live on-chain metrics, signals and alerting.',
    },
    {
      name: 'riskoff.ai',
      url: 'https://riskoff.ai',
      description: 'AI-assisted market risk analytics — LLM/RAG pipelines over market and on-chain data feeding a React dashboard.',
    },
    {
      name: 'usedesk.com',
      url: 'https://usedesk.com',
      description: 'SaaS support platform — real-time React messaging widgets, socket-proxy chat broker, public/internal APIs.',
    },
    {
      name: 'lsports.eu',
      url: 'https://lsports.eu',
      description: 'Sports-data CRM and bet aggregator/validator — queue-driven services processing high-volume third-party feeds.',
    },
    {
      name: 'thinkministry.com',
      url: 'https://thinkministry.com',
      description: 'Fullstack product delivery — web platform build-out, API integrations, and front-end performance work.',
    },
  ] as Project[],

  experience: [
    {
      company: 'Haqq Network',
      totalDuration: '3 years 1 month',
      roles: [
        {
          title: 'Senior Fullstack Engineer (Team Lead)',
          period: 'May 2024 — Present',
          location: 'Dubai, UAE',
          highlights: [
            'Lead a fully remote, cross-functional team of 7 engineers plus QA and DevOps, owning Web3 product delivery end-to-end — React frontends, TypeScript services, and the data layer between them.',
            'Built and maintained React trading/swap UIs consuming live WebSocket quote and price streams; optimized rendering and state management to stay lag-free under heavy market-data load.',
            'Owned REST and WebSocket API contracts between frontend and Node.js/Bun services (NestJS), publishing OpenAPI/AsyncAPI specs, generating typed clients, and keeping the API documentation current.',
            'Delivered event-driven pipelines ingesting pricing, quote and account data over Kafka/Google Pub-Sub, plus an EVM/Solana transaction indexer/parser bridging on-chain events into off-chain services (PostgreSQL via Prisma, Redis caching and pub/sub, ClickHouse).',
            'Scaled @ShogunTradingBot / @ShogunSwapBot 3x for 50,000+ active users by replacing third-party APIs with direct RPC calls, adding a quotes-management system and region-level latency optimization.',
            'Integrated Jupiter, Raydium, Paraswap, 1inch and deBridge across 8+ chains; built swap SDKs, fee/gas-refuel logic, Jito/MEV protection and Turnkey social-login auth.',
            'Upheld CI quality gates across frontend and backend — Jest/Vitest unit and integration suites plus Playwright end-to-end coverage, enforced code review standards, and Grafana/Prometheus/Datadog observability with structured Winston logging.',
            'Built AI agents that parse on-chain and market data, fetch context, decide and trigger actions (buy/sell/notify) — RAG + LangChain + MCP pipelines, not scripts.',
          ],
          stack: 'TypeScript, React, Next.js, Node.js/Bun, NestJS, WebSockets, Kafka/Pub-Sub, PostgreSQL/Prisma, Redis, ClickHouse, Playwright, Rust, Go, Docker, GCP/AWS, LangChain/MCP',
        },
        {
          title: 'Senior Fullstack Engineer',
          period: 'Jun 2023 — May 2024',
          location: 'Dubai, UAE',
          highlights: [
            'Architected a multi-signature Web3 wallet (totalsig.com) for Bitcoin, Ethereum and Tron from scratch — React client, TypeScript backend, and secp256k1/ECDSA cross-client signature approval flows.',
            'Built DeFi liquidity-pool integrations for Firoza.finance: multi-chain data ingestion, KYC flows, and ETL transaction processing with stablecoin analytics over PostgreSQL (Prisma).',
            'Implemented real-time portfolio-tracking dApps across EVM/BTC/Cosmos, integrating CEX APIs (Binance, OKX) over REST and WebSocket feeds with GPT-4-assisted forecasting.',
            'Scaled @TonchemyBot, a Telegram mini-app on TON, to ~240k registered users (~12k MAU); wrote Func contracts for minting/burning NFTs and jettons.',
          ],
          stack: 'TypeScript, React, Next.js, Node.js, wagmi/ethers/viem, @solana/web3.js, Anchor, Cosmos SDK, TON/Func, PostgreSQL, Redis, GCP/AWS',
        },
      ],
    },
    {
      company: 'XDEFI Wallet (now Ctrl)',
      roles: [
        {
          title: 'Senior Fullstack Engineer — Web3 Wallets',
          period: 'Apr 2022 — May 2023',
          location: 'Greater London, UK',
          highlights: [
            'Owned component architecture and state management for a multichain browser-extension wallet (ctrl.xyz) used for swaps, staking and portfolio tracking across 10+ networks.',
            'Reverse-engineered Uniswap, SushiSwap, LayerZero and Wormhole to implement a unified in-wallet swap aggregator with live quote comparison.',
            'Led the mission-critical Manifest V2 → V3 migration, re-architecting background/service-worker messaging while preserving performance and security guarantees.',
            'Built a standalone multi-wallet connector library (hardware-wallet support, address derivation, signing, indexer access, nonce management) to streamline dApp integrations, covered by Jest unit tests and Playwright end-to-end suites in CI.',
          ],
          stack: 'TypeScript, React, ethers.js/viem, web3.js, WebExtension APIs, Node.js, Jest/Playwright',
        },
      ],
    },
    {
      company: 'Ankr',
      totalDuration: '1 year',
      roles: [
        {
          title: 'Team Lead',
          period: 'Oct 2021 — Apr 2022',
          location: '',
          highlights: [
            'Built multi-chain blockchain explorers (ankrscan.io), designing indexing and data-fetch layers for real-time tracking across 10+ networks; managed a team of 3 engineers.',
            'Deployed 50+ Solidity contracts for DEX liquidity, staking rewards and governance across 5+ EVM chains, with subgraph/Subsquid indexers feeding the frontends.',
            'Designed high-yield DeFi strategies by analyzing SushiSwap and TraderJoe, improving capital efficiency for the ONX.finance ecosystem.',
            'Co-built a P2E NFT game (Moonbeam/Arbitrum) including cross-chain asset bridges and the off-chain services backing them.',
          ],
          stack: 'TypeScript, React, Next.js, Node.js, ethers.js/web3.js, Solidity, The Graph, Subsquid, PostgreSQL',
        },
        {
          title: 'Senior Fullstack Developer',
          period: 'May 2021 — Oct 2021',
          location: 'San Francisco Bay Area',
          highlights: [
            'Core developer for cross-chain liquidity providers and liquidity pools at Onx.Finance.',
            'Built Web3 interfaces and integrations with Sushi, Uniswap, Quickswap, TraderJoe and Lydia Finance pools.',
          ],
          stack: 'React, TypeScript, ethers.js, Next.js, Solidity',
        },
      ],
    },
    {
      company: 'Santiment',
      roles: [
        {
          title: 'Senior Fullstack Engineer — Trading Analytics',
          period: 'Jun 2019 — May 2021',
          location: 'Switzerland',
          highlights: [
            'Built the charting and UI library behind app.santiment.net — the "Bloomberg for crypto traders" — delivering pixel-perfect SVG/Canvas visualizations of dense real-time market data.',
            'Integrated hundreds of on-chain and market metrics into consumer-facing dashboards, signals and alerting, over GraphQL and WebSocket subscriptions.',
            'Developed high-frequency tracking of CEX deposits and withdrawals via persistent socket connections, plus the APIs and KYC integrations serving that data.',
          ],
          stack: 'React, TypeScript, GraphQL, WebSockets, SVG/Canvas charts, Python, PHP, PostgreSQL',
        },
      ],
    },
    {
      company: 'Usedesk',
      roles: [
        {
          title: 'Fullstack Engineer (React / Vue / PHP)',
          period: 'Sep 2018 — Mar 2020',
          location: 'Moscow, Russia',
          highlights: [
            'Built real-time React messaging widgets and the public/internal APIs powering CRM integrations for aviasales.ru, skyeng.ru, docdoc.ru and others.',
            'Implemented cobrowsing (session sync and tracking) and a socket-proxy service brokering real-time chat traffic at scale.',
            'Cut page-load times across enterprise customer platforms by replacing server-rendered views with React/Vue components and profiling the render path.',
          ],
          stack: 'PHP, React, Vue, TypeScript, WebSockets, REST APIs, PostgreSQL',
        },
      ],
    },
    {
      company: 'Ambaha IT-Solutions',
      roles: [
        {
          title: 'Fullstack Engineer — .NET / Angular / DevOps',
          period: 'Sep 2016 — Jun 2018',
          location: 'St. Petersburg, Russia',
          highlights: [
            'Built a CRM for collecting and analyzing tickets/signals (.NET MVC + Angular + WCF) for lsports.eu.',
            'Wrote an aggregator/validator of sports bets with a web interface for composing boolean rules in human language, syncing data from third-party APIs.',
            'Designed the backend as queue-driven WCF services plus REST endpoints for high-volume incoming feeds.',
          ],
          stack: '.NET MVC, C#, Angular, WCF, REST, PostgreSQL',
        },
      ],
    },
    {
      company: 'Polis24',
      roles: [
        {
          title: 'Software Engineer (Fullstack)',
          period: 'Sep 2015 — Oct 2016',
          location: 'Kazan, Russia',
          highlights: [
            'Developed UI/UX for payment terminals (polis24.ru): policy registration, payment acceptance and issuance, integrating hardware and user interaction.',
            'Built operator, technician and administrator panels with financial-transaction reporting.',
            'Developed Scala microservices processing data streamed from payment terminals.',
          ],
          stack: 'ActionScript, Python, C++, JavaScript, Scala, bash',
        },
      ],
    },
    {
      company: 'GarageInc',
      roles: [
        {
          title: 'Self-Employed Software Engineer',
          period: 'Feb 2013 — Nov 2015',
          location: 'Kazan, Russia',
          highlights: [
            'Founded a software studio delivering fullstack products for clients — CRMs, warehouse-accounting systems, mobile apps, a freelance exchange, and web platforms including thinkministry.com.',
            'Built crypto exchanges and trading platforms (qoden.com, gcox.com, bitkonan.com, sugarexchange.io): order matching, wallets, payment services, KYC, token integrations and trading bots.',
            'Implemented cryptography (elliptic curves, protocol emulation), search algorithms (n-grams, Levenshtein, Huffman) and TCP/IP/UDP-stack projects (chats, multi-threaded ws/ftp servers, crawlers).',
          ],
          stack: 'C#/.NET, Angular, JavaScript, C++, cryptography, PostgreSQL',
        },
      ],
    },
    {
      company: 'BARS GROUP',
      roles: [
        {
          title: 'ASP.NET + Ext.js Developer',
          period: 'Oct 2014 — Jun 2015',
          location: 'Kazan, Russia',
          highlights: [
            'Developed and supported budget-reporting web applications on ASP.NET MVC, writing server-side C# modules following OOP/design principles.',
            'Refactored and optimized existing modules; integrated third-party systems via WCF; extended the client side with jQuery and ExtJS 3.',
            'Designed database schemas, migrations, queries, views and stored procedures (Oracle, PostgreSQL) via NHibernate; configured CI and test-server deployments.',
          ],
          stack: 'ASP.NET MVC, C#, ExtJS 3, jQuery, WCF, Oracle, PostgreSQL, NHibernate',
        },
      ],
    },
  ] as ExperienceEntry[],

  skills: [
    {
      category: 'Languages',
      skills: [
        'TypeScript', 'JavaScript', 'Rust', 'Go', 'Python', 'Solidity',
        'C#/.NET', 'PHP', 'C++', 'Scala', 'SQL',
      ],
    },
    {
      category: 'Frontend',
      skills: [
        'React (hooks, context)', 'Next.js', 'State Management', 'Real-time UIs',
        'Rendering Performance', 'Responsive Design', 'SVG/Canvas Charting',
        'Tailwind CSS', 'Svelte 5', 'Vue', 'Angular',
      ],
    },
    {
      category: 'Backend & APIs',
      skills: [
        'Node.js', 'Bun', 'NestJS', 'REST / OpenAPI', 'WebSocket Servers / AsyncAPI',
        'GraphQL', 'Background Workers', 'Prisma / TypeORM', 'Rust Services',
      ],
    },
    {
      category: 'Data & Real-Time Infrastructure',
      skills: [
        'PostgreSQL', 'Redis (cache & pub/sub)', 'Event-Driven Pipelines',
        'Kafka / Google Pub-Sub', 'ClickHouse', 'MongoDB', 'ETL & Ingestion',
        'The Graph', 'Subsquid', 'Blockchain Indexers',
      ],
    },
    {
      category: 'Testing, Quality & Observability',
      skills: [
        'Unit / Integration / E2E', 'Jest / Vitest', 'Playwright / Cypress',
        'CI Quality Gates', 'Code Review Standards', 'Grafana', 'Prometheus',
        'Datadog', 'Structured Logging (Winston)',
      ],
    },
    {
      category: 'Trading & Fintech',
      skills: [
        'Order Books & Price Feeds', 'Trade Execution Flows', 'DEX Aggregators',
        'Algorithmic Trading', 'Market Making', 'HFT', 'CEX Integrations',
        'LP Pools', 'Staking', 'Governance', 'Payments & KYC',
      ],
    },
    {
      category: 'Blockchain & Web3',
      skills: [
        'Ethereum / L2', 'Solana', 'Cosmos SDK', 'Tron', 'BTC (PSBT)', 'TON', 'Monero',
        'ethers.js', 'viem', 'wagmi', '@solana/web3.js', '@reown/appkit',
        'Wallet Integration', 'Smart Contracts', 'Cross-chain Bridges', 'MEV / Jito',
      ],
    },
    {
      category: 'Infrastructure & AI',
      skills: [
        'AWS', 'GCP', 'Docker', 'CI/CD', 'AI Agents', 'RAG', 'LangChain', 'MCP',
        'OpenAI / GPT-4', 'Llama', 'Vector Search',
      ],
    },
    {
      category: 'Security',
      skills: [
        'Smart Contract Security', 'Audit Readiness (Hacken, CertiK)',
        'Cryptographic Protocols (secp256k1, ECDSA)', 'Access Control Patterns',
        'Information Security',
      ],
    },
  ] as SkillGroup[],

  education: {
    institution: 'Kazan State University',
    degree: "Bachelor's degree, Computer and Information Systems Security / Information Assurance",
    period: '2012 — 2016',
  },

  languages: [
    { name: 'English', level: 'Full Professional' },
    { name: 'Russian', level: 'Native or Bilingual' },
  ] as Language[],
};
