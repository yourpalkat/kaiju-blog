import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { colors } from './colors';

const GlobalStyles = createGlobalStyle`
  ${reset}

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  :root {
    --font-body: 'Lato', sans-serif;
    --step--1: 0.85rem;
    --step-0: 1.1rem;
    --step-1: 1.25rem;
    --step-2: 1.56rem;
    --step-3: 1.95rem;
    --step-4: 2.44rem;
    --step-5: 3.05rem;
  }

  body {
    background-color: ${colors.background};
    color: ${colors.white};
    font-family: var(--font-body);
  }
  h1, h2, h3, h4, button {
    font-family: var(--font-body);
  }
  h1 {
    font-size: var(--step-4);
  }
  h2 {
    font-size: var(--step-3);
    margin-bottom: var(--step-2);
  }
  h3 {
    font-size: var(--step-2);
  }
  p, 
  a, 
  button, 
  li,
  figcaption {
    font-size: var(--step-1);
  }

  a {
    color: inherit;
    text-decoration-color: transparent;
    transition: all 0.3s ease;

    &:hover,
    &:focus {
      text-decoration-color: inherit;
    }
  }
`;

export default GlobalStyles;
