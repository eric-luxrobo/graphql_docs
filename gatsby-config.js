const themeOptions = require('gatsby-theme-apollo-docs/theme-options')

module.exports = {
  siteMetadata: {
    siteName: `Luxrobo`,
    title: `Luxrobo Docs`,
    subtitle: `Luxrobo Docs`,
    description: `Luxrobo (GraphQL for WordPress) documentation.`,
    twitterHandle: `graphql`,
    author: `Luxrobo`,
  },
  pathPrefix: ``,
  plugins: [
    // Data source Plugins
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/source/images`,
      },
    },
    // transformer plugins
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // meta tools
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `luxrobo-docs`,
        short_name: `luxrobo`,
        start_url: `/`,
        background_color: `#14023e`,
        theme_color: `#0E2339`,
        display: `minimal-ui`,
        icon: `source/images/icon.png`,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-antd',
    //   options: {
    //     style: false,
    //   },
    // },

    //Theme config
    {
      resolve: 'gatsby-theme-apollo-docs',
      options: {
        ...themeOptions,
        siteName: 'Luxrobo DOCS',
        menuTitle: 'Luxrobo',
        baseUrl: 'https://docs.luxrobo.com',
        root: __dirname,
        subtitle: 'Luxrobo',
        description: 'Luxrobo GraphQL for API documentation.',
        githubRepo: 'LUXROBO/pymodi',
        trackingId: 'UA-111783024-1',
        twitterHandle: 'LUXROBO',
        spectrumHandle: 'LUXROBO',
        algoliaApiKey: 'fb8b4503ba2093d228a6c9b72facff9b',
        algoliaIndexName: 'LUXROBO',
        youtubeUrl: 'https://www.youtube.com/channel/UCwav5UKLaEufn0mtvaFAkYw',
        logoLink: 'https://docs.luxrobo.com',
        navConfig: {
          'luxrobo.com': {
            url: 'https://luxrobo.com',
            description: 'LUXROBO homepage',
          },
          Github: {
            url: 'https://github.com/LUXROBO',
            description: 'LUXROBO on Github',
          },
        },
        footerNavConfig: {
          Confluence: {
            href: 'https://confluence.luxrobo.net/',
            target: '_blank',
            rel: 'noopener noreferrer',
          },
         
        },
        sidebarCategories: {
          null: ['index'],
          'Getting Started': [
            'getting-started/account',
            'getting-started/upload',
          ],
          // Guides: [
          //   'guides/testing',
          // ]
        },
      },
    },
    //Hosting integration
    //`gatsby-plugin-netlify`,

    //Testing plugins
    // {
    //   resolve: `gatsby-plugin-react-axe`,
    //   options: {
    //     showInProduction: false,
    //   },
    // },
  ],
}
