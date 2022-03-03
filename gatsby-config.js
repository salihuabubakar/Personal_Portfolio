module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: "Hi, I'm Salihu K",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem, gatsby-plugin-manifest",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
        icon: "src/images/icon.png",
      },
    },

    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
};
