module.exports = {
  siteTitle: 'Sarthak Rangari',
  siteDescription:
    'Sarthak Rangari is a passionate Software Developer, based in India, who loves coding and learning new things.',
  siteKeywords:
    'Sarthak Rangari, Sarthak, Rangari, sarthakrangari, software engineer, web developer, javascript, python, django, iitr, maharashtra',
  siteUrl: 'https://sarthak7219.github.io',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Sarthak Rangari',
  location: 'Maharashtra, India',
  email: 'sarthakrangari788@gmail.com',
  github: 'https://github.com/Sarthak7219',
  twitterHandle: '@',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Sarthak7219',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/sarthak-rangari-03a078229',
    },
    {
      name: 'Codepen',
      url: '@',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/sarthak_rangari78/',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/SarthakRangari',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
