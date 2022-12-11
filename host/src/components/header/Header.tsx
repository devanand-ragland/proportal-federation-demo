import React, { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { Flex } from '@resideo/blueprint-react';

import { HeaderLogo } from './HeaderLogo';

const StyledHeader = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.header.secondaryBackground};
  z-index: 100;
`;

const FixedHeader = styled.div`
  width: 100%;
  position: fixed;
  top: 0px;
  background-color: ${({ theme }) => theme.colors.header.secondaryBackground};
`;

const PrimaryNavOuter = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3.75rem;
  background-color: #032a3c;
  overflow: hidden;
  @media (min-width: ${({ theme }) => theme.breakpoints.xLarge}) {
    height: 3.75rem;
  }
`;

const StyledHeaderLogo = styled(HeaderLogo)`
  margin-right: 2rem;
  padding-bottom: 0.625rem;
  padding-top: 0.625rem;
`;

const Header: FC<{
  primaryNav: ReactNode;
}> = ({ primaryNav }): JSX.Element => {
  const { t } = useTranslation();
  return (
    <StyledHeader data-test-header>
      <FixedHeader>
        <PrimaryNavOuter aria-label={t('title')}>
          <Flex
            flex={1}
            as='section'
            flexWrap='wrap'
            flexDirection='row'
            alignItems='center'
            justifyContent={['space-between']}
            paddingX='medium'>
            <StyledHeaderLogo />
            {primaryNav}
          </Flex>
        </PrimaryNavOuter>
      </FixedHeader>
    </StyledHeader>
  );
};

export default Header;
