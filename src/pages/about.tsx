import * as React from 'react';
import { graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Wrapper } from '../components/UI';

const AboutPage = ({ data }) => {
  const intl = useIntl();
  const localizedContent = data.allContentstackAbout.nodes
    .filter(node => intl.locale === node.locale.split('-ca')[0]);

  return (
    <Layout>
      <SEO
        title={localizedContent[0]?.seo?.page_title}
        description={localizedContent[0]?.seo?.page_description}
      />
      <Wrapper>
        <h1>
          {localizedContent[0]?.title}
        </h1>
        <p>
          {localizedContent[0]?.about_us_text}
        </p>
      </Wrapper>
    </Layout>
  );
}

export default AboutPage;

export const data = graphql`
  query aboutpage {
    allContentstackAbout {
      nodes {
        title
        locale
        seo {
          page_title
          page_description
        }
        about_us_text
      }
    }
  }
`;
