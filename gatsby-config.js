module.exports = {
  siteMetadata: {
    title: 'Eric Hubbard',
    author: 'Eric Hubbard',
    description:
      'Eric Hubbard is a software developer in Birmingham, AL. He has experience in web development and mobile app development. He enjoys an intuitive design paired with clean code behind the scenes. Reach out to him for any questions or just to chat!',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-favicon',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-67887022-4',
      },
    },
  ],
}
