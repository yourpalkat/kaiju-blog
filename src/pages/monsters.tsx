import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { graphql } from 'gatsby';
import { Link, FormattedMessage } from 'gatsby-plugin-intl';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Wrapper } from '../components/UI';
import { getLocalizedContent } from '../utilities/getLocalizedContent';

const MonsterPage = ({ data }) => {
  const localizedEntries = getLocalizedContent(data.allContentstackBlogPost.nodes, true);
  const content = getLocalizedContent(data.allContentstackMonsterPage.nodes);

  return (
    <Layout>
      <SEO
        title={content?.seo?.page_title}
        description={content?.seo?.page_description}
      />
      <Wrapper>
        <h1>
          {content.title}
        </h1>
        <ReactMarkdown>{content.page_intro}</ReactMarkdown>
        <h2>
          <FormattedMessage id="all_monsters" />
        </h2>
        <ul>
          {localizedEntries.map(entry => (
            <li key={entry.id}>
              <Link to={`/monster${entry.url}`}>{entry.title}</Link>
            </li>
          ))}
        </ul>
      </Wrapper>
    </Layout>
  );
}

export default MonsterPage;

export const data = graphql`
  query monsterpage {
    allContentstackMonsterPage {
      nodes {
        title
        locale
        page_intro
        seo {
          page_title
          page_description
        }
      }
    }
    allContentstackBlogPost {
        nodes {
          title
          url
          id
          locale
        }
    }
  }

`;
