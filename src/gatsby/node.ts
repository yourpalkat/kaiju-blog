import * as path from 'path';
import { GatsbyNode } from 'gatsby';

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;
  const result = await graphql<{
    allContentstackBlogPost: { nodes: { url: string, locale: string, id: string }[] };
    allContentstackAuthor: { nodes: { url: string, locale: string, id: string }[] };
  }>(`
    query allpages {
      allContentstackBlogPost {
        nodes {
          id
          url
          locale
        }
      }
      allContentstackAuthor {
        nodes {
          id
          url
          locale
        }
      }
    }
  `);

  result?.data?.allContentstackBlogPost.nodes
    .filter((node: any) => node.locale === 'en-ca')
    .forEach((node: any) => {
      console.log(`Creating page at /monster${node.url}`);
      createPage({
        path: `/monster${node.url}`,
        component: path.resolve(`./src/templates/MonsterPage.tsx`),
        context: {
          pageId: node.id,
          url: node.url,
          locale: node.locale
        },
      });
    });

  result?.data?.allContentstackAuthor.nodes
    .filter((node: any) => node.locale === 'en-ca')
    .forEach((node: any) => {
      console.log(`Creating page at /author${node.url}`);
      createPage({
        path: `/author${node.url}`,
        component: path.resolve(`./src/templates/AuthorPage.tsx`),
        context: {
          pageId: node.id,
          url: node.url,
          locale: node.locale
        },
      });
    });
};
