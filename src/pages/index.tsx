import * as React from 'react';
import { graphql } from 'gatsby';
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
  const content = data.contentstackHomepage;
  return (
    <Layout>
      <SEO
        title={content.seo.page_title}
        description={content.seo.page_description}
      />
      <Wrapper>
        <HeroImage>
          <img src={content.hero_image.url} alt={content.hero_image.description} />
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
          <Feature content={content.modular_blocks[0].featured_monster} />
        }
      </Wrapper>
    </Layout>
  );
}

export default HomePage;

export const data = graphql`
  query homepage {
    contentstackHomepage {
      title
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
`;
