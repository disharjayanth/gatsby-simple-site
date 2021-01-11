module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
