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
        icons: [
          {
            src: "src/images/maskable192.png",
            type: "image/png",
            sizes: "192x192",
            purpose: "any maskable",
          },
          {
            src: "src/images/me192.png",
            type: "image/png",
            sizes: "192x192",
          },
          {
            src: "src/images/me256.png",
            type: "image/png",
            sizes: "256x256",
          },
          {
            src: "src/images/me384.png",
            type: "image/png",
            sizes: "384x384",
          },
          {
            src: "src/images/me512.png",
            type: "image/png",
            sizes: "512x512",
          },
          {
            src: "src/images/favicon.png",
            type: "image/png",
          },
        ],
        name: "Personal Portfolio",
        short_name: "My Portfolio",
        description:
          "This is my portfolio, it showcase my all technicall journey",
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
