import { useIntl } from 'gatsby-plugin-intl';


export const getLocalizedContent = (contentstackNodes, returnArray = false) => {
  const intl = useIntl();
  const localContent = contentstackNodes?.filter(node => intl.locale === node.locale.split('-ca')[0]);

  return returnArray ? localContent : localContent[0];
}
