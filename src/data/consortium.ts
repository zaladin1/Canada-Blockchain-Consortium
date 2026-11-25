export const siteImages = {
  logo: '/images/cbc/cbc-logo.png',
  heroBg: '/images/cbc/hero-testc.jpg',
  chaosToClarity: '/images/cbc/chaos-to-clarity.png',
  government: '/images/cbc/government.jpg',
  missionWave: '/images/cbc/mission-wave.jpg',
  missionBitcoinWood: '/images/cbc/mission-bitcoin-wood.jpg',
  missionEvent1: '/images/cbc/mission-event-1.jpg',
  missionEvent2: '/images/cbc/mission-event-2.jpg',
  missionEvent3: '/images/cbc/mission-event-3.jpg',
  missionEvent4: '/images/cbc/mission-event-4.jpg',
  wardenLogo: '/images/cbc/warden-logo.png',
  clouds: '/images/cbc/clouds.png',
  report2025: '/images/cbc/report-2025.png',
  briefHill: '/images/cbc/brief-hill.jpg',
  briefCanadaBlue: '/images/cbc/brief-canada-blue.jpg',
  briefServer: '/images/cbc/brief-server.jpg',
  briefCity: '/images/cbc/brief-city.jpg',
};

export interface Pillar {
  number: string;
  title: string;
  summary: string;
  detail: string;
}

export const whatWeDoPillars: Pillar[] = [
  {
    number: '01',
    title: 'Advocacy',
    summary: 'Direct engagement with federal and provincial governments.',
    detail:
      'We work with all levels of government across Canada to engage in meaningful policy conversations that will drive Bitcoin adoption and support the growth of Canada’s digital asset industry.',
  },
  {
    number: '02',
    title: 'Convening',
    summary: 'High-impact national summits and regulatory forums.',
    detail:
      'We host high-impact events across the country that bring together government, regulators, and industry leaders to build relationships, spark impactful conversations, and address regulatory and policy issues affecting industry growth.',
  },
  {
    number: '03',
    title: 'Policy Development & Research',
    summary: 'Evidence-based white papers and regulatory briefs.',
    detail:
      'We develop policy positions on behalf of the industry and produce research papers to help better inform regulators and policymakers, ensuring Canada remains a leader in responsible innovation.',
  },
  {
    number: '04',
    title: 'Community Engagement',
    summary: 'Grassroots financial and energy education nationwide.',
    detail:
      'We support a grassroots movement to educate everyday Canadians on Bitcoin’s exponential value in both the financial and energy sectors, empowering citizens to understand and participate in Canada’s digital economic future.',
  },
  {
    number: '05',
    title: 'Trade Missions',
    summary: 'Attracting global digital infrastructure capital to Canada.',
    detail:
      'We have successfully attracted billions of dollars in investment into the Canadian economy by hosting annual national and international trade missions that showcase Canada’s strengths and encourage global businesses to expand into the Canadian market.',
  },
  {
    number: '06',
    title: 'Roundtables',
    summary: 'Closed-door working sessions on regulatory clarity.',
    detail:
      'We convene government officials, regulators, and industry experts for focused discussions on areas requiring policy and regulatory clarity, ensuring Canada develops a balanced framework that supports innovation while protecting market integrity.',
  },
];

export interface PolicyPriority {
  id: string;
  code: string;
  title: string;
  summary: string;
  outcome: string;
}

