export interface Role {
  title: string;
  period: string;
  location: string;
  highlights: string[];
  stack?: string;
}

export interface ExperienceEntry {
  company: string;
  url?: string;
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

export const resumeData = {
  title: 'Staff Backend Engineer | Forward Deployed Engineer',

  summary: [
    'I build trading systems in Rust and TypeScript. I cut Shogun trade execution from 1.5 seconds to 0.1–0.2 seconds (100–200 ms). In 13+ years of software engineering, I’ve integrated payments for exchange operators and led a distributed team of 5–7 at Haqq Network.',
  ],

  experience: [
    {
      company: 'Trady',
      url: 'https://trady.xyz',
      roles: [
        {
          title: 'Full Stack / Backend Engineer',
          period: 'Aug 2026 — Present',
          location: '',
          highlights: [
            'Build Solana and Ethereum Virtual Machine (EVM) trading services for Trady, a platform that tracks 65,000 wallets. Implement take-profit and stop-loss orders.',
            'Index trades, transfers and launches for 30,000 meme tokens daily. Combine on-chain events with activity on X to generate trading signals and Telegram alerts.',
            'Fixed attribution for delegated Solana swaps, including multi-hop trades, so wallet analytics credit the token owner when another account signs the transaction.',
            'Build wallet analytics for profit and loss (P&L), linked accounts and unusual developer trades. Integrate Privy authentication and cross-chain swaps for React trading screens and Telegram bots.',
          ],
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
            'Led a distributed team across engineering, QA and operations to deliver a validator dashboard, on-chain governance and airdrop tools.',
            'Built asynchronous Rust services and blockchain indexers with idempotent writes, backpressure and graceful shutdown. Exposed trading data through REST and WebSocket APIs with typed clients.',
          ],
        },
        {
          title: 'Senior Full Stack Engineer',
          period: 'Jun 2023 — May 2024',
          location: '',
          highlights: [
            'Built multisig wallets, portfolio trackers and DeFi integrations across EVM, Bitcoin, Cosmos and TON.',
            'Scaled Tonchemy, a Telegram mini-app, to about 240,000 registered users and 12,000 monthly active users. Wrote TON contracts for in-game NFTs and tokens.',
          ],
        },
      ],
    },
    {
      company: 'Intensity Labs',
      roles: [{
        title: 'Senior Blockchain Developer (consulting)',
        period: 'Jun 2024 — Jul 2025',
        location: '',
        highlights: [
          'Replaced third-party API calls with direct RPC requests and tuned quote handling and regional routing to cut execution latency for Shogun’s 50,000+ users.',
          'Built swap SDKs and transaction indexers across 8+ chains, integrating Jupiter, Raydium, 1inch, ParaSwap and deBridge. Added fee calculation, gas refills and Jito protection for Solana trades.',
        ],
      }],
    },
    {
      company: 'TotalSig',
      url: 'https://totalsig.com',
      roles: [{
        title: 'Co-founder / Full Stack Developer',
        period: 'May 2023 — Oct 2023',
        location: '',
        highlights: ['Built a non-custodial multisignature browser wallet from scratch for Bitcoin, Ethereum and Tron. Implemented cross-client signature approvals using secp256k1 ECDSA.'],
      }],
    },
    {
      company: 'XDEFI Wallet (now Ctrl)',
      roles: [
        {
          title: 'Senior Full Stack Engineer',
          period: 'Dec 2021 — May 2023',
          location: '',
          highlights: [
            'Built swap, staking and portfolio features for a browser-extension wallet supporting 10+ networks, including an in-wallet swap aggregator.',
            'Led the Manifest V2 to V3 migration and built a reusable wallet connector with hardware-wallet support, signing and nonce management.',
          ],
        },
      ],
    },
    {
      company: 'Ankr',
      roles: [
        {
          title: 'Senior Full Stack Engineer, promoted to Team Lead',
          period: 'May 2021 — Apr 2022',
          location: '',
          highlights: [
            'Led 3 engineers building blockchain explorers and indexing/data layers for 10+ networks.',
            'Deployed 50+ Solidity contracts across 5+ EVM chains for liquidity, staking and governance. Built DeFi integrations for Onx.Finance.',
          ],
        },
      ],
    },
    {
      company: 'Santiment',
      roles: [
        {
          title: 'Senior Full Stack Engineer',
          period: 'Jun 2019 — May 2021',
          location: '',
          highlights: [
            'Built React charts, dashboards and alerts for hundreds of on-chain and market metrics.',
            'Streamed exchange deposits and withdrawals into trader dashboards using GraphQL and WebSockets.',
          ],
        },
      ],
    },
    {
      company: 'Usedesk',
      roles: [
        {
          title: 'Full Stack Engineer (part-time consulting)',
          period: 'Sep 2018 — Mar 2020',
          location: '',
          highlights: ['Built real-time chat widgets, a messaging broker and CRM APIs in React, Vue and PHP for customers including Aviasales and Skyeng.'],
        },
      ],
    },
    {
      company: 'Studio Mobile',
      roles: [{
        title: 'Full Stack Engineer',
        period: 'Oct 2018 — May 2019',
        location: '',
        highlights: ['Adapted trading platforms for exchange operators. Integrated wallets, payments and identity verification, customized order matching and automated deployments on AWS.'],
      }],
    },
    {
      company: 'Earlier experience',
      roles: [
        {
          title: 'Software Engineer | Ambaha, Polis24, BARS Group & freelance',
          period: '2013 — 2018',
          location: '',
          highlights: ['Rebuilt Think Ministry’s CRM in .NET and Angular around its recurring payments and donations workflows. Delivered sports-data services, payment-terminal software and financial reporting systems using C#, Scala and SQL.'],
        },
      ],
    },
  ] as ExperienceEntry[],

  skills: [
    { category: 'Languages', skills: ['Rust (Tokio)', 'TypeScript', 'JavaScript', 'SQL', 'Solidity'] },
    { category: 'APIs & data', skills: ['Node.js', 'REST', 'OpenAPI', 'gRPC', 'WebSockets', 'PostgreSQL', 'ClickHouse', 'Redis', 'Kafka', 'RabbitMQ'] },
    { category: 'Infrastructure', skills: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'CI/CD', 'Prometheus', 'Grafana'] },
    { category: 'Frontend & testing', skills: ['React', 'Next.js', 'Jest', 'Playwright'] },
  ] as SkillGroup[],

  education: {
    institution: 'Kazan State University',
    degree: "Bachelor’s degree in Computer and Information Systems Security",
    period: '2012 — 2016',
  },

  languages: [
    { name: 'English', level: 'Full professional proficiency' },
    { name: 'Russian', level: 'Native' },
  ] as Language[],
};
