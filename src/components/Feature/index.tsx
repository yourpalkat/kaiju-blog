import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link, FormattedMessage } from 'gatsby-plugin-intl';
import styled from 'styled-components';

const FeatureSection = styled.section`
  padding: 20px 0;
  margin: 40px 0;
  border-top: solid grey 2px;
  border-bottom: solid grey 2px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;

  .imageContainer {
    flex-basis: 35%;
  }
`;

const Feature = ({ content }) => { 
  const imageSource = getImage(content.featured_image.localAsset);

  return (
    <FeatureSection>
      <h2><FormattedMessage id="featured_monster" /></h2>
      <Flex>
        <div className="imageContainer">
          <GatsbyImage
            image={imageSource}
            alt={content.featured_image.description}
          />
        </div>
        <div>
          <h3>{content.title}!</h3>
          <p><Link to={`/monster${content.url}`}>Read more</Link></p>
        </div>
      </Flex>
    </FeatureSection>
  );
};

export default Feature;