export const federalPriorities: PolicyPriority[] = [
  {
    id: 'recognized-asset',
    code: 'FED-01',
    title: 'Bitcoin as a Recognized Asset',
    summary:
      'We advocate for Canadian banks to formally recognize Bitcoin as an asset class. This would unlock opportunities for Bitcoin-backed lending within financial institutions and enable Canadians to hold Bitcoin in registered accounts such as TFSAs, providing everyday investors with secure, tax-advantaged access to the digital economy.',
    outcome: 'Unlocks institutional balance-sheet services and registered account access.',
  },
  {
    id: 'de-minimis',
    code: 'FED-02',
    title: 'De Minimis Rule for Bitcoin Transactions',
    summary:
      'To accelerate retail adoption, we support the introduction of a de minimis threshold for Bitcoin transactions. This would set a limit under which everyday purchases made with Bitcoin would not trigger capital gains tax, making it easier for Canadians to use Bitcoin in commerce while reducing compliance burdens for businesses.',
    outcome: 'Reduces compliance friction for Canadian consumers and merchants.',
  },
  {
    id: 'tfsa-inclusion',
    code: 'FED-03',
    title: 'Bitcoin in Tax-Free Savings Accounts',
    summary:
      'We propose allowing Bitcoin to be included in tax-free savings accounts (TFSAs), enabling individuals to have direct exposure to Bitcoin and benefit from its profitability without incurring tax liabilities. This would empower everyday Canadians to invest in Bitcoin while maximizing their tax advantages.',
    outcome: 'Empowers Canadians to hold direct Bitcoin exposure in TFSAs.',
  },
  {
    id: 'gst-exemption',
    code: 'FED-04',
    title: 'GST Exemption for Bitcoin Mining Data Centers',
    summary:
      'We advocate for Bitcoin mining data centers to be exempt from Goods and Services Tax (GST), similar to silver and gold mining in Canada. This change would enhance Canada’s competitiveness as a jurisdiction for data centers, attracting investment and fostering growth in the cryptocurrency mining sector.',
    outcome: 'Enhances global competitiveness for Canadian mining data centers.',
  },
  {
    id: 'federal-ministry',
    code: 'FED-05',
    title: 'Federal Support for Bitcoin and Mining',
    summary:
      'We recommend that the federal government establish a dedicated ministry to support Bitcoin and Bitcoin mining. This ministry would work to reduce red tape, alleviate regulatory burdens, and promote Canada as a competitive business environment for blockchain and cryptocurrency enterprises.',
    outcome: 'Reduces regulatory red tape and promotes national competitiveness.',
  },
];

export const provincialPriorities: PolicyPriority[] = [
  {
    id: 'energy-reform',
    code: 'PROV-01',
    title: 'Energy Policy Reform',
    summary:
      'We focus on reducing red tape and removing moratoriums on Bitcoin mining, encouraging provinces to view mining as a strategic opportunity for grid stability, power generation, and high-paying jobs in rural communities.',
    outcome: 'Turns flexible compute load into grid stability and rural jobs.',
  },
  {
    id: 'economic-investment',
    code: 'PROV-02',
    title: 'Advancing Economic Investment',
    summary:
      'We advocate for policies that drive provincial economic investment in Bitcoin mining, targeting regions with underutilized infrastructure and energy capacity to unlock new opportunities for growth and revitalization.',
    outcome: 'Drives capital deployment into underutilized regional energy infrastructure.',
  },
  {
    id: 'provincial-reserves',
    code: 'PROV-03',
    title: 'Provincial Bitcoin Reserves',
    summary:
      'We encourage provinces to explore holding strategic Bitcoin reserves as part of their fiscal and energy diversification strategy, strengthening financial sovereignty and positioning Canada as a global leader.',
    outcome: 'Strengthens provincial fiscal resilience and energy diversification.',
  },
  {
    id: 'regulatory-alignment',
    code: 'PROV-04',
    title: 'Stronger Regulatory Alignment',
    summary:
      'We work to ensure greater coordination between provincial regulators, fostering consistency across jurisdictions to reduce barriers, increase investor confidence, and create a more predictable environment for businesses expanding into Canada.',
    outcome: 'Fosters multi-province regulatory consistency and investor confidence.',
  },
];

export interface Leader {
  slug: string;
  name: string;
  role: string;
  location: string;
  image: string;
  shortBio: string;
  fullBio: string[];
  focusAreas: string[];
}

