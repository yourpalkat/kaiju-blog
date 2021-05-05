import type { GatsbyConfig } from 'gatsby';
import * as path from 'path';

const stylePlugins: GatsbyConfig['plugins'] = [
  {
    resolve: `gatsby-plugin-styled-components`,
    options: {}
  },
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        'lato\:300,3000i,400'
      ],
      display: `swap`
    }
  }
];

const typescriptPlugins: GatsbyConfig['plugins'] = [
  `gatsby-plugin-typescript`,
  {
    resolve: 'gatsby-plugin-typegen',
    options: {
      outputPath: path.resolve(
        __dirname,
        '../../__generated__/gatsby-types.d.ts',
      ),
    },
  },
];

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Kaiju Blog`,
    description: `A proof-of-concept site built with Gatsby and Contentstack.`,
    author: `@thrillworks`,
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: path.resolve(__dirname, `../pages/`), // need absolute path for `gatsby-source-filesystem`
      },
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
        path: path.resolve(__dirname, `../locales/`),
        // supported language
        languages: [`en`, `fr`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/en` when connecting `/`
        redirect: true,
      }
    },
    ...stylePlugins,
    ...typescriptPlugins,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

export default config;