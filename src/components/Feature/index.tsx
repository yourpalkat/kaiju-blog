import { Link } from 'gatsby';
import React from 'react';
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

const Feature = ({ content }) => (
  <FeatureSection>
    <h2>Featured Monster:</h2>
    <Flex>
      <div className="imageContainer">
        <img src={content.featured_image.url} alt={content.featured_image.description} />
      </div>
      <div>
        <h3>{content.title}!</h3>
        <p><Link to={`/monster${content.url}`}>Read more</Link></p>
      </div>
    </Flex>
  </FeatureSection>
);

export default Feature;
