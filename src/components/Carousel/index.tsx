import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FormattedMessage } from 'gatsby-plugin-intl';
import styled from 'styled-components';

const CarouselSection = styled.section`
  padding: 20px 0;
  margin: 40px 0;
  border-top: solid grey 2px;
  border-bottom: solid grey 2px;
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;

  div {
    flex-basis: 30%;

    img {
      max-width: 100%;
      height: auto;
    }
  }
`;

const Carousel = ({ content }) => {
  return (
    <CarouselSection>
      <h2><FormattedMessage id="image_gallery" /></h2>
      <ImageContainer>
        {content.image.map((featuredImage) => {
          const imageSource = getImage(featuredImage.localAssset)
          return (
            <div key={featuredImage.id}>
              <GatsbyImage
                image={imageSource}
                alt={featuredImage.description}
              />
            </div>
          )}
        )}
      </ImageContainer>
    </CarouselSection>
  );
}

export default Carousel;
