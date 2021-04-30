import React, { useState } from 'react';
import styled from 'styled-components';
import { changeLocale, useIntl, IntlContextConsumer } from 'gatsby-plugin-intl';
import { colors } from '../../styles/colors';

const StyledButton = styled.button`
  border: 1px solid ${colors.backgroundDark};
  background-color: ${colors.backgroundDark};
  padding: 6px 10px;
  border-radius: 8px;
  font-size: var(--step--1);
  color: ${colors.secondary};
  cursor: pointer;
  opacity: 0.75;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    opacity: 1;
    border: 1px solid ${colors.secondary};
  }
`;

export const LanguageSelector = () => {
  const intl = useIntl();
  const { locale } = intl;
  const [currentLang] = useState(locale);

  return (
    <IntlContextConsumer>
      {({ languages }: { languages: string[] }) =>
        languages.map((language) => (
          <StyledButton
            data-qa-id={"languageSelector"}
            key={language}
            value={language}
            onClick={() => changeLocale(language)}
            style={{
              display: language === currentLang ? "none" : "block",
            }}
          >
            Change to {language.toUpperCase()}
          </StyledButton>
        ))
      }
    </IntlContextConsumer>
  );
};
