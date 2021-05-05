import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { graphql, PageProps } from 'gatsby';
import { Link, FormattedMessage } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Wrapper } from '../components/UI';
import { getLocalizedContent } from '../utilities/getLocalizedContent';
import { colors } from '../styles/colors';

const IntroWrapper = styled.div`
  margin-top: 64px;

  h1 {
    color: ${colors.secondary};
    margin-bottom: 24px;
  }

  p {
    line-height: 1.5;
  }
`;

const ListWrapper = styled.div`
  padding: 36px 24px;
  margin: 64px 0;
  background-color: ${colors.backgroundDark};
  border-radius: 12px;

  h2, h3 {
    color: ${colors.secondary};
  }

  li + li {
    margin-top: 18px;
  }
`;

const MonsterPage = ({ data }: PageProps<GatsbyTypes.monsterpageQuery>) => {
  const localizedEntries = getLocalizedContent(data?.allContentstackBlogPost?.nodes, true);
  const content = getLocalizedContent(data?.allContentstackMonsterPage?.nodes);

  return (
    <Layout>
      <SEO
        title={content?.seo?.page_title}
        description={content?.seo?.page_description}
      />
      <Wrapper>
        <IntroWrapper>
          <h1>
            {content.title}
          </h1>
          <ReactMarkdown>{content.page_intro}</ReactMarkdown>
        </IntroWrapper>
        <ListWrapper>
          <h2>
            <FormattedMessage id="all_monsters" />
          </h2>
          <ul>
            {localizedEntries.map((entry: any) => (
              <li key={entry.id}>
                <Link to={`/monster${entry.url}`}>{entry.title}</Link>
              </li>
            ))}
          </ul>
        </ListWrapper>
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
