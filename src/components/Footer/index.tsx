import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { Wrapper, FlexContainer } from '../UI';

const StyledFooter = styled.footer`
  padding: 20px 0;
  border-top: solid grey 2px;
`;

const SocialLinks = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
`;

const Footer = () => {
  const data = useStaticQuery(graphql`
    query footercontent {
      contentstackFooter {
        copyright
        social_links {
          link {
            href
            title
          }
        }
      }
    }
  `);

  const content = data.contentstackFooter;

  return (
    <StyledFooter>
      <Wrapper>
        <FlexContainer>
          <p>{content.copyright}</p>
          <SocialLinks>
            {content.social_links.link.map((socialLink) => 
              <li key={socialLink.title}><a href={socialLink.href}>{socialLink.title}</a></li>
            )}
          </SocialLinks>
        </FlexContainer>
      </Wrapper>
    </StyledFooter>
  );
}

export default Footer;
