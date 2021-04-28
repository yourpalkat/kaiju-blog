import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
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
  const heroImageSource = getImage(localizedContent[0].hero_image.localAsset);

  return (
    <Layout>
      <SEO
        title={localizedContent[0].seo.page_title}
        description={localizedContent[0].seo.page_description}
      />
      <Wrapper>
        <HeroImage>
          <GatsbyImage
            image={heroImageSource}
            alt={localizedContent[0].hero_image.description}
          />
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
          <Feature content={localizedContent[0].modular_blocks[0].featured_monster.feature[0]} />
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
          description
          localAsset {
            childImageSharp {
              gatsbyImageData(width: 1000, placeholder: BLURRED)
            }
          }
        }
        modular_blocks {
          image_carousel {
            image {
              id
              description
              localAsset {
                childImageSharp {
                  gatsbyImageData(width: 1000, placeholder: BLURRED)
                }
              }
            }
          }
          featured_monster {
            feature {
              title
              url
              featured_image {
                description
                localAsset {
                  childImageSharp {
                    gatsbyImageData(width: 600, placeholder: BLURRED)
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
