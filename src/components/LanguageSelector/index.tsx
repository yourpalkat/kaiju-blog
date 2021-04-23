import React, { useState } from 'react';
import styled from 'styled-components';
import { changeLocale, useIntl, IntlContextConsumer } from 'gatsby-plugin-intl';

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
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
            {language.toUpperCase()}
          </StyledButton>
        ))
      }
    </IntlContextConsumer>
  );
};
