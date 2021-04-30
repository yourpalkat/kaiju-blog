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
import { colors } from '../styles/colors';

const HeroImage = styled.div`
  width: 100%;
  margin-bottom: 36px;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  overflow: hidden;
  position: relative;

  h1 {
    color: ${colors.secondary};
    position: absolute;
    top: 64px;
    left: 24px;
    text-shadow: #000000AA -2px 2px;
    font-size: var(--step-5);
    font-weight: 800;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

const IntroContent = styled.div`
  p {
    line-height: 1.55;
    margin-bottom: 24px;
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
          <h1>
            {content.title}
          </h1>
        </HeroImage>

        <IntroContent>
          <ReactMarkdown>
            {content.intro_text}
          </ReactMarkdown>
        </IntroContent>

        {content?.modular_blocks?.map((block) => (
          block.featured_monster 
            ? <Feature content={block.featured_monster.feature[0]} />
            : <Carousel content={block.image_carousel} />
          )
        )}
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
