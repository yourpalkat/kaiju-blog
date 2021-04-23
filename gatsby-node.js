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
          title
          url
          type
          seo {
            page_title
            page_description
          }
          author {
            title
            url
          }
          date_posted
          description
          rating
          featured_image {
            url
            description
          }
          locale
        }
      }
      allContentstackAuthor {
        nodes {
          id
          url
          title
          job_title
          bio
          locale
          photo {
            url
            description
          }
        }
      }
    }
  `);

  result.data?.allContentstackBlogPost.nodes.forEach(node => {
    createPage({
      path: node.locale === 'en-ca' ? `/monster${node.url}` : `/fr/monster${node.url}`,
      component: path.resolve(`./src/templates/MonsterPage.tsx`),
      context: {
        data: node,
      },
    });
  });

  result.data?.allContentstackAuthor.nodes.forEach(node => {
    createPage({
      path: node.locale === 'en-ca' ? `/author${node.url}` : `/fr/author${node.url}`,
      component: path.resolve(`./src/templates/AuthorPage.tsx`),
      context: {
        data: node,
      },
    });
  });
};