export const leadershipTeam: Leader[] = [
  {
    slug: 'koleya',
    name: 'Koleya Karringten',
    role: 'Executive Director',
    location: 'Calgary & Ottawa',
    image: '/images/cbc/koleya.png',
    shortBio:
      'Leads national government relations, Standing Committee on Finance testimony, and federal-provincial policy alignment across Canada’s Bitcoin sector.',
    fullBio: [
      'Koleya Karringten serves as Executive Director of the Canadian Bitcoin Consortium, steering the organization’s federal and provincial advocacy agenda from Parliament Hill in Ottawa to energy corridors across Western Canada and Québec.',
      'She regularly represents the Canadian digital asset industry before parliamentary committees, including the House of Commons Standing Committee on Finance, addressing stablecoin frameworks, banking access, anti-money laundering calibration, and energy infrastructure.',
      'Under her leadership, the Consortium has convened annual national trade missions and policy summits that bridge regulators, institutional finance, energy producers, and Bitcoin builders.',
    ],
    focusAreas: ['Federal Advocacy', 'Parliamentary Testimony', 'Energy & Banking Policy'],
  },
  {
    slug: 'jade',
    name: 'Jade Alberts',
    role: 'Vice President',
    location: 'Calgary, Alberta',
    image: '/images/cbc/jade.png',
    shortBio:
      'Oversees strategic partnerships, institutional membership growth, and provincial trade missions connecting capital with Canadian infrastructure.',
    fullBio: [
      'Jade Alberts is Vice President of the Canadian Bitcoin Consortium, focused on ecosystem growth, member engagement, and cross-border trade missions.',
      'Working closely with founders, institutional investors, and municipal economic development leaders, Jade helps position Canadian provinces as premier destinations for digital asset operations and compliant financial innovation.',
      'He coordinates member-led working groups and connects Consortium stakeholders with risk-management solutions, including purpose-built digital asset insurance programs.',
    ],
    focusAreas: ['Ecosystem Partnerships', 'Trade Missions', 'Membership Strategy'],
  },
  {
    slug: 'sara',
    name: 'Sara Ishaq-Raad',
    role: 'Director of Operations',
    location: 'Toronto, Ontario',
    image: '/images/cbc/sara.jpg',
    shortBio:
      'Directs national summits, executive roundtables, research publication cycles, and stakeholder governance across Canada.',
    fullBio: [
      'Sara Ishaq-Raad serves as Director of Operations at the Canadian Bitcoin Consortium, managing the execution of national summits, closed-door regulatory roundtables, and bi-annual transparency reporting.',
      'She oversees operational coordination across policy working groups, member communications, and cross-country convenings in Toronto, Calgary, Montreal, and Ottawa.',
      'Her work ensures that regulators, banks, and industry operators have structured venues for constructive, outcome-driven dialogue.',
    ],
    focusAreas: ['National Summits', 'Regulatory Roundtables', 'Governance & Operations'],
  },
];

export interface ResearchItem {
  id: string;
  year: string;
  category: 'White Paper' | 'Policy Report' | 'Technical Guide';
  title: string;
  image: string;
  summary: string;
  keyTakeaways: string[];
  pages: string;
}

