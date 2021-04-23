import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import Navigation from '../Navigation';
import { Wrapper, FlexContainer } from '../UI';

const StyledHeader = styled.header`
  padding: 20px 0;
  border-bottom: solid grey 2px;
`;

const Header = () => (
  <StyledHeader>
    <Wrapper>
      <FlexContainer>
        <Logo />
        <Navigation />
      </FlexContainer>
    </Wrapper>
  </StyledHeader>
);

export default Header;
