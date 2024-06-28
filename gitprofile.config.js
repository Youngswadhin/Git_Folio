// gitprofile.config.js
const config = {
  github: {
    username: 'Youngswadhin', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['youngswadhin'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'swadhin',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    instagram: 'Young_swadhin',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '+91-8117002071',
    email: 'swadhinmuduli07@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1yMC6Z5wB90Ya28YgNShsNWa4nNsOdKg-/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Python',
    'C',
    'NextJS',
    'ReactJS',
    'NodeJS',
    // 'JavaScript',
    // 'TypeScript',
    'MongoDB',
    // 'Firebase',
    // 'Tailwind',
    'Machine Learning',
    'Flutter',
    'SQL',
    'Oracle',
  ],
  experiences: [
    {
      company: 'Placify Technology',
      position: 'Android App Development Intern',
      from: 'May 2024',
      to: 'Present',
      companyLink: '',
    },
    // {
    //   company: 'Meri Skill',
    //   position: 'Data Analyst',
    //   from: 'November 2023',
    //   to: 'December 2023',
    //   companyLink: '',
    // },
  ],
   certifications: [
    {
      name: 'Introduction of Machine Learning',
      body: 'From AWS',
      year: 'June 2024',
      // link: 'https://bostoninstituteofanalytics.org/bia-certification/QklBXzQ1N19CSUE='
    },
    {
      name: '•	HTML, CSS and JavaScript for Web Developers',
      body: 'By Lets Upgrade',
      year: 'july 2023',
      // link: 'https://coursera.org/share/638b558b85c41c04a281acf518ae3375'
    },
    {
      name: 'Python Programming Essentials Bootcamp',
      body: 'By Lets Upgrade',
      year: 'July 2023',
      // link: 'https://coursera.org/share/ab4ae3a13223e352a1d714229e6afd9b'
    },
  ],
  education: [
    {
      institution: 'Institute of Management and Information Technology',
      degree: 'Master of Computer Application',
      from: '2023',
      to: '2025',
    },
    {
      institution: 'Bhadrak Autonomous college',
      degree: 'B.Sc in Mathematics',
      from: '2020',
      to: '2023',
    },
    {
      institution: 'Bhadrak Junior College',
      degree: 'XI & XII',
      from: '2018',
      to: '2020',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: '',
      description:
        '',
      imageUrl: '',
      link: '',
    },
    {
      title: '',
      description:
        '',
      imageUrl: '',
      link: '',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'LinkedIn', // medium | dev
    username: 'swadhin kumar muduli', // to hide blog section, keep it empty
    limit: 4, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'night',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
 // footer: `Made with <a 
 //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //    target="_blank"
 //     rel="noreferrer"
 //   >GitProfile</a> and ❤️`,
};

export default config;