export const researchPublications: ResearchItem[] = [
  {
    id: 'digital-asset-opportunity-2025',
    year: '2025',
    category: 'Policy Report',
    title: 'Canada’s Digital Asset Opportunity Report',
    image: '/images/cbc/report-2025.png',
    summary:
      'Comprehensive national assessment detailing how targeted tax, banking, and energy reforms can unlock domestic capital formation, job creation, and compute competitiveness.',
    keyTakeaways: [
      'Maps provincial grid curtailment opportunities for flexible Bitcoin mining load.',
      'Quantifies capital flight risks under restrictive Basel III risk-weight rules.',
      'Provides actionable federal recommendations for TFSA eligibility and de minimis thresholds.',
    ],
    pages: '48 pages',
  },
  {
    id: 'chaos-to-clarity-2025',
    year: '2025',
    category: 'White Paper',
    title: 'From Chaos to Clarity',
    image: '/images/cbc/chaos-to-clarity.png',
    summary:
      'Policy blueprint outlining harmonized federal-provincial supervision for digital asset custodians, payment service providers, and institutional market participants.',
    keyTakeaways: [
      'Aligns Retail Payment Activities Act (RPAA) obligations with on-chain settlement realities.',
      'Establishes clear custody segregation standards without duplicating provincial oversight.',
      'Proposes risk-calibrated banking access criteria for compliant Canadian firms.',
    ],
    pages: '36 pages',
  },
  {
    id: 'investigation-guide-2025',
    year: '2025',
    category: 'Technical Guide',
    title: 'Cryptocurrency Transaction Investigation Guide',
    image: '/images/cbc/brief-server.jpg',
    summary:
      'Practical reference developed with industry compliance leaders to assist Canadian law enforcement, regulators, and financial institutions in tracing illicit flows accurately.',
    keyTakeaways: [
      'Demystifies UTXO accounting, cluster heuristics, and transparent public ledger auditing.',
      'Differentiates non-custodial self-sovereign tools from illicit financial typologies.',
      'Supports proportional, evidence-based AML/KYC compliance practices.',
    ],
    pages: '28 pages',
  },
  {
    id: 'alberta-roadmap-2023',
    year: '2023',
    category: 'White Paper',
    title: 'A Road Map for Alberta and Canada',
    image: '/images/cbc/mission-event-1.jpg',
    summary:
      'Foundational framework exploring how Alberta’s deregulated energy market and entrepreneurial talent base can anchor North American Bitcoin infrastructure.',
    keyTakeaways: [
      'Evaluates flare-gas mitigation and off-grid power generation economics.',
      'Details rural municipal property tax and employment multipliers.',
      'Outlines provincial regulatory certainty benchmarks adopted in 2024–2025.',
    ],
    pages: '42 pages',
  },
  {
    id: 'alberta-canada-2022',
    year: '2022',
    category: 'Policy Report',
    title: 'Alberta & Canada: Building a Digital Economy',
    image: '/images/cbc/brief-city.jpg',
    summary:
      'Early landmark industry paper introducing provincial and federal lawmakers to Bitcoin mining grid balancing and digital asset capital attraction.',
    keyTakeaways: [
      'First consortium-wide consensus submission on Canadian energy-compute convergence.',
      'Established baseline data for subsequent Stampede Trade Missions.',
    ],
    pages: '31 pages',
  },
];

export interface IndustryResponse {
  id: string;
  year: string;
  regulator: string;
  title: string;
  summary: string;
  highlights: string[];
}

export const industryResponses: IndustryResponse[] = [
  {
    id: 'osfi-basel-iii',
    year: '2025',
    regulator: 'OSFI · Federal Banking',
    title: 'Submission on OSFI Crypto-Asset Capital & Liquidity Treatment (Basel III)',
    summary:
      'Detailed industry response addressing Group 2b 1,250% risk-weight thresholds and the 5% Net Tier 1 capital cap that restrict Canadian banks from serving regulated digital asset firms.',
    highlights: [
      'Advocates risk-sensitive calibration for hedged exposures and qualified institutional custody.',
      'Highlights competitive divergence relative to G7 banking peers.',
    ],
  },
  {
    id: 'boc-rpaa-2024',
    year: '2024',
    regulator: 'Bank of Canada · Payments',
    title: 'Retail Payment Activities Act (RPAA) & Digital Asset Rails Consultation',
    summary:
      'Constructive analysis of PSP registration timelines, safeguarding of end-user funds, and operational resilience rules impacting Canadian stablecoin and Bitcoin payment platforms.',
    highlights: [
      'Requests explicit clarity for non-custodial software tools vs. custodial payment intermediaries.',
      'Identifies banking de-risking barriers facing registered Payment Service Providers.',
    ],
  },
  {
    id: 'fin-prebudget-2024',
    year: '2024',
    regulator: 'House of Commons Standing Committee on Finance',
    title: 'Pre-Budget Submission on GST Parity, TFSAs, and Innovation Competitiveness',
    summary:
      'Formal parliamentary submission urging tax parity for Canadian data centers alongside traditional resource extraction and broader retail investment access.',
    highlights: [
      'Proposed GST parity for export-oriented digital asset compute facilities.',
      'Presented data on Canadian talent retention and domestic capital formation.',
    ],
  },
  {
    id: 'csa-custody-2023',
    year: '2023',
    regulator: 'Canadian Securities Administrators (CSA)',
    title: 'Response to Enhanced Investor Protection & Crypto Trading Platform Guidance',
    summary:
      'Collaborative submission from Canadian exchanges, custodians, and legal counsel emphasizing clear, workable standards for value-referenced crypto assets and custody.',
    highlights: [
      'Supported strict asset segregation and independent proof-of-reserves standards.',
      'Warned against overly rigid rules that push Canadian retail users offshore.',
    ],
  },
];

