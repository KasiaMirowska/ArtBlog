module.exports = {
  siteMetadata: {
    title: `From Art to Code...`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              maxHeight: 150,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    // // `gatsby-mdx-fix`,
    // // {
    // //   resolve: `gatsby-mdx-fix`,
    // //   options: {
    // //     extensions: [`.mdx`, `.md`],
    // //     gatsbyRemarkPlugins: [
    // //       {
    // //         resolve: `gatsby-remark-images`,
    // //         options: {
    // //           maxWidth: 590,
    // //         },
    // //       },
    //     ],
    //     plugins: [
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           maxWidth: 590,
    //         },
    //       },
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/markdownPages`, name: `posts` },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdowns`,
        path: `${__dirname}/markdownPages`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
        {
          resolve: "gatsby-remark-embed-video",
          options: {
            width: 800,
            ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
            height: 400, // Optional: Overrides optional.ratio
            related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
            noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
            urlOverrides: [
              {
                id: 'youtube',
                embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
              }
            ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
            containerClass: 'embedVideo-container', //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
          }
        }
        ]
      }
    },
    'gatsby-transformer-sharp',
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        //icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
