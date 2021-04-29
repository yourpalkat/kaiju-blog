import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Wrapper } from '../components/UI';
import Carousel from '../components/Carousel';
import Feature from '../components/Feature';
import { getLocalizedContent } from '../utilities/getLocalizedContent';

const HeroImage = styled.div`
  width: 100%;
  img {
    max-width: 100%;
    height: auto;
  }
`;

const HomePage = ({ data }) => {
  const content = getLocalizedContent(data.allContentstackHomepage.nodes);
  const heroImageSource = getImage(content.hero_image.localAsset);

  return (
    <Layout>
      <SEO
        title={content.seo.page_title}
        description={content.seo.page_description}
      />
      <Wrapper>
        <HeroImage>
          <GatsbyImage
            image={heroImageSource}
            alt={content.hero_image.description}
          />
        </HeroImage>
        <h1>
          {content.title}
        </h1>
        <ReactMarkdown>
          {content.intro_text}
        </ReactMarkdown>
        {content?.modular_blocks[0]?.image_carousel && 
          <Carousel content={content.modular_blocks[0].image_carousel} />
        }
        {content?.modular_blocks[0]?.featured_monster && 
          <Feature content={content.modular_blocks[0].featured_monster.feature[0]} />
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
