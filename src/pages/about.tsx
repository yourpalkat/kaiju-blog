import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Wrapper } from '../components/UI';

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={data.contentstackAbout.seo.page_title}
        description={data.contentstackAbout.seo.page_description}
      />
      <Wrapper>
        <h1>
          {data.contentstackAbout.title}
        </h1>
        <p>
          {data.contentstackAbout.about_us_text}
        </p>
      </Wrapper>
    </Layout>
  );
}

export default AboutPage;

export const data = graphql`
  query aboutpage {
    contentstackAbout {
      title
      seo {
        page_title
        page_description
      }
      about_us_text
    }
  }
`;
