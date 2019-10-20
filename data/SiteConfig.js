const config = {
  siteTitle: 'Tony Nguyen',
  siteTitleShort: 'Tony Nguyen',
  siteTitleAlt: 'Tony Nguyen',
  siteLogo: '/logos/logo-1024.png',
  siteUrl: 'https://trongtai37.github.io',
  repo: 'https://github.com/trongtai37/trongtai37.github.io',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
    'Tony Nguyen is a web developer and writer specializing in modern JavaScript.',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-42068444-1',
  postDefaultCategoryID: 'Tech',
  newsletter: 'https://trongtai37.substack.com',
  newsletterEmbed: 'https://trongtai37.substack.com/embed',
  userName: 'Tony',
  userEmail: 'trongtaind37@gmail.com',
  userTwitter: 'tai.nguyentrong.0607',
  menuLinks: [
    {
      name: 'About me',
      link: '/about/',
    },
    {
      name: '\"Doodle Doode\"',
      link: '/blog/',
    },
    {
      name: 'Connect',
      link: '/connect/',
    },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