export interface ProgressReport {
  id: string;
  year: string;
  period: string;
  title: string;
  image: string;
  summary: string;
  metrics: { label: string; value: string }[];
}

export const annualReports: ProgressReport[] = [
  {
    id: 'report-2025-h1',
    year: '2025',
    period: '2025 Year End Edition',
    title: '2025 Policy & Ecosystem Impact Report',
    image: '/images/cbc/report-2025.png',
    summary:
      'Documents federal pre-budget consultations in Ottawa, the 5th Annual Stampede Trade Mission in Calgary, and the launch of purpose-built member insurance via Warden Insurance Inc.',
    metrics: [
      { label: 'Policy Submissions', value: '6 Formal Briefs' },
      { label: 'Trade Mission Delegates', value: '320+ Leaders' },
      { label: 'Roundtables Convened', value: '9 Sessions' },
    ],
  },
  {
    id: 'report-2024-annual',
    year: '2024',
    period: '2024 Full-Year Review',
    title: '2024 Accountability & Advocacy Progress Report',
    image: '/images/cbc/mission-event-2.jpg',
    summary:
      'Covers national expansion across Ontario, Alberta, and Québec, Parliamentary Hill Days in Ottawa, and regulatory coordination with OSFI, Bank of Canada, and provincial ministries.',
    metrics: [
      { label: 'Parliamentary Meetings', value: '45+ Offices' },
      { label: 'Research Publications', value: '4 Papers' },
      { label: 'Provinces Engaged', value: '7 Jurisdictions' },
    ],
  },
  {
    id: 'report-2023-annual',
    year: '2023',
    period: '2023 Annual Review',
    title: '2023 Consortium Transition & National Mandate Report',
    image: '/images/cbc/mission-event-3.jpg',
    summary:
      'Chronicles the evolution into a dedicated national Bitcoin advocacy organization, publication of the Alberta & Canada Road Map, and inaugural Ottawa Hill Day engagements.',
    metrics: [
      { label: 'Summit Attendees', value: '500+ Stakeholders' },
      { label: 'Inaugural Hill Day', value: '28 MPs & Senators' },
      { label: 'Capital Facilitated', value: 'Multi-Billion Pipeline' },
    ],
  },
];

export interface ConsortiumEvent {
  id: string;
  title: string;
  dateLabel: string;
  location: string;
  category: 'Roundtable' | 'Trade Mission' | 'Summit';
  status: string;
  image: string;
  summary: string;
  focusPoints: string[];
}

