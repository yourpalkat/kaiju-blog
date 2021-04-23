import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { graphql } from 'gatsby';
import { Link, useIntl, FormattedMessage } from 'gatsby-plugin-intl';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Wrapper } from '../components/UI';

const MonsterPage = ({ data }) => {
  const intl = useIntl();

  return (
    <Layout>
      <SEO
        title={data.contentstackMonsterPage.seo.page_title}
        description={data.contentstackMonsterPage.seo.page_description}
      />
      <Wrapper>
        <h1>
          {data.contentstackMonsterPage.title}
        </h1>
        <ReactMarkdown>{data.contentstackMonsterPage.page_intro}</ReactMarkdown>
        <h2>
          <FormattedMessage id="all_monsters" />
        </h2>
        <ul>
          {data.allContentstackBlogPost.nodes.map(node => (
            <li key={node.id}><Link to={`/monster${node.url}`}>{node.title}</Link></li>
          ))}
        </ul>
      </Wrapper>
    </Layout>
  );
}

export default MonsterPage;

export const data = graphql`
  query monsterpage {
    contentstackMonsterPage {
      title
      seo {
        page_title
        page_description
      }
      page_intro
    }
    allContentstackBlogPost {
        nodes {
          title
          url
          id
        }
    }
  }

`;
