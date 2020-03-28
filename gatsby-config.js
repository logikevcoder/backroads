/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "BackRoads",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse molestias unde possimus ex fuga in debitis similique sapiente corrupti cupiditate, iure rerum voluptatibus nisi quas odit veniam rem quis ea?",
    author: "Kevin Napier",
    data: {
      age: 35,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
