module.exports = {
  siteMetadata: {
    title: "LW | Lee Walpole - Web Designer / SEO",
    author: "Lee Walpole",
    description: "Copywriter / coder who loves flirting with Google and building beautiful, blazingly fast websites."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/lw.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
