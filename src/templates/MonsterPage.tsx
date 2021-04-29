import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ReactMarkdown from 'react-markdown';
import { Link, useIntl, FormattedMessage } from 'gatsby-plugin-intl';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Wrapper } from '../components/UI';
import { getLocalizedContent } from '../utilities/getLocalizedContent';

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
        <h1>
          {content?.title}
        </h1>
        <GatsbyImage
          image={imageSource}
          alt={content?.featured_image?.description}
        />
        <p><strong><FormattedMessage id="monster_rating" /> {content?.rating} / 5</strong></p>
        <ReactMarkdown>{content?.description}</ReactMarkdown>
        <p>
          <small>
            <FormattedMessage id="posted_by" />
            <Link to={`/author${content?.author[0]?.url}`}>
              {content?.author[0]?.title}
            </Link>{' '}
            {intl.locale === 'en' ? ' on ' : ' sur '}
            {datePosted}
          </small>
        </p>
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