module.exports = {
  siteMetadata: {
    title: `Fylo`,
    description: `Fylo stores all your most important files in one secure location. Access them wherever 
  you need, share and collaborate with friends family, and co-workers.`,
    author: `@alexkmarshall1`,
    primaryLinks: [
      {
        name: `Features`,
        link: `/`,
      },
      {
        name: `Team`,
        link: `/`,
      },
      {
        name: `Sign In`,
        link: `/`,
      },
    ],
    secondaryLinks: [
      {
        name: `About Us`,
        link: `/`,
      },
      {
        name: `Jobs`,
        link: `/`,
      },
      {
        name: `Press`,
        link: `/`,
      },
      {
        name: `Blog`,
        link: `/`,
      },
      {
        name: `Contact Us`,
        link: `/`,
      },
      {
        name: `Terms`,
        link: `/`,
      },
      {
        name: `Privacy`,
        link: `/`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fylo Landing Page`,
        short_name: `Fylo`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
