export const resume = {
  basics: {
    name: 'Elanora Manson',
    pronouns: ['She', 'Her', 'Hers'],
    label: 'Software Engineer',
    image: 'assets/images/e_profile_pic.jpg',
    email: 'resume@elanora.lol',
    summary:
      'Elanora is a software engineer from the coastal farming valley of Santa Maria, CA. She has education and experience in Fullstack Web Development and several other domains. She loves practical problem solving and learning new techniques to best approach an issue. She excels at quick and accurate assessments of situations, and bringing people together to collaborate effectively. With the right resources and people to work with, no problem feels too big.',
    location: {
      city: 'Portland',
      countryCode: 'US',
      region: 'Oregon',
    },
    profiles: [
      { network: 'Website', url: 'https://elanora.lol' },
      {
        network: 'Github',
        username: 'elanora96',
        url: 'https://github.com/elanora96',
      },
      {
        network: 'LinkedIn',
        url: 'https://www.linkedin.com/in/elanora',
      },
    ],
  },
  work: [
    {
      name: 'Fresh Venture Foods',
      location: 'Santa Maria, CA',
      position: 'Lead Full Stack Developer',
      url: 'https://www.freshventurefoods.com/',
      startDate: '2023-06',
      endDate: '2023-12',
      summary:
        'Lead software engineer responsible for maintaining and enhancing custom business solutions, primarily involving a legacy PHP BSI system to improve efficiency and reliability.',
      highlights: [
        'Rewrote and unified many existing Python scripts into a single library, FVFFunctions, used by a FastAPI API. This reduced errors, improved maintainability, and allowed IT to manage services via JSON configuration files.',
        'Maintained and expanded FVFReports, a custom Business Systems Integration written in PHP and used by all departments. Worked with teams to fix long-standing bugs, data integration issues, and UI/UX annoyances.',
        'Improved features such as real-time monitoring of processing production lines to be more modular and easily expandable through ini files.',
        'Documented complex areas of the system to facilitate future maintenance and enhancements.',
        'Gained first-hand experience with external data sources such as GE Historian and Kronos HR.',
        'Collaborated with vendors and coworkers to ensure accurate data sourcing and integration.',
      ],
    },
    {
      name: 'Fresh Venture Foods',
      location: 'Santa Maria, CA',
      position: 'Full Stack Developer',
      url: 'https://www.freshventurefoods.com/',
      startDate: '2022-02',
      endDate: '2022-05',
      summary:
        'Worked as one of two engineers with complete creative control over projects, primarily involving FastAPI web APIs and React frontends.',
      highlights: [
        'Developed an app to search for specific files on an on-premise Windows server, extract data/metadata, and store results in an Excel workbook using Pandas. This tool was extensively used for food safety audits.',
        'Created a single-page meeting manager web app for a tablet with RFID card reader integration. Automated employee attendance tracking and report generation using SQL and Pandas.',
        'Designed a safety data sheet indexer to query a Windows folder for PDFs, enabling employees to quickly access key information about chemicals, including their emergency numbers.',
        'Implemented a product PDF generator querying a SQL database for product data, scraping images from the website, and allowing users to choose the best images.',
      ],
    },
    {
      name: "Chef Rick's Ultimately Fine Foods Inc.",
      location: 'Orcutt, CA',
      position: 'Caterer',
      url: 'https://www.chefricks.com/',
      startDate: '2010-03',
      endDate: '2021-11',
      summary:
        'Responsible for onsite catering setup, logistics, and breakdown for various events. Held various positions including cashier, waiter, prep cook, and information technologist.',
      highlights: [
        'Collaborated with onsite teams of upwards of 20 staff members to supply food for events with up to 800 attendees.',
      ],
    },
    {
      name: 'Gold Coast Packing, Inc.',
      location: 'Santa Maria, CA',
      position: 'Full Stack Development Intern',
      url: 'https://goldcoastpack.com/',
      startDate: '2019-06',
      endDate: '2019-08',
      summary:
        'Internship position utilizing HTML, CSS, JS, PHP, and SQL Server. Leveraged best practices in web development technologies while quickly learning the technology stack.',
      highlights: [],
    },
    {
      name: 'Central Coast Kind',
      location: 'Santa Maria, CA',
      position: 'Contributing Contractor',
      url: 'http://centralcoastkind.com/',
      startDate: '2017-03',
      endDate: '2017-05',
      summary: 'Provided photographic services for an article.',
      highlights: [],
    },
    {
      name: 'Gold Coast Farms',
      location: 'Santa Maria, CA',
      position: 'Field Worker',
      url: 'https://goldcoastpack.com/',
      startDate: '2014-06',
      endDate: '2016-08',
      summary:
        'Performed various seasonal tasks including irrigation, weeding, and operating tractors for road watering. Overcame language barriers to form relationships with coworkers.',
      highlights: [],
    },
  ],
  volunteer: [
    {
      organization: 'LGBTQIA PDX',
      position: 'Moderator/Event Organizer',
      startDate: '2022-10',
      summary:
        'I help run a growing—but tight knit—local Discord server that invites all queer people to join. As of June 3rd, 2024, we have 60+ members of various backgrounds and identities. I feel a very strong sense of wanting to serve this community. I spend much of my free time with members, mentoring or just being a friend. Group meetups can be almost anything and are at least monthly, sometimes multiple times a week!',
      highlights: [],
    },
    {
      organization: 'Marian Medical Center',
      position: 'Visitor Services/Patient Discharge',
      url: 'https://www.dignityhealth.org/central-coast/locations/marianregional',
      startDate: '2014-08',
      endDate: '2016-05',
      summary:
        'While at Marian I helped with visitor services and discharging patients. As a result of this, most of my experiences with people were reuniting friends and family after hospitalization had occurred. My time spent there helped me learn what it takes to be sensitive and compassionate when people are their most fragile.',
      highlights: [],
    },
  ],
  education: [
    {
      institution: 'Fullstack Academy',
      url: 'https://www.fullstackacademy.com/',
      area: 'Web Development Immersive Program',
      startDate: '2021-02',
      endDate: '2021-08',
      courses: ['React', 'PostgreSQL', 'Express.js', 'Node.js'],
    },
    {
      institution: 'Allan Hancock College',
      url: 'https://www.hancockcollege.edu/',
      area: 'Computer Science',
      startDate: '2015-08',
      endDate: '2019-12',
      courses: ['CS 131 Computer Organization', 'CS 161 Discrete Structures'],
    },
  ],
  awards: [],
  publications: [],
  skills: [
    {
      name: 'Fullstack Web Development',
      keywords: [
        'HTML5',
        'CSS',
        'Javascript',
        'Typescript',
        'Node',
        'React',
        'Express',
        'Postgres',
        'SQLServer',
        'Python',
        'FastAPI',
        'Pandas',
        'Bootstrap',
        'PHP8',
        'Microsoft IIS',
      ],
    },
    {
      name: 'Other Development',
      keywords: ['Rust', 'C', 'C++', 'Java', 'Clojure', 'Bash', 'Powershell'],
    },
    {
      name: 'Tools and Systems',
      keywords: [
        'Git',
        'Github',
        'ssh',
        'npm',
        'cargo',
        'pip',
        'Linux',
        'Windows',
        'VSCode',
        'Neovim',
        'JetBrains',
      ],
    },
    {
      name: 'ETC',
      keywords: [
        'Kronos HR',
        'GE Historian',
        'PhotoShop',
        'Office 365',
        'Slack',
      ],
    },
  ],
  languages: [
    {
      language: 'English',
      fluency: 'Native speaker',
    },
  ],
  interests: [
    {
      name: 'Cycling',
      keywords: ['Road', 'Gravel', 'Commuting', 'Bikepacking', 'Bike Building'],
    },
    {
      name: 'Photography',
      keywords: ['Digital', 'Film', 'Alternative Processes'],
    },
    {
      name: 'Pets',
      keywords: ['Henry', 'Bear'],
    },
  ],
  references: [
    {
      name: 'Micah Ramos',
      organization: 'Fresh Venture Foods',
    },
  ],
  projects: [],
};

export default resume;
