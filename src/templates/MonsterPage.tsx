import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { Link, useIntl, FormattedMessage } from 'gatsby-plugin-intl';
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

const ImageContainer = styled.div`
  border-radius: 12px;
  overflow: hidden;
`;

const Rating = styled.p`
  font-weight: 400;
  font-size: var(--step-0);
  text-align: center;
  background-color: ${colors.backgroundDark};
  padding: 8px 12px;
  border-radius: 12px;
  max-width: 180px;
  margin: 24px 0 48px;
`;

const Description = styled.div`
  p {
    line-height: 1.5;
    margin-bottom: 24px;
  }
`;

const PostedBy = styled.p`
  font-size: var(--step-0);
  margin: 48px 0;

  a {
    color: ${colors.secondary};
  }
`;

const Monster = ({ data }) => {
  const intl = useIntl();
  const content = getLocalizedContent(data.allContentstackBlogPost.nodes);
  const datePosted = new Date(content?.date_posted).toLocaleDateString(intl.locale, { 
    weekday: 'long', 
    month: 'long', 
    year: 'numeric', 
    day: 'numeric' 
  }) || '';
  const imageSource = getImage(content.featured_image.localAsset);

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
          <ImageContainer>
            {imageSource && (
              <GatsbyImage
                image={imageSource}
                alt={content?.featured_image?.description || content?.title}
              />
            )}
          </ImageContainer>
        </IntroWrapper>
        <Rating><FormattedMessage id="monster_rating" /> {content?.rating} / 5</Rating>
        <Description>
          <ReactMarkdown>{content?.description}</ReactMarkdown>
        </Description>
        <PostedBy>
          <FormattedMessage id="posted_by" />
          <Link to={`/author${content?.author[0]?.url}`}>
            {content?.author[0]?.title}
          </Link>{' '}
          {intl.locale === 'en' ? ' on ' : ' sur '}
          {datePosted}
        </PostedBy>
      </Wrapper>
    </Layout>
  );
}

export default Monster;

export const data = graphql`
  query monsterInfo($url: String!) {
    allContentstackBlogPost(filter: {url: {eq: $url}}) {
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
          description
          localAsset {
            childImageSharp {
              gatsbyImageData(width: 1000, placeholder: BLURRED)
            }
          }
        }
        locale
      }
    }
  }
`;