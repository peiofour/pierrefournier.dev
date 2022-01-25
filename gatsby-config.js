module.exports = {
  siteMetadata: {
    title: "Le blog de Pierre",
    siteUrl: `https://www.pierrefournier.dev`,
    description: `Site et blog de Pierre Fournier. Je partage sur mes passions, je les fait intéragir entre elles. J'écris également sur mes projets, ainsi que sur mes voyages.`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data/blog`,
        path: `${__dirname}/src/data/blog`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
