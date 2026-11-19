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
  title: 'Senior Fullstack / Backend Engineer · Rust, TypeScript, React · Trading & Web3',

  summary: [
    'Software engineer with 13+ years of experience, focused on crypto trading, wallets and on-chain data. I build execution services and indexers in Rust and Node.js, and the React interfaces traders use to work with them.',
    'Previously at Ankr, XDEFI (now Ctrl) and Santiment. Led teams of 5–7 engineers and improved trading infrastructure serving 50k+ users. I stay hands-on with architecture, implementation and production support.',
  ],

  achievements: [
    { metric: '13+', label: 'Years in engineering' },
    { metric: '50k+', label: 'Shogun bot users' },
    { metric: '3×', label: 'Faster trade execution' },
    { metric: '$6.27B+', label: 'Cross-chain swap volume' },
    { metric: '65k', label: 'Unique wallets on Trady' },
    { metric: '30k', label: 'Meme tokens indexed daily' },
  ] as Achievement[],

  projects: [
    {
      name: 'Trady',
      url: 'https://trady.xyz',
      description: 'Developed a trading platform used by 65k unique wallets, with on-chain indexers processing 30k meme tokens per day.',
    },
    {
      name: 'SilentSwap',
      url: 'https://app.silentswap.com',
      description: 'Built swap SDKs and infrastructure for a private cross-chain aggregator with $6,277,281,453 in swap volume.',
    },
    {
      name: 'TotalSig',
      url: 'https://totalsig.com',
      description: 'Built a multisig wallet from scratch for Bitcoin, Ethereum and Tron, including cross-client signature approval flows.',
    },
  ] as Project[],

  experience: [
    {
      company: 'trady.xyz · Meme & social trading',
      roles: [
        {
          title: 'Fullstack / Backend Engineer',
          period: 'Aug 2026 — Present',
          location: '',
          highlights: [
            'Develop the trading engine and order execution for Trady, a platform used by 65k unique wallets. Support trading on Solana and EVM networks, including take-profit and stop-loss orders.',
            'Develop on-chain indexers that process trades, transfers and launches for 30k meme tokens per day. Build trading signals from indexed data and X activity.',
            'Build Telegram bots for trading, developer-wallet monitoring, X alerts, and wallet/sniper tracking.',
            'Develop wallet overviews, P&L calculations and tools to identify linked accounts, bot/farm activity, and unusual developer buys, sells and transfers; analyze liquidity pools and trading strategies.',
            'Integrate Privy authentication through multiple providers and cross-chain swaps.',
          ],
          stack: 'Rust, Node.js, React, ClickHouse, Redis, Kubernetes; Claude Code / OpenCode',
        },
      ],
    },
    {
      company: 'Haqq Network',
      roles: [
        {
          title: 'Staff Engineer / Team Lead',
          period: 'May 2024 — Jul 2026',
          location: '',
          highlights: [
            'Led a remote team of 5–7 engineers delivering trading bots, cross-chain swaps and Web3 applications.',
            'Made Shogun trade execution 3× faster for 50k+ users through direct RPC calls, quote management and regional latency optimization.',
            'Built async Rust/Tokio services and EVM/Solana indexers with at-least-once processing, idempotent writes, backpressure and graceful shutdown.',
            'Integrated Jupiter, Raydium, 1inch, Paraswap and deBridge across 8+ chains, including swap SDKs, gas refuel and Jito/MEV protection.',
            'Built REST and WebSocket APIs for React trading interfaces, with typed clients and OpenAPI contracts.',
          ],
          stack: 'Rust/Tokio, TypeScript, Node.js/Bun, React/Next.js, PostgreSQL, Redis, ClickHouse, gRPC, WebSockets, RabbitMQ, GCP/AWS',
        },
        {
          title: 'Senior Fullstack Engineer',
          period: 'Jun 2023 — May 2024',
          location: '',
          highlights: [
            'Built multisig wallets, portfolio trackers and DeFi integrations across EVM, Bitcoin, Cosmos and TON.',
            'Scaled Tonchemy, a Telegram mini-app, to ~240k registered users (~12k MAU); wrote TON contracts for NFTs and jettons.',
          ],
        },
      ],
    },
    {
      company: 'XDEFI Wallet (now Ctrl)',
      roles: [
        {
          title: 'Senior Fullstack Engineer',
          period: 'Apr 2022 — May 2023',
          location: '',
          highlights: [
            'Built swap, staking and portfolio features for a browser-extension wallet supporting 10+ networks, including an in-wallet swap aggregator.',
            'Led the Manifest V2 → V3 migration and built a reusable wallet connector with hardware-wallet support, signing and nonce management.',
          ],
        },
      ],
    },
    {
      company: 'Ankr',
      roles: [
        {
          title: 'Senior Fullstack Engineer → Team Lead',
          period: 'May 2021 — Apr 2022',
          location: '',
          highlights: [
            'Led 3 engineers building blockchain explorers and indexing/data layers for 10+ networks.',
            'Deployed 50+ Solidity contracts across 5+ EVM chains for liquidity, staking and governance; built DeFi integrations for Onx.Finance.',
          ],
        },
      ],
    },
    {
      company: 'Santiment',
      roles: [
        {
          title: 'Senior Fullstack Engineer',
          period: 'Jun 2019 — May 2021',
          location: '',
          highlights: [
            'Built charting components and dashboards for app.santiment.net, exposing hundreds of on-chain and market metrics, signals and alerts.',
            'Developed real-time CEX deposit/withdrawal tracking and data integrations over GraphQL and WebSockets.',
          ],
        },
      ],
    },
    {
      company: 'Earlier experience',
      roles: [
        {
          title: 'Fullstack Engineer · Usedesk',
          period: 'Sep 2018 — Mar 2020',
          location: '',
          highlights: ['Built real-time messaging widgets, a chat broker and CRM APIs for customers including Aviasales and Skyeng. React, Vue, PHP, WebSockets.'],
        },
        {
          title: 'Software Engineer · Ambaha, Polis24, BARS Group & freelance',
          period: '2013 — 2018',
          location: '',
          highlights: ['Delivered sports-data services, payment-terminal software, CRMs and reporting systems. C#/.NET, JavaScript, Angular, Scala, SQL.'],
        },
      ],
    },
  ] as ExperienceEntry[],

  skills: [
    {
      category: 'Core',
      skills: ['Rust / Tokio / async', 'TypeScript / Node.js', 'React / Next.js', 'SQL', 'Solidity'],
    },
    {
      category: 'Data & backend',
      skills: ['PostgreSQL', 'ClickHouse', 'Redis', 'Kafka / RabbitMQ', 'REST / OpenAPI', 'gRPC / WebSockets', 'On-chain indexers'],
    },
    {
      category: 'Trading & Web3',
      skills: ['Solana / EVM / Bitcoin / Tron / Sui / Cosmos', 'Order execution', 'DEX / cross-chain swaps', 'Wallets / Privy', 'MEV / Jito', 'P&L analytics'],
    },
    {
      category: 'Delivery',
      skills: ['Kubernetes / Docker', 'AWS / GCP', 'CI/CD', 'Prometheus / Grafana', 'Jest / Playwright', 'Claude Code / OpenCode'],
    },
  ] as SkillGroup[],

  education: {
    institution: 'Kazan State University',
    degree: "Bachelor’s degree, Computer and Information Systems Security",
    period: '2012 — 2016',
  },

  languages: [
    { name: 'English', level: 'Full Professional' },
    { name: 'Russian', level: 'Native' },
  ] as Language[],
};
