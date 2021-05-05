import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FormattedMessage } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import { colors } from '../../styles/colors';

const CarouselSection = styled.section`
  padding: 36px 24px;
  margin: 64px 0;
  background-color: ${colors.backgroundDark};
  border-radius: 12px;

  h2, h3 {
    color: ${colors.secondary};
  }
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;

  div {
    flex-basis: 30%;
    border-radius: 12px;

    img {
      max-width: 100%;
      height: auto;
    }
  }
`;

type CarouselProps = {
  content: {
    image: any[]
  }
};

const Carousel: React.FC<CarouselProps> = ({ content }) => {
  return (
    <CarouselSection>
      <h2><FormattedMessage id="image_gallery" /></h2>
      <ImageContainer>
        {content?.image?.map((featuredImage: any) => {
          return (
            <div key={featuredImage.id}>
              {featuredImage?.localAsset?.childImageSharp?.gatsbyImageData && (
                <GatsbyImage
                  image={featuredImage.localAsset.childImageSharp.gatsbyImageData}
                  alt={featuredImage.description || ''}
                />
              )}
            </div>
          )}
        )}
      </ImageContainer>
    </CarouselSection>
  );
}

export default Carousel;
