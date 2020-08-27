const themeOptions = require('gatsby-theme-apollo-docs/theme-options')

module.exports = {
  siteMetadata: {
    siteName: `Luxrobo`,
    title: `Luxrobo Docs`,
    subtitle: `Luxrobo Docs`,
    description: `Luxrobo Docs documentation.`,
    twitterHandle: `graphql`,
    author: `Luxrobo`,
  },
  pathPrefix: `graphql_docs`,
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
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `source/images/icon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: false,
      },
    },

    //Theme config
    {
      resolve: 'gatsby-theme-apollo-docs',
      options: {
        ...themeOptions,
        siteName: 'Luxrobo DOCS',
        menuTitle: 'Luxrobo',
        baseUrl: 'https://luxrobo.github.io/graphql_docs',
        root: __dirname,
        subtitle: 'Luxrobo',
        description: 'Luxrobo GraphQL for API documentation.',
        githubRepo: 'LUXROBO/pymodi',
        twitterHandle: 'LUXROBO',
        spectrumHandle: 'LUXROBO',
        youtubeUrl: 'https://www.youtube.com/channel/UCwav5UKLaEufn0mtvaFAkYw',
        logoLink: 'https://luxrobo.github.io/graphql_docs',
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
          null: [
            'index',
            'introduce',
          ],
          'ERROR 코드': [
            'error/error',
            'error/account',
          ],
          'GRPC 서비스': [
            'grpc/lesson',
            'grpc/nlp',
            'grpc/review',
            'grpc/upload',
          ],
          'Query 메소드': [
            'query/account',
            'query/review',
            'query/lesson',
          ],
          'Mutation 메소드': [
            'mutation/account',
            'mutation/lesson',
            'mutation/review',
            'mutation/upload',
          ],
          'Type 정의': [
            'type/account',
            'type/imageInfo',
            'type/pageInfo',
            'type/review',
            'type/lesson',
            'type/upload',
          ],
          'Enum 정의': [
            'enum/account',
            'enum/lesson',
          ],
        },
      },
    },
 
  ],
}
