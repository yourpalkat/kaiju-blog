import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FormattedMessage } from 'gatsby-plugin-intl';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Wrapper } from '../components/UI';
import { getLocalizedContent } from '../utilities/getLocalizedContent';

const Author = ({ data }) => {
  const content = getLocalizedContent(data.allContentstackAuthor.nodes);
  const imageSource = getImage(content.photo.localAsset);

  return (
    <Layout>
      <SEO
        title={`Author: ${content.title}`}
        description={`Author biography of ${content.title}, a contributor to Kaiju Blog.`}
      />
      <Wrapper>
        <h1><FormattedMessage id="author_profile"/></h1>
        <h2>{content?.title}</h2>
        <h3>{content?.job_title}</h3>
        <GatsbyImage
          image={imageSource}
          alt={content.photo.description}
        />
        <ReactMarkdown>{content?.bio}</ReactMarkdown>
      </Wrapper>
    </Layout>
  );
}

export default Author;

export const data = graphql`
  query authorInfo($url: String!) {
    allContentstackAuthor(filter: {url: {eq: $url}}) {
      nodes {
        id
        url
        title
        job_title
        bio
        locale
        photo {
          description
          localAsset {
            childImageSharp {
              gatsbyImageData(width: 300, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;
