import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link, FormattedMessage } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import { colors } from '../../styles/colors';

const FeatureSection = styled.section`
  padding: 36px 24px;
  margin: 64px 0;
  background-color: ${colors.backgroundDark};
  border-radius: 12px;

  h2, h3 {
    color: ${colors.secondary};
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;

  .imageContainer {
    flex-basis: 35%;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid ${colors.secondary};
  }

  h3 {
    margin-bottom: 24px;
  }
`;

type FeatureProps = {
  content: {
    featured_image: {
      description: string;
      localAsset: any;
    };
    title: string;
    url: string;
  }
};

const Feature: React.FC<FeatureProps> = ({ content }) => { 
  const imageSource = getImage(content.featured_image.localAsset);

  return (
    <FeatureSection>
      <h2><FormattedMessage id="featured_monster" /></h2>
      <Flex>
        <div className="imageContainer">
          {imageSource && (
            <GatsbyImage
              image={imageSource}
              alt={content?.featured_image?.description || content.title}
            />
          )}
        </div>
        <div>
          <h3>{content.title}!</h3>
          <p><Link to={`/monster${content.url}`}>Read more...</Link></p>
        </div>
      </Flex>
    </FeatureSection>
  );
};

export default Feature;
