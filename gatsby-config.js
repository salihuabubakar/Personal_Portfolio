module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: "Hi, I'm Salihu K",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        start_url: "/",
        icon: "src/images/favicon.png",
        name: "Personal Portfolio",
        short_name: "My Portfolio",
        description: "This is my portfolio, it showcase my all technicall journey",
        background_color: "#fff",
        theme_color: "#ccc",
        orientation: "portrait",
        display: "standalone",
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
};
