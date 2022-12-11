export interface PrimaryNavigationItem {
  name: string;
  linkTextKey: string;
  linkPath: string;
  isExternalLink?: boolean;
}

const primaryNavigation: PrimaryNavigationItem[] = [
  {
    name: 'profile',
    linkTextKey: 'Camera',
    linkPath: '/profile',
  },
];

export { primaryNavigation as default };
