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
          title: 'Full Stack Engineer (contract)',
          period: 'Aug 2026 — Nov 2026',
          location: '',
          highlights: [
            'Built Solana and EVM trading services for a platform that tracked 65,000 wallets. Implemented take-profit and stop-loss orders and integrated Privy wallet authentication.',
            'Indexed trades, transfers and launches for 30,000 meme tokens daily. Fixed attribution for delegated Solana swaps so wallet analytics credited the token owner.',
            'Built a Telegram trading bot and tracker for token developers’ trades, transfers and posts on X. Traders could buy or sell directly from alerts.',
          ],
        },
      ],
    },
    {
      company: 'Haqq Network',
      roles: [
        {
          title: 'Team Lead / Hands-on Fullstack Engineer',
          period: 'May 2024 — Jul 2026',
          location: '',
          highlights: [
            'Led five developers and worked with QA and DevOps to deliver a validator dashboard, on-chain governance and airdrop tools.',
            'Built Shogun, a Solana and EVM trading bot serving 50,000+ users. Reduced swap latency with direct RPC calls, quote management and regional routing.',
            'Built swap SDKs and transaction indexers across 8+ chains. Integrated Jupiter, Raydium, 1inch, ParaSwap and deBridge, and added Jito protection for Solana trades.',
            'Built asynchronous Rust services with idempotent writes and backpressure. Exposed trading data through REST and WebSocket APIs.',
          ],
        },
        {
          title: 'Senior Fullstack Engineer',
          period: 'Jun 2023 — May 2024',
          location: '',
          highlights: [
            'Built TotalSig, a multisignature browser wallet for Bitcoin, Ethereum and Tron, with cross-client signature approvals.',
            'Led multichain integrations and transaction analytics for Firoza Finance. Connected exchange APIs to the Unspent portfolio tracker.',
            'Built Tonchemy, a Telegram mini-app with about 240,000 registered users and 12,000 monthly active users. Wrote TON contracts for in-game tokens and NFTs.',
          ],
        },
      ],
    },
    {
      company: 'XDEFI Wallet (now Ctrl)',
      roles: [
        {
          title: 'Senior Frontend Developer, Blockchain & Web3 Wallets',
          period: 'Apr 2022 — May 2023',
          location: '',
          highlights: [
            'Built an in-wallet swap aggregator for a browser extension supporting 10+ networks. Led its migration from Manifest V2 to V3 and developed a reusable connector for hardware wallets and transaction signing.',
          ],
        },
      ],
    },
    {
      company: 'Ankr',
      roles: [
        {
          title: 'Team Lead',
          period: 'Oct 2021 — Apr 2022',
          location: '',
          highlights: [
            'Led three developers building explorers for 10+ networks. Deployed 50+ Solidity contracts across 5+ EVM chains for liquidity pools, staking and governance.',
          ],
        },
        {
          title: 'Senior Fullstack Developer',
          period: 'May 2021 — Oct 2021',
          location: '',
          highlights: [
            'Built liquidity pools for ONX Finance and integrated exchange protocols including Uniswap and SushiSwap.',
          ],
        },
      ],
    },
    {
      company: 'Santiment',
      roles: [
        {
          title: 'Senior Blockchain Developer',
          period: 'Jun 2019 — May 2021',
          location: '',
          highlights: [
            'Built React dashboards for hundreds of market and on-chain metrics. Streamed exchange deposits and withdrawals into trader dashboards using GraphQL and WebSockets.',
          ],
        },
      ],
    },
    {
      company: 'Usedesk',
      roles: [
        {
          title: 'Fullstack PHP / React / Vue Developer (part-time)',
          period: 'Sep 2018 — Mar 2020',
          location: '',
          highlights: [
            'Built chat widgets, a messaging broker and CRM APIs for a support platform used by Aviasales and Skyeng.',
          ],
        },
      ],
    },
    {
      company: 'Ambaha IT-Solutions',
      roles: [
        {
          title: 'Fullstack Developer (.NET / Angular) / DevOps',
          period: 'Sep 2016 — Jun 2018',
          location: '',
          highlights: [
            'Integrated wallets, payments and identity verification for exchange clients. Rebuilt Think Ministry’s payments and donations CRM in .NET and Angular and developed sports-data services for LSports.',
          ],
        },
      ],
    },
    {
      company: 'Polis24',
      roles: [
        {
          title: 'Software Engineer (Full Stack)',
          period: 'Sep 2015 — Oct 2016',
          location: '',
          highlights: ['Built payment terminal software, operator dashboards and Scala services for processing insurance payments.'],
        },
      ],
    },
    {
      company: 'Freelance software development',
      roles: [
        {
          title: 'Self-employed Software Engineer',
          period: 'Feb 2013 — Nov 2015',
          location: '',
          highlights: ['Built a mobile bookstore app, warehouse inventory systems and an internal CRM for freelance work.'],
        },
      ],
    },
    {
      company: 'BARS Group',
      roles: [
        {
          title: 'ASP.NET / Ext JS Developer (part-time)',
          period: 'Oct 2014 — Jun 2015',
          location: '',
          highlights: ['Built C# modules for budget reporting, SQL migrations and stored procedures in Oracle and PostgreSQL.'],
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
    institution: 'State University',
    degree: "Bachelor’s degree in Computer and Information Systems Security",
    period: '2012 — 2016',
  },

  languages: [
    { name: 'English', level: 'Full professional proficiency' },
    { name: 'Russian', level: 'Native' },
  ] as Language[],
};
