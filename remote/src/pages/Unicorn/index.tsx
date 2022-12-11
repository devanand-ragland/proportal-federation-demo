import React from 'react';
import { Titled } from 'react-titled';
import { Redirect, Switch } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import styled from 'styled-components';
import { Flex } from '@resideo/blueprint-react';

import Camera from './Camera';


const MainContainer = styled(Flex)`
  border-bottom: 1px solid lightgray;
  height: 100%;
`;

const ContentWrapper = styled(Flex)`
  height: 100%;
  padding-top: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    padding-top: 0;
  }
`;

export const CameraPageLayout = ({ children }) => {


  const { t } = useTranslation();

  const secondaryNavMenuUser = [
    {
      name: 'Camera',
      path: 'unicorn',
      textKey: 'Camera',
    },
    {
      name: 'Account Creation',
      path: 'unicorn/accountCreation',
      textKey: 'Security Account',
    },
  ];

  const menuItems = secondaryNavMenuUser;

  return (
    <MainContainer flexDirection='column' width={1}>
      <ContentWrapper>{children}</ContentWrapper>
    </MainContainer>
  );
};

const UnicornRoutes = () => {
  const { t } = useTranslation();
  return (

         <Camera />  
  );
};

export default UnicornRoutes;
