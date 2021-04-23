import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby-plugin-intl';
import { LanguageSelector } from '../LanguageSelector';
import styled from 'styled-components';

const FlexContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  list-style: none;

  a {
    text-decoration-color: transparent;
    padding: 10px 0;
    margin-left: 20px;
    transition: all 0.3s ease;

    &:hover,
    &:focus {
      text-decoration-color: inherit;
    }
  }
`;

const Navigation = () => {
  const data = useStaticQuery(graphql`
  query headernav {
    contentstackHeader {
      nav {
        page_link {
          ... on Contentstack_about {
            id
            title
            url
          }
          ... on Contentstack_monster_page {
            id
            url
            title
          }
        }
      }
    }
  }
`);

const navLinks = data.contentstackHeader.nav.page_link;

  return (
    <nav>
      <FlexContainer>
        <li><LanguageSelector /></li>
        {navLinks.map((navLink) => 
          <li key={navLink.id}><Link to={navLink.url}>{navLink.title}</Link></li>
        )}
      </FlexContainer>
    </nav>
  );
}

export default Navigation;