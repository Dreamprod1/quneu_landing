/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Noto Sans`,
            file: `https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;600;700&display=swap`,
          },
          {
            name: `Anta`,
            file: `https://fonts.googleapis.com/css2?family=Anta&display=swap`,
          },
        ],
      },
    },
  ],
};
