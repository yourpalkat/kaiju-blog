const path = require('path');

exports.createPages = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;
  const result = await graphql(`
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

  result.data?.allContentstackBlogPost.nodes.forEach(node => {
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

  result.data?.allContentstackAuthor.nodes.forEach(node => {
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
