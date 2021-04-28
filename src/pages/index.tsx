import * as React from 'react';
import { graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Wrapper } from '../components/UI';
import Carousel from '../components/Carousel';
import Feature from '../components/Feature';

const HeroImage = styled.div`
  width: 100%;
  img {
    max-width: 100%;
    height: auto;
  }
`;

const HomePage = ({ data }) => {
  const intl = useIntl();
  const localizedContent = data.allContentstackHomepage.nodes
    .filter(node => intl.locale === node.locale.split('-ca')[0]);

  return (
    <Layout>
      <SEO
        title={localizedContent[0].seo.page_title}
        description={localizedContent[0].seo.page_description}
      />
      <Wrapper>
        <HeroImage>
          <img src={localizedContent[0].hero_image.url} alt={localizedContent[0].hero_image.description} />
        </HeroImage>
        <h1>
          {localizedContent[0].title}
        </h1>
        <ReactMarkdown>
          {localizedContent[0].intro_text}
        </ReactMarkdown>
        {localizedContent[0]?.modular_blocks[0]?.image_carousel && 
          <Carousel content={localizedContent[0].modular_blocks[0].image_carousel} />
        }
        {localizedContent[0]?.modular_blocks[0]?.featured_monster && 
          <Feature content={localizedContent[0].modular_blocks[0].featured_monster} />
        }
      </Wrapper>
    </Layout>
  );
}

export default HomePage;

export const data = graphql`
  query homepage {
    allContentstackHomepage {
      nodes {
        title
        locale
        seo {
          page_title
          page_description
        }
        intro_text
        hero_image {
          url
          description
        }
        modular_blocks {
          image_carousel {
            image {
              id
              url
              description
            }
          }
          featured_monster {
            feature {
              title
              url
              featured_image {
                url
                description
              }
            }
          }
        }
      }
    }
  }
`;
