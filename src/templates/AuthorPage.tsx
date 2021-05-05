import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';
import ReactMarkdown from 'react-markdown';
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

const AuthorCard = styled.div`
  padding: 36px 24px;
  margin: 64px 0;
  background-color: ${colors.backgroundDark};
  border-radius: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.6rem;
  max-width: 800px;

  h2, h3 {
    color: ${colors.secondary};
  }
  p {
    line-height: 1.5;
    margin-top: 24px;
  }
`;

const ImageContainer = styled.div`
  border-radius: 50%;
  border: 2px solid ${colors.backgroundLight};
  overflow: hidden;
  width: 100px;
  height: 100px;
  flex: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Author = ({ data }: PageProps<GatsbyTypes.authorInfoQuery>) => {
  const content = getLocalizedContent(data?.allContentstackAuthor?.nodes);
  const imageSource = getImage(content?.photo?.localAsset);

  return (
    <Layout>
      <SEO
        title={`Author: ${content.title}`}
        description={`Author biography of ${content.title}, a contributor to Kaiju Blog.`}
      />
      <Wrapper>
        <IntroWrapper>
          <h1><FormattedMessage id="author_profile"/></h1>
        </IntroWrapper>
        <AuthorCard>
          <ImageContainer>
            {imageSource && (
              <GatsbyImage
                image={imageSource}
                alt={content?.photo?.description || 'Author photo'}
              />
            )}
          </ImageContainer>
          <div>
            <h2>{content?.title}</h2>
            <h3>{content?.job_title}</h3>
            <ReactMarkdown>{content?.bio}</ReactMarkdown>
          </div>
        </AuthorCard>
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
