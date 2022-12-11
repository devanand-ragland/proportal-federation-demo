import { dark } from '@resideo/blueprint-theme';

const colors = {
  ...dark.colors,
  welcomeBanner: '#043246',
  button: {
    danger: {
      hover: '#b52e15',
      hoverText: '#ececec',
    },
  },
  header: {
    icons: '#ffffff',
    primaryBackground: '#032a3c',
    primaryLink: '#4cb5f5',
    primaryLinkActive: '#ffffff',
    secondaryBackground: '#217eae',
    secondaryLink: '#010304',
    secondaryLinkActive: '#ffffff',
  },
  home: {
    icons: '#ffffff',
  },
  list: {
    hover: '#166a96',
  },
  secondaryBackground: '#043246',
  sidebar: {
    circle: '#add8e6',
    background: '#032a3c',
    text: '#fffaa',
    selected: '#0b92cc',
    block: '#023951',
    hover: '#0b92cc',
    active: '#dcdcdc',
  },
  sideNav: {
    active: '#010304',
    arrow: '#ffffff',
    arrowHovered: '#217eae',
  },
  table: {
    oddRowBackgroundColor: '#3c515b',
    rowBorderColor: '#859299',
    header: '#ededed',
  },
  tag: {
    viewer: '#fff',
  },
  badge: {
    primary: '#1fa4ea',
    active: '#258039',
    normal: '#ededed',
  },
};

export default {
  ...dark,
  colors,
};