export const eventsList: ConsortiumEvent[] = [
  {
    id: 'osfi-basel-roundtable',
    title: 'Banking Access, OSFI Rules, and Basel III Roundtable',
    dateLabel: 'Winter 2026–27',
    location: 'Virtual · Invitation Only',
    category: 'Roundtable',
    status: 'Upcoming',
    image: '/images/cbc/government.jpg',
    summary:
      'Examines how Basel III capital standards, as implemented via OSFI’s Crypto-asset Exposures Guideline (1,250% Group 2b risk weight and 5% Net Tier 1 cap), constrain federally regulated banks from engaging with digital asset firms.',
    focusPoints: [
      'Account access, credit, custody, and institutional participation bottlenecks',
      'Risk-sensitive calibration pathways without weakening prudential standards',
    ],
  },
  {
    id: 'payments-rpaa-roundtable',
    title: 'Payments, RPAA, and Digital Assets Roundtable',
    dateLabel: 'Winter 2026–27',
    location: 'Virtual · Invitation Only',
    category: 'Roundtable',
    status: 'Upcoming',
    image: '/images/cbc/mission-wave.jpg',
    summary:
      'Examines how Canada’s Retail Payment Activities Act reshapes PSP registration, Bank of Canada supervision, safeguarding of end-user funds, and access to settlement rails.',
    focusPoints: [
      'Interaction between RPAA, stablecoins, and on-chain settlement',
      'Reducing friction between regulated digital asset firms and banking partners',
    ],
  },
  {
    id: 'digital-asset-summit-2027',
    title: 'Digital Asset Summit',
    dateLabel: 'Apr 21–23, 2027',
    location: 'Toronto, Ontario',
    category: 'Summit',
    status: 'Registration Open',
    image: '/images/cbc/mission-event-1.jpg',
    summary:
      'Three-day institutional forum convening Canadian asset managers, banks, energy executives, and policymakers on custody, market structure, and sovereign digital infrastructure.',
    focusPoints: [
      'Institutional Bitcoin allocation and registered account frameworks',
      'Cross-border regulatory alignment and capital markets innovation',
    ],
  },
  {
    id: 'consensus-2027',
    title: 'Consensus 2027 (Attending)',
    dateLabel: 'May 5–7, 2027',
    location: 'Miami Beach Convention Center',
    category: 'Trade Mission',
    status: 'Delegation Forming',
    image: '/images/cbc/mission-event-4.jpg',
    summary:
      'Consortium leadership and Canadian member firms attend CoinDesk’s 15,000-attendee flagship gathering to represent Canadian energy, fintech, and infrastructure investment opportunities.',
    focusPoints: [
      'Member visibility and bilateral investor & infrastructure meetings',
      'Tracking U.S. and global policy developments feeding back into Ottawa work',
    ],
  },
  {
    id: 'alberta-trade-mission-6',
    title: '6th Annual Alberta Trade Mission',
    dateLabel: 'Summer 2027',
    location: 'Calgary, Alberta',
    category: 'Trade Mission',
    status: 'Upcoming',
    image: '/images/cbc/mission-event-2.jpg',
    summary:
      'Brings global energy developers, data center operators, and institutional capital to Alberta to tour grid-integrated compute sites and meet provincial decision-makers.',
    focusPoints: [
      'Stranded energy monetization and grid stability case studies',
      'Provincial investment incentives and municipal partnerships',
    ],
  },
  {
    id: 'bitcoin-on-the-hill-3',
    title: '3rd Annual Bitcoin on the Hill Day',
    dateLabel: 'Fall 2027',
    location: 'Parliament Hill · Ottawa, Ontario',
    category: 'Summit',
    status: 'Upcoming',
    image: '/images/cbc/brief-hill.jpg',
    summary:
      'Direct bilateral meetings between Canadian Bitcoin Consortium members, Members of Parliament, Senators, and Finance department officials on Parliament Hill.',
    focusPoints: [
      'De minimis tax thresholds, TFSA inclusion, and mining GST parity',
      'Education on Bitcoin energy economics and financial sovereignty',
    ],
  },
  {
    id: 'canadian-bitcoin-summit-7',
    title: '7th Annual Canadian Bitcoin Summit',
    dateLabel: 'Fall 2027',
    location: 'Canada · National Host City',
    category: 'Summit',
    status: 'Flagship Event',
    image: '/images/cbc/mission-event-3.jpg',
    summary:
      'The Consortium’s premier annual gathering uniting industry executives, provincial ministers, regulators, and builders from coast to coast.',
    focusPoints: [
      'Keynote policy addresses and cross-sector executive panels',
      'Member showcases and national working-group briefings',
    ],
  },
];

export interface BriefArticle {
  id: string;
  date: string;
  readTime: string;
  category: string;
  title: string;
  image: string;
  excerpt: string;
  paragraphs: string[];
}

