import { light } from '@resideo/blueprint-theme';

const colors = {
  ...light.colors,
  welcomeBanner: '#f8f8f8',
  header: {
    icons: '#ffffff',
    primaryBackground: '#032a3c',
    primaryLink: '#4cb5f5',
    primaryLinkActive: '#ffffff',
    secondaryBackground: '#ffffff',
    secondaryLink: '#217eae',
    secondaryLinkActive: '#000000',
  },
  home: {
    icons: '#012a3a',
  },
  secondaryBackground: '#f8f8f8',
};

export default {
  ...light,
  colors,
};
