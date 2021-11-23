locales: {
    '/': {
        lang: 'ja',
        title: 'Tokai Prison Wiki',
        description: '”東海刑務所”のWiki.',
    }
  },
 themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Blog', link: '/blog/' }
    ],
    sidebar: [
      {
        title: 'Blog',
        children: [
          '/blog/'
        ]
      }
    ]
  }