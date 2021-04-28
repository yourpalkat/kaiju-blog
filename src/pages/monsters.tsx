import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { graphql } from 'gatsby';
import { Link, useIntl, FormattedMessage } from 'gatsby-plugin-intl';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Wrapper } from '../components/UI';

const MonsterPage = ({ data }) => {
  const intl = useIntl();
  const localizedEntries = data.allContentstackBlogPost.nodes
    .filter(node => intl.locale === node.locale.split('-ca')[0]);
  const localizedContent = data.allContentstackMonsterPage.nodes
    .filter(node => intl.locale === node.locale.split('-ca')[0]);

  return (
    <Layout>
      <SEO
        title={localizedContent[0]?.seo?.page_title}
        description={localizedContent[0]?.seo?.page_description}
      />
      <Wrapper>
        <h1>
          {localizedContent[0].title}
        </h1>
        <ReactMarkdown>{localizedContent[0].page_intro}</ReactMarkdown>
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
