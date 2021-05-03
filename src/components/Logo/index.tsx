import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby-plugin-intl';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  max-width: 120px;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const Logo = () => {
  const data = useStaticQuery(graphql`
    query logo {
      contentstackHeader {
        logo {
          url
          description
        }
      }
    }
  `);

  return (
    <LogoWrapper>
      <Link to="/">
        <img 
          src={data?.contentstackHeader?.logo?.url}
          alt={data?.contentstackHeader?.logo?.description || 'Kaiju Blog logo'}
        />
      </Link>
    </LogoWrapper>
  );
}

export default Logo;
