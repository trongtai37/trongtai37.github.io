const config = {
  siteTitle: 'trongtai37',
  siteTitleShort: 'trongtai37',
  siteTitleAlt: 'trongtai37',
  siteLogo: '/logos/logo-1024.png',
  siteUrl: 'https://trongtai37.github.io',
  repo: 'https://github.com/trongtai37/trongtai37.github.io.git',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
    'Tony Nguyen is a junior web developer and writer specializing in modern JavaScript.',
  siteRss: '/rss.xml',
  googleAnalyticsID:'UA-161709442-1',
  postDefaultCategoryID: 'Tech',  
  userName: 'trongtai37',
  userEmail: 'trongtaind37@gmail.com',
  userTwitter: 'trongtai37',
  menuLinks: [
    {
      name: 'Me',
      link: '/about/',
    },
    {
      name: 'Blogs',
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