export const bitcoinBriefArticles: BriefArticle[] = [
  {
    id: 'pre-budget-2026',
    date: 'November 2026',
    readTime: '5 min read',
    category: 'Federal Policy',
    title: 'Pre-Budget Consultations in Advance of the 2026 Budget with the Standing Committee on Finance',
    image: '/images/cbc/brief-hill.jpg',
    excerpt:
      'Executive Director Koleya Karringten testified in Ottawa before the Standing Committee on Finance on stablecoins, ATM policy, and risk-calibrated AML/KYC rules.',
    paragraphs: [
      'Koleya Karringten appeared in Ottawa before the House of Commons Standing Committee on Finance during pre-budget consultations, presenting the Consortium’s coordinated industry recommendations across payment modernization, stablecoin clarity, ATM oversight, and proportional AML/KYC enforcement.',
      'A central theme of the testimony focused on avoiding blunt, blanket restrictions that push legitimate Canadian commerce offshore while failing to deter bad actors. Instead, the Consortium urged calibrated supervision paired with strong law enforcement education—supported by our Cryptocurrency Transaction Investigation Guide.',
      'With parliamentary committee composition evolving, consistent, constructive engagement across all parties remains essential to keeping Canada competitive in North America’s digital asset economy.',
    ],
  },
  {
    id: 'quebec-datacentre-moment',
    date: 'October 2026',
    readTime: '4 min read',
    category: 'Energy & Infrastructure',
    title: 'BTC Brief: Québec’s Data-Centre Moment',
    image: '/images/cbc/brief-server.jpg',
    excerpt:
      'Why clean hydroelectric capacity and flexible industrial compute loads represent a generational industrial opportunity when paired with transparent grid policy.',
    paragraphs: [
      'Across North America, jurisdictions are competing fiercely to attract high-density compute infrastructure and clean energy investment. Québec sits on an enviable foundation of renewable hydroelectricity and skilled technical talent, yet regulatory bottlenecks around industrial allocation risk sidelining valuable grid-balancing partners.',
      'Modern Bitcoin data centers act as dispatchable, interruptible load—absorbing surplus megawatts during off-peak periods and curtailing within seconds when winter residential heating demand spikes.',
      'By adopting transparent, merit-based allocation criteria rather than blanket exclusions, provincial utilities can strengthen grid economics while anchoring high-paying regional technical jobs.',
    ],
  },
  {
    id: 'why-budget-2025-matters',
    date: 'September 2026',
    readTime: '6 min read',
    category: 'Monetary Policy',
    title: 'Why Budget 2025 Matters for Bitcoin — And Why Canada Can’t Afford to Ignore It',
    image: '/images/cbc/brief-canada-blue.jpg',
    excerpt:
      'Examining how capital gains treatment, TFSA eligibility, and bank capital guidelines determine whether Canadian builders scale at home or relocate south.',
    paragraphs: [
      'When we talk about Bitcoin’s future in Canada, the conversation often highlights regulatory friction: banking access hurdles under Basel III, capital gains reporting on everyday transactions, and uneven provincial energy policies.',
      'Meanwhile, peer jurisdictions are accelerating institutional custody frameworks, clarifying stablecoin legislation, and evaluating strategic digital asset reserves.',
      'Practical federal steps—establishing a de minimis exemption for small transactions, enabling direct Bitcoin exposure in TFSAs, and granting GST parity for mining data centers—deliver immediate competitiveness gains without compromising consumer protection.',
    ],
  },
  {
    id: 'stampede-trade-mission-5',
    date: 'July 2026',
    readTime: '4 min read',
    category: 'Trade Missions',
    title: '5th Annual Canadian Bitcoin Consortium Stampede Trade Mission Recap',
    image: '/images/cbc/mission-event-1.jpg',
    excerpt:
      'Policymakers, regulators, financial institutions, and energy innovators convened in Calgary to showcase Alberta’s digital infrastructure momentum.',
    paragraphs: [
      'The 5th Annual Canadian Bitcoin Consortium Stampede Trade Mission brought together policymakers, regulators, financial institutions, and industry leaders from across North America for a week of high-impact briefings in Calgary.',
      'The program spotlighted Alberta’s growing reputation as a premier hub for digital asset infrastructure, energy innovation, and data center development, creating direct pathways for domestic and international investment.',
      'Site tours and closed-door roundtables reinforced how practical energy policy attracts long-term infrastructure capital and mortgage-paying jobs to Canadian communities.',
    ],
  },
  {
    id: 'assets-to-energy',
    date: 'May 2026',
    readTime: '5 min read',
    category: 'Strategy',
    title: 'From Assets to Energy: Canada’s Dual Advantage in the Global Bitcoin Economy',
    image: '/images/cbc/brief-city.jpg',
    excerpt:
      'Canada uniquely combines deep capital markets heritage with abundant, reliable energy resources—the twin pillars required for global Bitcoin leadership.',
    paragraphs: [
      'Few G7 nations possess Canada’s rare combination of trusted legal institutions, deep capital markets, cold climate efficiencies, and abundant energy resources spanning hydro, natural gas, and nuclear.',
      'Realizing that advantage requires synchronizing financial regulation with pragmatic energy policy. Sound money and reliable energy are complementary pillars of national economic resilience.',
    ],
  },
];

