import * as React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components'
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Wrapper } from '../components/UI';
import { getLocalizedContent } from '../utilities/getLocalizedContent';
import { colors } from '../styles/colors';

const IntroWrapper = styled.div`
  margin: 64px 0;

  h1 {
    color: ${colors.secondary};
    margin-bottom: 24px;
  }

  p {
    line-height: 1.5;
  }
`;

const AboutPage = ({ data }) => {
  const content = getLocalizedContent(data?.allContentstackAbout?.nodes);

  return (
    <Layout>
      <SEO
        title={content?.seo?.page_title}
        description={content?.seo?.page_description}
      />
      <Wrapper>
        <IntroWrapper>
          <h1>
            {content?.title}
          </h1>
          <p>
            {content?.about_us_text}
          </p>
        </IntroWrapper>
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
