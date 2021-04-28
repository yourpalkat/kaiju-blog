require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Kaiju Blog",
    description: "A site all about big rubbery monsters",
    author: "Derek Murr"
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: 'gatsby-source-contentstack',
      options: {
        api_key: process.env.CONTENTSTACK_API_KEY,
        delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN,
        environment: process.env.CONTENTSTACK_ENVIRONMENT,
        // Optional: expediteBuild set this to either true or false
        expediteBuild: true,
        // Optional: Specify true if you want to generate custom schema
        enableSchemaGeneration: true,
        // Optional: Specify a different prefix for types.
        // This is useful in cases where you have multiple instances
        // of the plugin to be connected to different stacks.
        type_prefix: 'Contentstack', // (default)
        downloadImages: true,
      },
    },
    {
      resolve: 'gatsby-plugin-intl',
      options: {
        // language JSON resource path
        path: `${__dirname}/src/locales`,
        // supported language
        languages: [`en`, `fr`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/en` when connecting `/`
        redirect: true,
      }
    }
  ],
};