export interface MembershipTier {
  id: string;
  name: string;
  contribution: string;
  tagline: string;
  highlighted?: boolean;
  benefits: string[];
}

export const membershipTiers: MembershipTier[] = [
  {
    id: 'diamond',
    name: 'Diamond',
    contribution: '$40,000 / yr',
    tagline: 'Flagship national leadership & executive policy steering',
    highlighted: true,
    benefits: [
      'Host a premier summit event at your office location',
      'Panel curation & keynote speaking at two summit events in provinces of choice',
      'Co-branding on all Consortium research papers published in the calendar year',
      'Direct participation in virtual parliamentary days and regulatory responses',
      'Priority business development support & Warden Insurance Inc. member access',
    ],
  },
  {
    id: 'platinum',
    name: 'Platinum',
    contribution: '$25,000 / yr',
    tagline: 'Senior provincial summit curation & policy working groups',
    benefits: [
      'Speaking opportunity at two summit events in provinces of your choice',
      'Panel curation of 1 panel at a summit event in the province of your choice',
      'Co-branding on Consortium research papers in the calendar year',
      'Participation in virtual parliamentary days and regulatory submissions',
      'Full access to Warden Insurance Inc. purpose-built member coverage',
    ],
  },
  {
    id: 'gold',
    name: 'Gold',
    contribution: '$15,000 / yr',
    tagline: 'Active policy participation & summit visibility',
    benefits: [
      'Panel curation of 1 panel at a summit event in the province of your choice',
      'Participation in industry responses to federal and provincial regulators',
      'Participation in virtual parliamentary days',
      'Research briefing access and business development introductions',
      'Access to Warden Insurance Inc. member coverage programs',
    ],
  },
  {
    id: 'silver',
    name: 'Silver',
    contribution: '$10,000 / yr',
    tagline: 'Regulatory engagement & national network access',
    benefits: [
      'Opportunity to participate in industry responses to regulators',
      'Participation in virtual parliamentary days',
      'Business development support in the Canadian digital asset industry',
      'Complimentary passes to Consortium summits and roundtables',
      'Access to Warden Insurance Inc. member coverage programs',
    ],
  },
  {
    id: 'bronze',
    name: 'Bronze & Community Partners',
    contribution: '$5,000 / yr',
    tagline: 'Essential industry alignment & intelligence briefings',
    benefits: [
      'Business development support across the Canadian Bitcoin ecosystem',
      'Monthly executive policy & regulatory intelligence briefings',
      'Listing in the Canadian Bitcoin Consortium member directory',
      'Member rate invitations to national summits and trade missions',
      'Access to Warden Insurance Inc. member coverage programs',
    ],
  },
];
