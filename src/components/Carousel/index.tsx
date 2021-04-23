import React from 'react';
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
      <h2>Featured Images</h2>
      <ImageContainer>
        {content.image.map((featuredImage) => 
          <div key={featuredImage.id}>
            <img src={featuredImage.url} alt={featuredImage.description} />
          </div>
        )}
      </ImageContainer>
    </CarouselSection>
  );
}

export default Carousel;
